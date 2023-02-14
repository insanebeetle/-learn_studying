interface Concfig {
  url: string;
}

declare module "myPackage" {
  function init(config: Concfig): boolean;
  function exit(code: number): number;
}
//위와같은 정의로 실제 사용시 콜시그니쳐를 확인 가능
