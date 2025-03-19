import type { Expect, Alike } from "@/utils";

/* _____________ Your Code Here _____________ */
// type MyReadonly2<T, K extends keyof T> = {
//   readonly [Key in keyof T as Key extends K ? Key : never]: T[Key];
// } & {
//   [Key in keyof T as Key extends K ? never : Key]: T[Key];
// };
type MyReadonly2<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
/* _____________ Test Cases _____________ */
type cases = [
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];
interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}
interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}
interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
