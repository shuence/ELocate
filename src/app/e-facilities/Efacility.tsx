"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { Map, Popup } from "mapbox-gl";
import { FaCheckCircle, FaTimesCircle, FaDirections, FaRecycle, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
import getLocation from "../utils/getLocation";
import { calculateDistance } from "../utils/calculateLocation";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Link from "next/link";
import { facility } from "../data/facility";
import Head from "next/head";

interface Facility {
  address: string;
  distance: number;
  name: string;
  capacity: number;
  lon: number;
  lat: number;
  contact: string;
  time: string;
  verified: boolean;
}

const FacilityMap: React.FC = () => {
  const [facilityData, setFacilityData] = useState<Facility[]>([]);
  const [clientLocation, setClientLocation] = useState<[number, number] | null>(
    null
  );
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filterVerified, setFilterVerified] = useState<boolean>(false);
  const [filterDistance, setFilterDistance] = useState<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const mapRef = useRef<Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

    setIsLoading(true);
    getLocation().then((coordinates) => {
      if (coordinates) {
        setClientLocation(coordinates.coordinates);
      } else {
        setClientLocation([75.7139, 19.7515]);
      }
      setIsLoading(false);
    });
  }, []);

  const handleAllowLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error('User denied the request for location.');
              break;
            case error.POSITION_UNAVAILABLE:
              console.error('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              console.error('The request to get user location timed out.');
              break;
            default:
              console.error('An unknown error occurred.');
              break;
          }
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  
  const filteredFacilities = () => {
    if (!facilityData.length) return [];
    
    let filtered = [...facilityData];
    
    if (filterVerified) {
      filtered = filtered.filter(f => f.verified);
    }
    
    if (filterDistance !== null) {
      filtered = filtered.filter(f => f.distance <= filterDistance);
    }
    
    return filtered;
  };

  useEffect(() => {
    if (clientLocation) {
      const sortedFacilities = facility
        .map((facility) => ({
          ...facility,
          distance: calculateDistance(
            clientLocation[1],
            clientLocation[0],
            facility.lat,
            facility.lon
          ),
        }))
        .sort((a, b) => a.distance - b.distance);

      setFacilityData(sortedFacilities);

      const map = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: "mapbox://styles/mapbox/streets-v11",
        center: clientLocation,
        zoom: 10,
      });

      mapRef.current = map;
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: "Search for your location",
      });

      map.addControl(geocoder);

      geocoder.on(
        "result",
        (event: { result: { geometry: any; place_name: any } }) => {
          const { geometry, place_name } = event.result;

          if (geometry && geometry.coordinates) {
            const center = geometry.coordinates;

            // Remove previous markers if they exist
            if (userMarkerRef.current) {
              userMarkerRef.current.remove();
            }

            const selectedLocationMarker = new mapboxgl.Marker({
              color: "#3366ff",
              scale: 1.2
            })
              .setLngLat(center)
              .addTo(map);

            userMarkerRef.current = selectedLocationMarker;

            const popup = new Popup().setHTML(
              `<div class="p-2">
                <h3 class="font-bold text-indigo-600 text-lg mb-1">Selected Location</h3>
                <p class="text-sm text-gray-700">Address: ${place_name || "Address not available"}</p>
              </div>`
            );

            selectedLocationMarker.setPopup(popup);

            // Recalculate distances based on new location
            const recalculatedFacilities = facility
              .map((facility) => ({
                ...facility,
                distance: calculateDistance(
                  center[1],
                  center[0],
                  facility.lat,
                  facility.lon
                ),
              }))
              .sort((a, b) => a.distance - b.distance);

            setFacilityData(recalculatedFacilities);
            setClientLocation([center[0], center[1]]);

            // Find the nearest facility
            const nearestFacility = recalculatedFacilities[0];
            getDirections(center, [nearestFacility.lon, nearestFacility.lat]);
            setSelectedFacility(0);
          }
        }
      );

      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      const userMarker = new mapboxgl.Marker({ 
        color: "#3366ff",
        scale: 1.2 
      })
        .setLngLat(clientLocation)
        .addTo(map);
        
      const userPopup = new Popup().setHTML(
        `<div class="p-2">
          <h3 class="font-bold text-indigo-600 text-lg mb-1">Your Location</h3>
        </div>`
      );
      
      userMarker.setPopup(userPopup);
      userMarkerRef.current = userMarker;

      // Clear existing markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      sortedFacilities.forEach((facility, index) => {
        const popup = new Popup().setHTML(
          `<div class="p-3">
            <h3 class="font-bold text-emerald-600 text-xl mb-2">${facility.name}</h3>
            <div class="flex items-center text-sm mb-1">
              <span class="font-semibold mr-2">Capacity:</span>
              <span>${facility.capacity} tons/month</span>
            </div>
            <div class="flex items-start text-sm mb-1">
              <span class="font-semibold mr-2">Address:</span>
              <span>${facility.address}</span>
            </div>
            <div class="flex items-center text-sm mb-1">
              <span class="font-semibold mr-2">Contact:</span>
              <span>${facility.contact}</span>
            </div>
            <div class="flex items-center text-sm mb-1">
              <span class="font-semibold mr-2">Hours:</span>
              <span>${facility.time}</span>
            </div>
            <div class="flex items-center text-sm font-medium text-indigo-600">
              <span>${facility.distance.toFixed(2)} km from your location</span>
            </div>
          </div>`
        );

        const marker = new mapboxgl.Marker({
          color: facility.verified ? "#10b981" : "#f97316",
          scale: selectedFacility === index ? 1.2 : 1
        })
          .setLngLat([facility.lon, facility.lat])
          .setPopup(popup);

        markersRef.current.push(marker);

        marker.addTo(map);

        marker.getElement().addEventListener("click", () => {
          const marker = markersRef.current[index];
          const popup = marker.getPopup();

          if (popup) {
            if (popup.isOpen()) {
              popup.remove();
            } else {
              popup.addTo(mapRef.current!);
            }
          }
          setSelectedFacility(index);
        });

        popup.on("close", () => {
          setSelectedFacility(null);
        });
      });

      return () => {
        map.remove();
      };
    }
  }, [clientLocation, selectedFacility]);

  // Update markers when selected facility changes
  useEffect(() => {
    if (markersRef.current && mapRef.current) {
      markersRef.current.forEach((marker, index) => {
        marker.getElement().className = `mapboxgl-marker mapboxgl-marker-anchor-center ${
          selectedFacility === index ? "pulse-marker" : ""
        }`;
        
        // Update marker scale
        if (selectedFacility === index) {
          marker.setDraggable(false);
          marker.getElement().style.transform = `translate(-50%, -50%) scale(1.2)`;
        } else {
          marker.setDraggable(false);
          marker.getElement().style.transform = `translate(-50%, -50%) scale(1.0)`;
        }
      });
    }
  }, [selectedFacility]);

  const getDirections = async (
    origin: [number, number],
    destination: [number, number]
  ) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
      );

      const data = await response.json();

      if (data.code === "Ok" && mapRef.current) {
        const distanceInKm = data.routes[0].distance / 1000;
        const durationInMinutes = Math.ceil(data.routes[0].duration / 60);

        const directionsLayerId = "directions";
        if (mapRef.current.getLayer(directionsLayerId)) {
          mapRef.current.removeLayer(directionsLayerId);
          mapRef.current.removeSource(directionsLayerId);
        }

        mapRef.current.addSource(directionsLayerId, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: data.routes[0].geometry,
          },
        });

        mapRef.current.addLayer({
          id: directionsLayerId,
          type: "line",
          source: directionsLayerId,
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#4f46e5",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });

        const bounds = new mapboxgl.LngLatBounds();
        data.routes[0].geometry.coordinates.forEach((coord: [number, number]) =>
          bounds.extend(coord)
        );
        mapRef.current.fitBounds(bounds, { padding: 60 });

        const routePopup = new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: false,
          offset: 25,
          className: "directions-popup",
        })
          .setLngLat(data.routes[0].geometry.coordinates[Math.floor(data.routes[0].geometry.coordinates.length / 2)])
          .setHTML(
            `<div class="p-3">
              <h3 class="font-bold text-indigo-600 text-lg mb-1">Route Information</h3>
              <p class="text-md mb-1">Distance: <span class="font-semibold">${distanceInKm.toFixed(2)} km</span></p>
              <p class="text-md">Estimated time: <span class="font-semibold">${durationInMinutes} minutes</span></p>
            </div>`
          )
          .addTo(mapRef.current);
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  useEffect(() => {
    if (
      selectedFacility !== null &&
      cardContainerRef.current &&
      mapRef.current &&
      facilityData.length > 0
    ) {
      const cardHeight = 220; // Approximate height of each card
      const scrollPosition = selectedFacility * cardHeight;
      
      cardContainerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      
      // Get directions from current location to selected facility
      if (clientLocation && selectedFacility < facilityData.length) {
        const selected = facilityData[selectedFacility];
        getDirections(clientLocation, [selected.lon, selected.lat]);
      }
    }
  }, [selectedFacility, facilityData, clientLocation]);

  return (
    <>
      <Head>
        <title>ELocate - Find Nearby E-Waste Recycling Facilities</title>
        <meta name="description" content="Locate certified e-waste recycling facilities near you. Get directions, facility details, and book recycling services with our interactive map." />
      </Head>
    
      <div className="min-h-screen bg-gray-50 e-facilities-container">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Locating the nearest e-waste facilities...</p>
            </div>
          </div>
        ) : clientLocation ? (
          <div className="pt-8 pb-16 px-4 md:px-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">E-Waste Recycling Facility Locator</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find certified e-waste collection and recycling centers near you. Get directions, check facility details, and book recycling services.
              </p>
            </div>
            
            <div className="mb-6 flex flex-wrap gap-4 justify-center">
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-700">Verified Facility</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                <span className="w-4 h-4 rounded-full bg-orange-500 mr-2"></span>
                <span className="text-gray-700">Unverified Facility</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
                <span className="text-gray-700">Your Location</span>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 flex flex-col">
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <h2 className="font-bold text-xl mb-3 text-gray-800">Filter Facilities</h2>
                  
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <button 
                      className={`px-4 py-2 rounded-md ${filterVerified ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setFilterVerified(!filterVerified)}
                    >
                      Verified Only
                    </button>
                    
                    <select 
                      className="px-4 py-2 rounded-md border border-gray-200 bg-gray-100"
                      value={filterDistance || ""}
                      onChange={(e) => setFilterDistance(e.target.value ? parseInt(e.target.value) : null)}
                    >
                      <option value="">Distance - Any</option>
                      <option value="5">Within 5 km</option>
                      <option value="10">Within 10 km</option>
                      <option value="20">Within 20 km</option>
                      <option value="50">Within 50 km</option>
                    </select>
                  </div>
                </div>
                
                <div
                  ref={cardContainerRef}
                  className="flex-grow bg-gray-50 rounded-lg overflow-y-auto max-h-[70vh] p-1"
                  style={{ scrollbarWidth: 'thin' }}
                >
                  {filteredFacilities().length > 0 ? (
                    filteredFacilities().map((info, index) => (
                      <div
                        key={index}
                        className={`p-4 bg-white rounded-lg shadow-sm cursor-pointer mb-4 border-l-4 transition-all duration-200 hover:shadow-md
                          ${selectedFacility === index ? "border-l-emerald-500 shadow-md" : info.verified ? "border-l-green-500" : "border-l-orange-500"}`}
                        onClick={() => {
                          setSelectedFacility(index);
                        }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h2 className="text-xl font-bold text-gray-800">{info.name}</h2>
                          {info.verified ? (
                            <div className="flex items-center text-green-500 text-sm font-medium">
                              <FaCheckCircle className="mr-1" />
                              Verified
                            </div>
                          ) : (
                            <div className="flex items-center text-orange-500 text-sm font-medium">
                              <FaTimesCircle className="mr-1" />
                              Unverified
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-3 space-y-1 text-gray-600">
                          <div className="flex items-start">
                            <FaMapMarkerAlt className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                            <p>{info.address}</p>
                          </div>
                          <div className="flex items-center">
                            <FaPhoneAlt className="text-gray-400 mr-2 flex-shrink-0" />
                            <p>{info.contact}</p>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="text-gray-400 mr-2 flex-shrink-0" />
                            <p>{info.time}</p>
                          </div>
                          <p className="font-medium text-indigo-600">
                            {info.distance.toFixed(2)} km away
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            className="flex-1 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (clientLocation) {
                                getDirections(clientLocation, [info.lon, info.lat]);
                              }
                            }}
                          >
                            <FaDirections className="mr-2" />
                            Directions
                          </button>

                          <Link
                            href="/recycle"
                            className="flex-1 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                          >
                            <FaRecycle className="mr-2" />
                            Book Recycling
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-600">
                      No facilities match your current filters. Try adjusting your search criteria.
                    </div>
                  )}
                </div>
              </div>
              
              <div 
                ref={mapContainerRef} 
                id="map" 
                className="lg:w-2/3 h-[75vh] rounded-lg shadow-md"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
            <div className="max-w-md mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Location Access Required
              </h2>
              
              <p className="text-gray-600 mb-8">
                We need access to your location to show you nearby e-waste recycling facilities. Please enable location services in your browser settings.
              </p>
              
              <button 
                onClick={handleAllowLocationClick} 
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Allow Location Access
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style jsx global>{`
        .mapboxgl-popup-content {
          padding: 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        
        .mapboxgl-ctrl-geocoder {
          width: 100%;
          max-width: 360px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .directions-popup .mapboxgl-popup-content {
          border-left: 4px solid #4f46e5;
        }
        
        .pulse-marker::before {
          content: '';
          position: absolute;
          width: 300%;
          height: 300%;
          top: -100%;
          left: -100%;
          background-color: rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          z-index: -1;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default FacilityMap;
