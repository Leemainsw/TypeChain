"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timetamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timetamp = timetamp;
    }
}
const genesisBlock = new Block(0, "2020202022020", "", "Hello", 123456);
let blockchain = [genesisBlock]; //block만 추가 되도록
console.log(blockchain);
//# sourceMappingURL=index.js.map