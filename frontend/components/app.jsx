import React from "react";
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profiles/profile_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import NotFound from './not_found';

const App = () => (
    <div>
        <NavBarContainer/>
        <Switch>
            <Route exact path="/">
                <AuthRoute exact path="/" component={LoginFormContainer} />
                <AuthRoute exact path="/" component={SignupFormContainer} />
            </Route>
            <ProtectedRoute exact path="/feed" component={FeedContainer}/> 
            <ProtectedRoute exact path="/users/:id" component={ProfileContainer}/> 
            <Route exact path="*" component={NotFound} />
        </Switch>
    </div>
);

export default App;