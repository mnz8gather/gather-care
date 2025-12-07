// 类型推断
function a1(p: number): number {
  return p;
}

const a2 = (p: number): number => p;

// 函数签名
type B1 = (p: number) => number;

interface B2 {
  (p: number): number;
}

type B3 = {
  (p: number): number;
};

// 函数重载
function Overload(p: number): number;
function Overload(p: string): string;
function Overload(p: number | string): number | string {
  return p;
}

interface C1 {
  (p: number): number;
  (p: string): string;
}

type C2 = {
  (p: number): number;
  (p: string): string;
};

const c1: C1 = Overload;
const c2: C2 = Overload;
