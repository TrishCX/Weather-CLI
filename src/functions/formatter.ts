import type { Weather } from "../interfaces/index.js";
import Table from "cli-table3";
import moment from "moment";
import { centeredTable } from "../helpers/centeredTable.js";

export function formatter(props: Weather) {
  let emoji: string;
  const { location, current } = props;
  const weatherWordsRegex = /\b(sunny|rainy|cloudy|stormy)\b/gi;
  const filteredWords = current?.skytext.match(weatherWordsRegex) || [];
  const filteredText = filteredWords.join(" ");
  const weatherCondition =
    filteredText.charAt(0).toUpperCase() + filteredText.slice(1).toLowerCase();

  switch (filteredText?.toLowerCase()) {
    case "sunny":
      emoji = "☀️";
      break;
    case "rainy":
      emoji = "🌧️";
      break;
    case "cloudy":
      emoji = "☁️";
      break;
    case "stormy":
      emoji = "⛈️";
      break;
    default:
      emoji = "❓";
  }
  const table = new Table({
    head: ["Location", "Condition", "Temperature (°C)", "Wind", "Humidity"],
    colWidths: [30, 15, 20, 15, 15],
  });
  const date = moment().format("MMMM Do YYYY");

  table.push([
    location.name,
    `${weatherCondition}`,
    current?.temperature,
    current?.windspeed,
    current?.humidity,
  ]);
  const consoleWidth = process.stdout.columns || 80;
  const tableString = table.toString();
  const tableWidth = tableString.split("\n")[0].length;
  const padding = Math.max(0, Math.floor((consoleWidth - tableWidth) / 2));
  const coreTable = tableString
    .split("\n")
    .map((line) => " ".repeat(padding) + line)
    .join("\n");

  const dayTable = centeredTable(date);
  console.log(`\n`);
  console.log(`${dayTable} `);
  console.log(coreTable.toString());
}
