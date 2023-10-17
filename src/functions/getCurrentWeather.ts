import { fetchLocation } from "./fetchlocation.js";
import weather from "weather-js";
import { formatter } from "./formatter.js";

export async function getCurrentWeather() {
  const location = await fetchLocation();
  weather.find({ search: location.city, degreeType: "C" }, (error, result) => {
    const { location, current } = result![0];
    formatter({
      location,
      current,
    });
  });
}
