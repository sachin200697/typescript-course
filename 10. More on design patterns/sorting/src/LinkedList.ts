import Sorter from "./Sorter";

class LinkNode {    
    constructor(public data: number, public next: LinkNode | null = null){}
}

export class LinkedList extends Sorter{
    constructor(public head : LinkNode | null = null){
        super();
    }

    add(value:number): void{    
        if(!this.head) {
            this.head = new LinkNode(value);
            return 
        }
        let temp = this.head;
        while(temp.next) {
            temp = temp.next;
        }
        temp.next = new LinkNode(value);
    }

    get length(): number {
        let l = 0;
        let temp = this.head;

        while(temp) {
            l++;
            temp = temp.next;
        }

        return l;
    }

    at(index: number):LinkNode {
        if(!this.head || index>=this.length){
            throw new Error('Index out of bounds');
        }
        let node : LinkNode = this.head;        
        while(index) {
            if(node.next)
                node = node.next;
            index--;
        }
        return node;
    }

    compare(leftIndex: number, rightIndex: number): boolean{
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let a = this.at(leftIndex);
        let b = this.at(rightIndex);

        [a.data, b.data] = [b.data, a.data];
    }

    print(): void{
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;            
        }
    }
}