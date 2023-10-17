interface CurrentLocation {
  name: string;
  zipcode: string | undefined;
  degreetype: string;
  timezone: string;
}
interface Current {
  temperature: string;
  skycode: string;
  skytext: string;
  date?: string | undefined;
  observationtime?: string;
  observationpoint?: string;
  feelslike?: string;
  humidity?: string;
  winddisplay?: string;
  day?: string;
  shortday?: string;
  windspeed: string;
  imageUrl: string;
}

declare interface Weather {
  current?: Current;
  location: CurrentLocation;
}

type Props = {
  search: string;
  degreeType?: "C" | "F";
};

declare module "weather-js" {
  type _Weather = Weather;

  async function find(
    props: Props,
    callBack?: (error?: any, results?: Weather[]) => any
  );
}
