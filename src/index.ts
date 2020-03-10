class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timetamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timetamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timetamp = timetamp;
    }
}

const genesisBlock:Block = new Block(0, "2020202022020","","Hello",123456);
let blockchain: [Block] = [genesisBlock]; //block만 추가 되도록

console.log(blockchain);

export {}; 