import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]):string;
}

export interface OutputTarget {
    print(report:string): void;
}

export class Summary {
    // if we don't want to create Summary object using constructor then we can use
    // this static method.
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}
    
    buildAndPrintReport(matches: MatchData[]) {
        let report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}