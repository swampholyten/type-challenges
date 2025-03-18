import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
// type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;
// type First<T extends any[]> = T[number] extends never ? never : T[0];
type First<T extends any[]> = T extends [] ? never : T[0];

/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
