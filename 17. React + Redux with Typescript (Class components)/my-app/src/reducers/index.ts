import { combineReducers } from "redux";
import { todoReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
    todos: Todo[]
}

// by passing StoreState as generics, we are making sure that todoReducer should return
// array of Todo
export const reducers = combineReducers<StoreState>({
    todos: todoReducer
});