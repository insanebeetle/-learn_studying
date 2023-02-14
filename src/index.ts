import crypto from "crypto";

interface BlockShape {
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
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
