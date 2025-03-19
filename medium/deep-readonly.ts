import type { Expect, Equal } from "@/utils";

/* _____________ Your Code Here _____________ */
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends undefined
    ? T[K]
    : DeepReadonly<T[K]>;
};
/* _____________ Test Cases _____________ */
type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];
type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
    };
  };
};
type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
    };
  };
};
