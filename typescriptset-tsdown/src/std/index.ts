function a<T>() {}
// 泛型的 typeof
type A<T> = typeof a<T>;
// 泛型的 ReturnType
type B<T> = ReturnType<A<T>>;

interface C {
  a?: {
    b?: string;
    c?: string;
    d?: string;
  };
}

// 这个是包含 undefined 的
type D = C['a'];
// 很多时候是需要处理掉 undefined 的
type E1 = Required<C>['a'];
// 这个语义更明确
type E2 = Exclude<C['a'], undefined>;
// 使用 NonNullable
type E3 = NonNullable<C['a']>;

// 使用 Omit 注意：
// 类型中包含 undefined 导致在使用 Omit 时，导致出现问题
// 这种时候类型是 type F = {}
type F1 = Omit<D, 'b' | 'c'>;
// 正确的
type F2 = Omit<NonNullable<D>, 'b' | 'c'>;

/**
 * 提取对象类型 T 的所有值类型
 *
 * 感觉作用有限，使用时也要注意输入的 T
 *
 * `ObjectValueType<string>` -> 一堆东西
 *
 * `ObjectValueType<null>` -> `null`
 */
type ObjectValueType<T> = T[keyof T];
