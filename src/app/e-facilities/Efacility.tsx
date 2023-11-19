"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl, { Map, Popup } from "mapbox-gl";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
import getLocation from "../utils/getLocation";
import { calculateDistance } from "../utils/calculateLocation";

interface Facility {
  distance: number;
  name: string;
  capacity: string;
  lon: number;
  lat: number;
  contact: string;
  time: string;
  verified: boolean;
}


const FacilityMap: React.FC = () => {
  const facility = useMemo(
    () => [
      {
        name: "Facility 1",
        capacity: "100",
        lon: 75.3433,
        lat: 19.8762,
        contact: "123-456-7890",
        time: "9:00 AM - 5:00 PM",
        verified: true,
      },
      {
        name: "Facility 2",
        capacity: "150",
        lon: 75.3533,
        lat: 19.8862,
        contact: "987-654-3210",
        time: "10:00 AM - 6:00 PM",
        verified: false,
      },
      {
        name: "Facility 3",
        capacity: "80",
        lon: 75.3633,
        lat: 19.8962,
        contact: "111-222-3333",
        time: "8:00 AM - 4:00 PM",
        verified: true,
      },
      {
        name: "Facility 4",
        capacity: "80",
        lon: 75.3266,
        lat: 19.8415,
        contact: "444-555-6666",
        time: "11:00 AM - 7:00 PM",
        verified: false,
      },
      {
        name: "Facility 5",
        capacity: "120",
        lon: 73.8567,
        lat: 18.5204,
        contact: "777-888-9999",
        time: "9:30 AM - 5:30 PM",
        verified: true,
      },
      {
        name: "Facility 6",
        capacity: "90",
        lon: 73.7898,
        lat: 18.5074,
        contact: "555-444-3333",
        time: "10:30 AM - 6:30 PM",
        verified: false,
      },
      {
        name: "Facility 7",
        capacity: "110",
        lon: 73.9162,
        lat: 18.5037,
        contact: "999-888-7777",
        time: "8:30 AM - 4:30 PM",
        verified: true,
      },
      {
        name: "Facility 8",
        capacity: "70",
        lon: 73.9277,
        lat: 18.5183,
        contact: "222-333-4444",
        time: "11:30 AM - 7:30 PM",
        verified: false,
      },
    ],
    []
  );

  const [facilityData, setFacilityData] = useState<Facility[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [clientLocation, setClientLocation] = useState<[number, number] | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const mapRef = useRef<Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

    getLocation().then((coordinates) => {
      if (coordinates) {
        setClientLocation(coordinates.coordinates);
      } else {
        setClientLocation([75.7139, 19.7515]);
      }
    });
  }, []);

  const getAddress = async (facilities: Facility[]): Promise<string[]> => {
    try {
      const addresses = await Promise.all(
        facilities.map(async (facility) => {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${facility.lon},${facility.lat}.json?access_token=${mapboxgl.accessToken}`
          );
          const data = await response.json();
          const address =
          data.features[0]?.place_name || "Address not available";
        const uniqueWordsSet = new Set(address.split(", "));
        const uniqueWordsArray = Array.from(uniqueWordsSet);
        const newAddress = uniqueWordsArray.join(", ");

        setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
        return newAddress;
        })
      );

      return addresses;
    } catch (error) {
      console.error("Error fetching addresses:", error);
      return [];
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
  
      const userMarker = new mapboxgl.Marker({ color: "#256dd9" })
        .setLngLat(clientLocation)
        .addTo(map);
  
      userMarkerRef.current = userMarker;
  
      getAddress(sortedFacilities)
        .then((newAddress) => {
          setAddresses(newAddress);
  
          sortedFacilities.forEach((facility, index) => {
            const popup = new Popup({
              closeButton: false,
              closeOnClick: false,
              offset: 25,
              className: '',
            }).setHTML(
              `<h3 class="font-bold text-emerald-600 text-2xl">${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${newAddress[index]}</p>
              <p class="text-gray-600">Contact: ${facility.contact}</p>
              <p class="text-gray-600">Time: ${facility.time}</p>
              <p class="text-gray-600 mb-4">Distance: ${facility.distance.toFixed(2)} km away</p>
              <button class="btn-md btn-primary" id="directionsBtn${index}">Get Directions</button>
              `
            );
  
            const marker = new mapboxgl.Marker({ color: selectedFacility === index ? "#02703f" : "#22b371" })
              .setLngLat([facility.lon, facility.lat])
              .setPopup(popup);
  
            markersRef.current.push(marker);
  
            marker.addTo(map);
  
            marker.getElement().addEventListener('click', () => {
            
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
           popup.on('open', () => {
              const directionsBtn = document.getElementById(`directionsBtn${index}`);
              if (directionsBtn) {
                directionsBtn.addEventListener('click', () => {
                  getDirections(clientLocation!, [facility.lon, facility.lat]);
                });
              }
            });
          });      
  
        })
        .catch((error) => console.error("Error fetching addresses:", error));
  
      return () => {
        map.remove();
      };
    }
  }, [clientLocation, facility, selectedFacility]);
  

  const getDirections = async (origin: [number, number], destination: [number, number]) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
      );
  
      const data = await response.json();
  
      if (data.code === "Ok" && mapRef.current) {
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
        data.routes[0].geometry.coordinates.forEach((coord: [number, number]) => bounds.extend(coord));
        mapRef.current.fitBounds(bounds, { padding: 20 });
  
      {/**  const distanceInKm = data.routes[0].distance / 1000;
  
      const routePopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          className: 'w-40 h-8',
        })
          .setLngLat(data.routes[0].geometry.coordinates[0])
          .setHTML(`<p class="text-lg">Distance: ${distanceInKm.toFixed(2)} km away</p>`)
          .addTo(mapRef.current);
  
        // Close the popup when the route is clicked
        mapRef.current.on('click', directionsLayerId, () => {
          routePopup.remove();
        }); **/}
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };
  

  useEffect(() => {
    if (selectedFacility !== null && cardContainerRef.current && mapRef.current) {
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
        marker.getElement().addEventListener('click', () => {
          setSelectedFacility(index);
        });
      });
  
      selectedMarker.getElement().click();
    }
  }, [selectedFacility]);
  

 

  return (
    <div className="flex flex-col-reverse md:flex-row section my-2 md:my-8">
    <div
      ref={cardContainerRef}
      className="flex flex-col md:w-1/3 m-4 shadow-lg max-h-200 overflow-y-auto"
    >
      {facilityData.map((info, index) => (
        <div
          key={index}
          className={`p-4 bg-white rounded-md border border-gray-300 cursor-pointer mb-4 ${
            selectedFacility === index ? "bg-emerald-100" : ""
          }`}
          onClick={() => setSelectedFacility(index)}
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
          <p className="text-gray-600">{addresses[index]}</p>
          <div className="my-2">
            <p className="text-lg text-gray-600">Contact: {info.contact}</p>
            <p className="text-lg text-gray-600">Time: {info.time}</p>
            <p className="text-lg pb-2 text-gray-600">Distance: {info.distance.toFixed(2)} Km away</p>
            <button className="btn-md btn-primary" id={`directionsBtn${index}`}>Get Directions</button>
          </div>
        </div>
      ))}
    </div>
    <div ref={mapContainerRef} id="map" className="flex m-4" />
  </div>
  );
};

export default FacilityMap;