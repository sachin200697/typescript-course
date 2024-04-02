import { UseDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux-state";
import { useDispatch } from "react-redux";

export const useActions = ()=>{
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);

    // actionCreators is has this actioncreator => searchRepositories 
    // bindActionCreators(actionCreators, dispatch) will an object like this:
    //return {searchRepositories: dispatch(searchRepositories)}
}