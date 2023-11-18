import React, { useEffect, useMemo, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import getLocation from "../utils/getLocation";

const FacilityMap = () => {
  const facilityData = useMemo(
    () => [
      { name: "Facility 1", capacity: "100", lon: 75.3433, lat: 19.8762 },
      { name: "Facility 2", capacity: "150", lon: 75.3533, lat: 19.8862 },
      { name: "Facility 3", capacity: "80", lon: 75.3633, lat: 19.8962 },
      { name: "Facility 4", capacity: "80", lon: 75.3466, lat: 19.8415 },
      { name: "Facility 5", capacity: "120", lon: 73.8567, lat: 18.5204 },
      { name: "Facility 6", capacity: "90", lon: 73.7898, lat: 18.5074 },
      { name: "Facility 7", capacity: "110", lon: 73.9162, lat: 18.5037 },
      { name: "Facility 8", capacity: "70", lon: 73.9277, lat: 18.5183 },
    ],
    []
  );
  

  const [addresses, setAddresses] = useState<string[]>([]);
  const [clientLocation, setClientLocation] = useState<[number, number] | null>(null);

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
    if (clientLocation) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: clientLocation,
        zoom: 10,
      });

      facilityData.forEach((facility) => {
        fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${facility.lon},${facility.lat}.json?access_token=${mapboxgl.accessToken}`
        )
          .then((response) => response.json())
          .then((data) => {
            const address = data.features[0]?.place_name || "Address not available";
            setAddresses((prevAddresses) => [...prevAddresses, address]);
            console.log(address)
            const popup = new mapboxgl.Popup().setHTML(
              `<h3>${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${address}</p>`
            );

            new mapboxgl.Marker()
              .setLngLat([facility.lon, facility.lat])
              .setPopup(popup)
              .addTo(map);
          })
          .catch((error) => console.error("Error fetching address:", error));
      });

      return () => map.remove();
    }
  }, [clientLocation, facilityData]);

  return (
    <div className="flex flex-col-reverse md:flex-row section my-2 md:my-8">
   <div className="flex flex-col m-4 shadow-lg max-h-200 overflow-y-auto">
  {facilityData.map((info, index) => (
    <div key={index} className="p-4">
      <h2 className="text-xl font-semibold">{info.name}</h2>
      <p className="text-gray-600">{info.capacity}</p>
      <p className="text-gray-600">{addresses[index]}</p>
    </div>
  ))}
</div>


      <div id="map" className="flex m-4" />
    </div>
  );
};

export default FacilityMap;
