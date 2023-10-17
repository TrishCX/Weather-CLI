import { useInquirerChoices, useInput } from "../core/index.js";
import { getCurrentWeather } from "../functions/getCurrentWeather.js";
import { delay, getWeather } from "../functions/index.js";
import ora from "ora";

export class CommandLine {
  ask = async () => {
    const response = await useInquirerChoices();
    if (response === "current_") {
      const spinner = ora().start();
      await delay(4500);
      spinner.stop();
      await getCurrentWeather();
    } else {
      const name = await useInput();
      const spinner = ora().start();
      await delay(4500);
      spinner.stop();
      await getWeather(name);
    }
  };
}
