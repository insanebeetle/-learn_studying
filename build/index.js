"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlockChain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() { }
}
const blockchain = new BlockChain();
blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("thirh one");
console.log(blockchain.getBlocks());
/*import { init, exit } from "./myPackage";
//위코드가 에러나 나는것은 위 파일이 모듈로서 declaration되지 않았기때문
//따라서 d.ts(타입스크립 선언) 파일에서 declare를 하면 ok
const hello = () => "hi";

class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

exit(1);
*/
