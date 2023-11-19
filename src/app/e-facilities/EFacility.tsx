import React, { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "mapbox-gl/dist/mapbox-gl.css";
import getLocation from "../utils/getLocation";

const FacilityMap = () => {
  const facilityData = useMemo(
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
        lon: 75.3466,
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

  const [addresses, setAddresses] = useState<string[]>([]);
  const [clientLocation, setClientLocation] = useState<[number, number] | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const mapRef = useRef<mapboxgl.Map | null>(null);



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

  useEffect(() => {
    if (selectedFacility !== null && cardContainerRef.current && mapRef.current) {
      cardContainerRef.current.scrollTo({
        top: selectedFacility * 120,
        behavior: "smooth",
      });

      const selectedMarker = markersRef.current[selectedFacility];
      const selectedMarkerLngLat = selectedMarker.getLngLat();

      mapRef.current.flyTo({
        center: selectedMarkerLngLat,
        essential: true,
      });

      selectedMarker.getElement().click();
    }
  }, [selectedFacility]);

  useEffect(() => {
    if (clientLocation) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: clientLocation,
        zoom: 10,
      });

      facilityData.forEach((facility, index) => {
        fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${facility.lon},${facility.lat}.json?access_token=${mapboxgl.accessToken}`
        )
          .then((response) => response.json())
          .then((data) => {
            const address =
              data.features[0]?.place_name || "Address not available";
            const uniqueWordsSet = new Set(address.split(", "));
            const uniqueWordsArray = Array.from(uniqueWordsSet);
            const newAddress = uniqueWordsArray.join(", ");

            setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
            console.log(address);
            console.log(newAddress);
            const popup = new mapboxgl.Popup().setHTML(
              `<h3>${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${newAddress}</p>
              <p className="text-gray-600">Contact: ${facility.contact}</p>
              <p className="text-gray-600">Time: ${facility.time}</p>
              `
            );

            const marker = new mapboxgl.Marker()
              .setLngLat([facility.lon, facility.lat])
              .setPopup(popup);

            marker.getElement().addEventListener("click", () => {
              setSelectedFacility(index);
            });

            markersRef.current.push(marker);


            marker.addTo(map);
          })
          .catch((error) => console.error("Error fetching address:", error));
      });

      return () => map.remove();
    }
  }, [clientLocation, facilityData]);

  return (
    <div className="flex flex-col-reverse md:flex-row section my-2 md:my-8">
         <div
        ref={cardContainerRef}
        className="flex flex-col m-4 shadow-lg max-h-200 overflow-y-auto"
      >
        {facilityData.map((info, index) => (
          <div
            key={index}
            className={`p-4 bg-white rounded-md border border-gray-300 mb-4 cursor-pointer ${
              selectedFacility === index ? "bg-gray-100" : ""
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
            <div className="mt-2">
              <p className="text-gray-600">Contact: {info.contact}</p>
              <p className="text-gray-600">Time: {info.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div ref={mapContainerRef} id="map" className="flex m-4" />
    </div>
  );
};

export default FacilityMap;
