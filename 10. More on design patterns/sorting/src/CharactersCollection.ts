import Sorter from "./Sorter";
export class CharactersCollection extends Sorter{
    constructor(public data: string){
        super();
    }
    get length():number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex:number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex: number, rightIndex: number): void {
        let arr = this.data.split('');
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
        this.data = arr.join('');
    }
}