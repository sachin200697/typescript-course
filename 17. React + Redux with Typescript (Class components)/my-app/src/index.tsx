import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from './components/App'
import thunk from "redux-thunk";
import {reducers} from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));

// ! is just to ensure that element with root id in html page, is alwary present
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Provider store={store}><App color="red" /></Provider>);
