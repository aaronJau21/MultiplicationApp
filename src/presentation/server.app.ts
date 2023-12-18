import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run({ base, limit, showTable }: RunOptions) {
    console.log("Server running...");
    const table = new CreateTable().execute({ base, limit });
    const wasSaved = new SaveFile().execute({
      fileContnt: table,
      destination: `outputs/table-${base}`,
    });
    if (showTable) console.log(table);

    wasSaved ? console.log("File Created") : console.error("File not created!");
  }
}
