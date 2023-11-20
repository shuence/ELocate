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

const sortFacilitiesByDistance = (
  clientLocation: [number, number] | null,
  facilities: Facility[]
): Facility[] => {
  if (!clientLocation) {
    return facilities;
  }

  return facilities
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
};

export default sortFacilitiesByDistance;
