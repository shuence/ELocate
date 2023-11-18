import React, { useEffect } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface FacilityInfo {
  name: string;
  capacity: string;
  lat: number;
  lon: number;
}

const FacilityData: FacilityInfo[] = [
  { name: "Facility 1", capacity: "100", lat: 75.3433, lon: 19.8762 },
  { name: "Facility 2", capacity: "150", lat: 75.3533, lon: 19.8862 },
  { name: "Facility 3", capacity: "80", lat: 75.3633, lon: 19.8962 },
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
      <div className="w-1/3 flex flex-col m-4 shadow-lg">
        {FacilityData.map((info, index) => (
          <div key={index} className="w-1/3 p-4">
            <h2 className="text-xl font-semibold">{info.name}</h2>
            <p className="text-gray-600">{info.capacity}</p>
            <p className="text-gray-600">Latitude: {info.lat}</p>
            <p className="text-gray-600">Longitude: {info.lon}</p>
          </div>
        ))}
      </div>

      <div className="w-4/5 m-4 shadow-lg">
        <Map
          style={mapStyle}
          containerStyle={{
            height: "500px",
            width: "100%",
          }}
          center={defaultCenter}
          zoom={defaultZoom}
        >
          {FacilityData.map((info, index) => (
            <Marker
              key={index}
              coordinates={[info.lat, info.lon]}
              anchor="bottom"
              style={{ width: "20px", height: "20px", background: "red", borderRadius: "50%" }}
              />
          ))}
        </Map>
      </div>
    </div>
  );
};

export default FacilityMap;
