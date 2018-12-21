import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './styles/gender.css';
import './styles/meal.css';
import './styles/stylesBig.css';
import './styles/stylesMid.css';
import './styles/stylesSmall.css';
import './styles/disciplined.css'
import './styles/age.css'
import './styles/goal.css'

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById("root")
);

