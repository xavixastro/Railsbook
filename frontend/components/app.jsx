import React from "react";
import FeedContainer from './feed_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => (
    <div>
        <h1>Railsbook!!</h1>
        <FeedContainer/>
        <Route path="/" component={LoginFormContainer} />
        <Route path="/" component={SignupFormContainer} />
    </div>
);

export default App;