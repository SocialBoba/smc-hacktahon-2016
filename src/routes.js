import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.react';
import HomePage from './components/homepage.react';
import SignUp from './components/signup.react';
import LogIn from './components/login.react';
import YouthSignup from './components/youthsignup.react';
import MentorSignup from './components/mentorsignup.react';
import YouthConnect from './components/youthconnect.react';
import MentorConnect from './components/mentorconnect.react';
import YouthProfile from './components/youthprofile.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/mentorconnect" component={MentorConnect} />
    <Route path="/youthconnect" component={YouthConnect} />
    <Route path="/youthprofile" component={YouthConnect} />
    <Route path ="/testing" component={YouthProfile} />
  </Route>
);
