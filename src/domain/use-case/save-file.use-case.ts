import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContnt: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContnt,
    destination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContnt);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
