import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];
