import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

//Testing
import {signup, login, logout} from './actions/session_actions'
window.signup = signup;
window.login = login; 
window.logout = logout;



document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // Testing
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});