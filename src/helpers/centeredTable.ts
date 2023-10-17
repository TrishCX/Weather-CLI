import Table from "cli-table3";

export function centeredTable(text: string) {
  const table = new Table({
    head: [text],
    colWidths: [25],
    style: { "padding-left": 4 },
  });
  const consoleWidth = process.stdout.columns || 80;
  const tableString = table.toString();
  const tableWidth = tableString.split("\n")[0].length + 30;
  const padding = Math.max(0, Math.floor((consoleWidth - tableWidth) / 2));
  const centeredTable = tableString
    .split("\n")
    .map((line) => " ".repeat(padding) + line)
    .join("\n");

  return centeredTable;
}
