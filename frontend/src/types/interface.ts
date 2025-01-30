export interface Todo {
  id?: number;
  text?: string;
  done?: boolean;
}

export interface InitialState {
  list: Todo[];
  nextID?: number;
}

export type Action =
  | { type: "todo/CREATE"; payload: Todo }
  | { type: "todo/DONE"; id: number }
  | { type: "todo/INIT"; data: Todo[] }
  | { type: "todo/DELETE"; id: number };
