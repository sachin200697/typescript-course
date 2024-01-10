import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];  
  constructor(public fileName: string) {}

  read(): void {
    let contentOfFileAsSingleString = fs.readFileSync(this.fileName, {
      encoding: "utf-8",
    });

    this.data = contentOfFileAsSingleString
      .split("\n")
      .map((element: string): string[] => element.split(","));
  }
}
