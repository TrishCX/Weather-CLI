import type { Location } from "../interfaces/index.js";
import { Session } from "../secrets/Sessions.js";

export async function fetchLocation(): Promise<Location> {
  const request = await fetch(Session.url);
  const response: Location = await request.json();
  return response;
}
