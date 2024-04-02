import React from "react";
import ReactDom from 'react-dom/client';
import App from "./components/App";


// ! is just to ensure that element with root id in html page, is alwary present
const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(<App />);
