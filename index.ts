import type { Equal, Expect } from "@/utils";

/* _____________ Your Code Here _____________ */
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
interface Expected1 {
  title: string;
  completed: boolean;
}
interface Expected2 {
  title: string;
}
