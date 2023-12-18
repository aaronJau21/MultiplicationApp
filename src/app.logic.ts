import fs from "fs";
import { yarg } from "./configs/plugins/yarns";

// console.log(yarg);

if (yarg.s) {
  if (yarg.l <= 10) {
    let outputMessage = "";

    const base = yarg.b;

    const headerMessage = `
===========================
    Table del ${base}
===========================\n
`;

    for (let i = 1; i <= 10; i++) {
      outputMessage += `${base} X ${""} = ${base * i}\n`;
    }

    outputMessage = headerMessage + outputMessage;

    console.log(outputMessage);

    const outputPath = `outputs/`;

    fs.mkdirSync(outputPath, { recursive: true });

    fs.writeFileSync(`${outputPath}/tabla-${base}.text`, outputMessage);
  } else {
    console.log("limit is 10");
  }
} else {
  console.log("Show is false");
}
