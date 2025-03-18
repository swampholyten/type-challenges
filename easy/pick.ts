import type { Equal, Expect } from "@/utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/* _____________ Your Code Here _____________ */
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>
];
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
interface Expected1 {
  title: string;
}
interface Expected2 {
  title: string;
  completed: boolean;
}
