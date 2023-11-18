import mapboxgl from "mapbox-gl";

const getLocation = (): Promise<{ coordinates: [number, number] | null; address: string | null }> => {

    mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";
    
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };
  
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const coordinates: [number, number] = [lon, lat];
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxgl.accessToken}`)
              .then((response) => response.json())
              .then((data) => {
                const address = data.features[0]?.place_name || null;
                resolve({ coordinates, address });
              })
              .catch((error) => {
                console.error("Error fetching address:", error);
                resolve({ coordinates, address: null });
              });
          },
          (error) => {
            console.error(error);
            resolve({ coordinates: null, address: null });
          },
          options
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        resolve({ coordinates: null, address: null });
      }
    });
  };
  
  export default getLocation;
  