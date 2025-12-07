interface IA {
  a(p: string): string;
}

interface IB {
  b(p: number): number;
}

class A implements IA {
  a(p: string) {
    return p;
  }
}

class B implements IA, IB {
  a(p: string) {
    return p;
  }
  b(p: number) {
    return p;
  }
}

// 这时会把 类 A 当作接口
class C implements A {
  a(p: string) {
    return p;
  }
}
