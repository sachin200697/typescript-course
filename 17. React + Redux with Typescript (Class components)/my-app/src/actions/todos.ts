import axios from "axios";
import { Dispatch } from "redux";

import { ActionTypes } from "./types";

export interface Todo {    
    id: number;
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = ()=>{
    return async (dispatch: Dispatch) =>{

        //here as a generics we can tell what kind of response we will get
        const {data} = await axios.get<Todo[]>(url);
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: data
        });
    }
}

export const deleteTodo = (id: number): DeleteTodoAction=>{
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}