import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type If<C, T, F> = C extends true ? T : F;
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];
