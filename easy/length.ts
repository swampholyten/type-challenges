import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type Length<T extends readonly any[]> = T["length"];
/* _____________ Test Cases _____________ */
const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;
type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>
];
