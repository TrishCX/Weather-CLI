import { Choices } from "../secrets/index.js";
import inquirer from "inquirer";
import { clear } from "console";

export async function useInput() {
  clear();
  const data = await inquirer.prompt({
    name: "input_",
    type: "input",
    message: "Specify the location name.",
  });
  return data.input_;
}
