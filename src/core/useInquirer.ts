import { Choices } from "../secrets/index.js";
import inquirer from "inquirer";
import { clear } from "console";
export async function useInquirerChoices() {
  clear();
  const data = await inquirer.prompt({
    name: "choice_",
    type: "list",
    message: "Which weather condition do you want to see?",
    choices: [...Choices],
  });
  return data.choice_;
}
