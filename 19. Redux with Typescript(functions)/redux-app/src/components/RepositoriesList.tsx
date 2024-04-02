import React, { useState } from 'react';
// import {useDispatch} from 'react-redux';
// import { actionCreators } from '../redux-state';
import { useActions } from './hooks/useActions';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux-state';
import { useTypedSelector } from './hooks/useTypedSelector';

export default function RepositoriesList() {
    const [term, setTerm] = useState('');

    // const dispatch = useDispatch();
    // we can create a hook to dispatch some action
    const {searchRepositories} = useActions();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // we can also dispatch a action creator like this
        // dispatch(actionCreators.searchRepositories(term) as any);
        searchRepositories(term);
    }

    // const {data, loading, error} = useSelector((store:RootState)=>store.repositories);
    const {data, loading, error} = useTypedSelector((store)=>store.repositories);    
    
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)} />
            <button>Submit</button>
            {error? <p>{error}</p>: ''}
            {loading? <p>...Loading</p>: ''}
            {!error && !loading && data.length>0? data.map((item, index)=><p key={index}>{item}</p>): ''}
       </form>
    </div>
  );
}
