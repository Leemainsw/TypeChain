import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timetamp: number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timetamp:number, 
        data: string) :string => 
        CryptoJS.SHA256(index + previousHash + timetamp + data).toString();

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
let blockchain: Block[] = [genesisBlock]; //block만 추가 되도록

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

console.log(blockchain);

export {}; 