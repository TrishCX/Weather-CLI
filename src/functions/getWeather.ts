import weather from "weather-js";
import { formatter } from "./formatter.js";

export async function getWeather(name: string) {
  weather.find({ search: name, degreeType: "C" }, (error, result) => {
    const { location, current } = result![0];
    formatter({
      location,
      current,
    });
  });
}
