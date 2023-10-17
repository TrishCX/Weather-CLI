import type { Location } from "../interfaces/index.js";
import { fetchLocation } from "../functions/index.js";

export async function getCurrentLocation(): Promise<Location> {
  const location: Location = await fetchLocation();
  return location;
}
