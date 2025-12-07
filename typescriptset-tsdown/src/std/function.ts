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

// 函数使用泛型
type D1<T> = (p: T) => T;

interface D2<T> {
  (p: T): T;
}

// 跟 D1 D2 的区别，使用的是单独的泛型，其他属性和方法不能使用这个泛型
interface D3 {
  <T>(p: T): T;
}

const d1: D1<string> = (p: string) => p;
const d2: D3 = (p) => p;
const d3: D3 = <T>(p: T) => p;
const d4: D3 = <T = string>(p: T) => p;

// 方法使用单独的泛型
interface E1 {
  a: <P extends any[]>(...args: P) => void;
}

interface E2 {
  a<P extends any[]>(...args: P): void;
}

// 类型别名使用泛型
type F1<T> = T;

type F2<T> = T | null;
