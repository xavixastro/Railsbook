import React from "react";
import FeedContainer from './feed_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => (
    <div>
        <h1>Railsbook!!</h1>
        <ProtectedRoute path="/feed" component={FeedContainer}/> 
        <AuthRoute exact path="/" component={LoginFormContainer} />
        <AuthRoute exact path="/" component={SignupFormContainer} />
    </div>
);

export default App;