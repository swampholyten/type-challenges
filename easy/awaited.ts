import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type Awaited<T> = T extends Promise<infer R> ? R : never;
/* _____________ Test Cases _____________ */
type X = Promise<string>;
type Y = Promise<{ field: number }>;
type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
];
