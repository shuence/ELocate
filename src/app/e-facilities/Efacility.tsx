"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { Map, Popup } from "mapbox-gl";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
import getLocation from "../utils/getLocation";
import { calculateDistance } from "../utils/calculateLocation";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Link from "next/link";
import { facility } from "../data/facility";

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
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const mapRef = useRef<Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

    getLocation().then((coordinates) => {
      if (coordinates) {
        setClientLocation(coordinates.coordinates);
      } else {
        setClientLocation([75.7139, 19.7515]);
      }
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
      });

      map.addControl(geocoder);

      geocoder.on(
        "result",
        (event: { result: { geometry: any; place_name: any } }) => {
          const { geometry, place_name } = event.result;

          if (geometry && geometry.coordinates) {
            const center = geometry.coordinates;

            const selectedLocationMarker = new mapboxgl.Marker()
              .setLngLat(center)
              .addTo(map);

            const popup = new Popup().setHTML(
              `<h3 class="font-bold text-emerald-600 text-2xl">Selected Location</h3>
            <p>Address: ${place_name || "Address not available"}</p>`
            );

            selectedLocationMarker.setPopup(popup);

            // Find the nearest facility
            let nearestFacility = facility[0];
            let nearestDistance = calculateDistance(
              center[1],
              center[0],
              facility[0].lat,
              facility[0].lon
            );

            facility.forEach((facility) => {
              const distance = calculateDistance(
                center[1],
                center[0],
                facility.lat,
                facility.lon
              );

              if (distance < nearestDistance) {
                nearestFacility = facility;
                nearestDistance = distance;
              }
            });
            getDirections(center, [nearestFacility.lon, nearestFacility.lat]);
          }
        }
      );

      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      const userMarker = new mapboxgl.Marker({ color: "#256dd9" })
        .setLngLat(clientLocation)
        .addTo(map);

      userMarkerRef.current = userMarker;

      sortedFacilities.forEach((facility, index) => {
        const popup = new Popup().setHTML(
          `<h3 class="font-bold text-emerald-600 text-2xl">${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${facility.address}</p>
              <p class="text-gray-600">Contact: ${facility.contact}</p>
              <p class="text-gray-600">Time: ${facility.time}</p>
              <p class="text-gray-600 ">Distance: ${facility.distance.toFixed(
                2
              )} km away</p>
              `
        );

        const marker = new mapboxgl.Marker({
          color: selectedFacility === index ? "#02703f" : "#22b371",
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

        const directionsBtn = document.getElementById(`directionsBtn${index}`);
        if (directionsBtn) {
          directionsBtn.addEventListener("click", () => {
            getDirections(clientLocation!, [facility.lon, facility.lat]);
          });
        }

        popup.on("close", () => {
          setSelectedFacility(null);
        });
      });

      return () => {
        map.remove();
      };
    }
  }, [clientLocation, selectedFacility]);

  const getDirections = async (
    origin: [number, number],
    destination: [number, number]
  ) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
      );

      const data = await response.json();

      if (data.code === "Ok" && mapRef.current) {
        const distanceInKm = data.routes[0].distance / 1000;

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
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });

        const bounds = new mapboxgl.LngLatBounds();
        data.routes[0].geometry.coordinates.forEach((coord: [number, number]) =>
          bounds.extend(coord)
        );
        mapRef.current.fitBounds(bounds, { padding: 20 });

        const routePopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          className: "h-8",
        })
          .setLngLat(data.routes[0].geometry.coordinates[0])
          .setHTML(
            `<p class="text-lg">Distance to Nearest Facility: ${distanceInKm.toFixed(
              2
            )} km</p>`
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
      mapRef.current
    ) {
      cardContainerRef.current.scrollTo({
        top: selectedFacility * 120,
        behavior: "smooth",
      });
    }
  }, [selectedFacility]);

  useEffect(() => {
    if (selectedFacility !== null && mapRef.current && markersRef.current) {
      const selectedMarker = markersRef.current[selectedFacility];
      const selectedMarkerLngLat = selectedMarker.getLngLat();

      mapRef.current.flyTo({
        center: selectedMarkerLngLat!,
        essential: true,
      });

      markersRef.current.forEach((marker, index) => {
        marker.getElement().addEventListener("click", () => {
          setSelectedFacility(index);
        });
      });

      selectedMarker.getElement().click();
    }
  }, [selectedFacility]);

  return (
    <div className="flex flex-col-reverse md:flex-row pt-24 md:pt-14 my-2 md:mt-8">
      {clientLocation ? (
        <>
          <div
            ref={cardContainerRef}
            className="flex flex-col md:w-1/3 m-4 shadow-lg max-h-200 overflow-y-auto"
          >
            {facilityData.map((info, index) => (
              <div
                key={index}
                className={`p-4 bg-white rounded-md border border-gray-300 cursor-pointer mb-4 
        ${selectedFacility === index ? "bg-green-200" : ""}`}
                onClick={() => {
                  setSelectedFacility(index);
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{info.name}</h2>
                  {info.verified ? (
                    <FaCheckCircle className="text-green-500 w-8 h-8 text-lg" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-8 h-8 text-lg" />
                  )}
                </div>
                <p className="text-gray-600">Capacity: {info.capacity}</p>
                <p className="text-gray-600">{info.address}</p>
                <div className="my-2">
                  <p className="text-lg text-gray-600">
                    Contact: {info.contact}
                  </p>
                  <p className="text-lg text-gray-600">Time: {info.time}</p>
                  <p className="text-lg pb-2 text-gray-600">
                    Distance: {info.distance.toFixed(2)} Km away
                  </p>
                  <div className="flex space-x-6 ">
                    <button
                      className="btn-md btn-primary"
                      id={`directionsBtn${index}`}
                    >
                      Get Directions
                    </button>

                    <Link href="/recycle" className="btn-md btn-primary">
                      Book Recycling
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={mapContainerRef} id="map" className="flex m-4" />
        </>
      ) : (
        <div className="px-4 w-full md:h-[70vh] py-16 md:pt-64 md:py-24 md:container text-center">
          <div className="flex flex-col items-center justify-center px-10">
            <div className="text-black section-subtitle-error text-center font-bold text-2xl md:text-4xl 2xl:text-6xl uppercase tracking-widest teamHeadingText">
              Location access denied. Please enable location services.
            </div>
            <div className="text-black text-center text-xl md:text-3xl mt-4">
              Please allow the location permissions...
            </div>
              <button onClick={handleAllowLocationClick} className="bg-emerald-500 text-white font-bold text-xl py-3 px-6 mt-8 rounded-full hover:bg-white-700">
                Allow Location
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityMap;
