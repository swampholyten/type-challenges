import type { Expect, Equal } from "@/utils";

/* _____________ Your Code Here _____________ */
// type TupleToUnion<T> = T extends Array<infer I> ? I : never;
type TupleToUnion<T extends unknown[]> = T[number];
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
