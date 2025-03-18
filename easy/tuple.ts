import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
/* _____________ Test Cases _____________ */
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

interface Toby {
  name: string;
  age: number;
}

type values = keyof Toby;
