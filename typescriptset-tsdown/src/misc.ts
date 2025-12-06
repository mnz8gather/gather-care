export type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T1>() => T1 extends B ? 1 : 2 ? true : false;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
/**
 * 互斥，只能选择一个
 *
 * ```
 * interface AType {
 *   a: string;
 *   b: number;
 * }
 * interface BType {
 *   c: boolean;
 * }
 * type AXORB = XOR<AType, BType>;
 * type ABUnion = AType | BType;
 * // difference
 * const aXorB: AXORB = { a: '1', b: 2, c: true };
 * const abUnion: ABUnion = { a: '1', b: 2, c: true };
 * ```
 */
export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
