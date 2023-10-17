import type { ChoiceOptions } from "inquirer";

export const Choices: ChoiceOptions[] = [
  {
    name: "Lookup weather for the current location.",
    value: "current_",
  },
  {
    name: "Search for a specific place.",
    value: "specific_",
  },
];
