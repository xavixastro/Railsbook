import React from "react";
import FeedContainer from './feed_container';
import ProfileContainer from './profiles/profile_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <NavBarContainer/>
        <ProtectedRoute path="/feed" component={FeedContainer}/> 
        <Route exact path="/users/:id" component={ProfileContainer}/> 
        <AuthRoute exact path="/" component={LoginFormContainer} />
        <AuthRoute exact path="/" component={SignupFormContainer} />
    </div>
);

export default App;