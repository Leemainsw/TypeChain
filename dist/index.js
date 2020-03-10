"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timetamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timetamp = timetamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timetamp, data) => CryptoJS.SHA256(index + previousHash + timetamp + data).toString();
const genesisBlock = new Block(0, "2020202022020", "", "Hello", 123456);
let blockchain = [genesisBlock]; //block만 추가 되도록
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(createNewBlock("hello"));
console.log(createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map