import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserData from '../src/Store/UserData'
import userLogin from '../src/Store/userLogin'
import currentUserData from '../src/Store/CurrentUserData'
import userSignup from './Store/UserSignup'
import { Provider } from 'mobx-react';




const stores = { UserData, userLogin, currentUserData, userSignup}


ReactDOM.render(<Provider {...stores}  >
    <App /> 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
