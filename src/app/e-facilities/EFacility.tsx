import React, { useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

interface FacilityInfo {
  name: string;
  capacity: string;
}


const FacilityData = [
  { name: "Facility 1", capacity: "100", lat: [75.3433], lon: [19.8762] },
  { name: "Facility 2", capacity: "150", lat: [75.3433], lon: [19.8762] },
  { name: "Facility 3", capacity: "80", lat: [75.3433], lon: [19.8762] },
];

const FacilityMap: React.FC = () => {
  const mapboxToken =
    "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";
  const Map = ReactMapboxGl({
    accessToken: mapboxToken,
  });

  const mapStyle = "mapbox://styles/mapbox/streets-v11";
  const defaultCenter: [number, number] = [75.3433, 19.8762];
  const defaultZoom: [number] = [8];

  useEffect(() => {
    // Map initialization logic here
  }, []);

  return (
    <div className="flex section my-8">
      <div className="w-1/3 flex flex-col p-4">
        {FacilityData.map((info, index) => (
          <div key={index} className="w-1/3 p-4">
            <h2 className="text-xl font-semibold">{info.name}</h2>
            <p className="text-gray-600">{info.capacity}</p>
            <p className="text-gray-600">{info.lat}</p>
            <p className="text-gray-600">{info.lon}</p>
          </div>
        ))}
      </div>

      <div className="w-4/5">
        <Map
          style={mapStyle}
          containerStyle={{
            height: "500px",
            width: "100%",
          }}
          center={defaultCenter}
          zoom={defaultZoom}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={defaultCenter} />
          </Layer>
        </Map>
      </div>
    </div>
  );
};

export default FacilityMap;
