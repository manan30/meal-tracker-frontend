import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainView from './views/Main';
import ProfileView from './views/Profile/index';

function RouterComponent() {
  return (
    <Router>
      <Route path='/' component={MainView} exact />
      <Route path='/profile' component={ProfileView} exact />
    </Router>
  );
}

export default RouterComponent;
