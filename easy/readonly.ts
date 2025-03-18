import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
/* _____________ Test Cases _____________ */
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
