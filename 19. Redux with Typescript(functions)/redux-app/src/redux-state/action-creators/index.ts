import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES
        });

        try {

            // const {data} = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);
            // we can also use params object 
            const {data} = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
                params: {
                    text: term
                }
            });
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: data.objects.map((result:any) => result.package.name)
            })
        } catch (error) {
            if(error instanceof Error) {
                dispatch({
                    type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                    payload: error.message
                })
            }            
        }
    }
}