export interface CurrentLocation {
  name: string;
  zipcode: string | undefined;
  degreetype: string;
  timezone: string;
}
export interface Current {
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

export declare interface Weather {
  current?: Current;
  location: CurrentLocation;
}
