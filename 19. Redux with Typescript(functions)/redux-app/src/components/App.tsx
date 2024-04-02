import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../redux-state';
import RepositoriesList from './RepositoriesList';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>NPM search API</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}
