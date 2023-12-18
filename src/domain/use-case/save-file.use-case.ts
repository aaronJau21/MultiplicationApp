import fs from "fs";
import { yarg } from "../../configs/plugins/yarns";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContnt: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContnt,
    fileDestination = yarg.d,
    fileName = yarg.n,
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContnt);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
