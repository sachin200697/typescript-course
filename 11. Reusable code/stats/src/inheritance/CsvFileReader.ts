import fs from "fs";

export abstract class CsvFileReader<T> {    //here <T> is generic and we can use T as a type
  data: T[] = [];
  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    let contentOfFileAsSingleString = fs.readFileSync(this.fileName, {
      encoding: "utf-8",
    });

    this.data = contentOfFileAsSingleString
      .split("\n")
      .map((element: string): string[] => element.split(","))
      .map(this.mapRow);
  }  
}
