// this solution is created using abstract class 

// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";

// const reader = new MatchReader("./football.csv");
// reader.read();


// let manUnitedWinscount = 0;
// for (let match of reader.data) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWinscount++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWinscount++;
//   }
// }

// console.log(reader.data[0]);

// console.log(manUnitedWinscount);

// --------------------------------------------------------

import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

import practice from "./practice/practice";
practice();

const csvReader = new CsvFileReader('./football.csv');
const reader = new MatchReader(csvReader);
const reader2 = MatchReader.fromCSV('./football.csv');
reader2.load();
reader.load();


let manUnitedWinscount = 0;
for (let match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWinscount++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWinscount++;
  }
}

console.log(manUnitedWinscount);

const winsAnalysis = new WinsAnalysis("Man United");
const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport();

const summary = new Summary(winsAnalysis, consoleReport);

const summary2 = new Summary(winsAnalysis, htmlReport);

// summary.buildAndPrintReport(reader.matches);
// summary2.buildAndPrintReport(reader.matches);

const summary3 = Summary.winsAnalysisWithHtmlReport("Man United");
summary3.buildAndPrintReport(reader2.matches);




