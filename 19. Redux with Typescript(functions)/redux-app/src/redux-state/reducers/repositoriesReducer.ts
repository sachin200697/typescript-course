import { Action } from "../actions";
import { ActionTypes } from "../action-types";

interface RepositoriesState {
  error: string | null;
  loading: boolean;
  data: string[];
}

const initialState = {
  loading: false,
  data: [],
  error: null
}
export const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
    
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
