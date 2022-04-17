import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import App from './App';

const rootElement = document.getElementById("root");
render(<App />, rootElement);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
