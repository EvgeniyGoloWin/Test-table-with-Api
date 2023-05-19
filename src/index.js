import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import index from "./store";
import {Provider} from "react-redux";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={index}><App/></Provider>);
