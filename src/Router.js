import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainView from './views/Main';
import ProfileView from './views/Profile';
import RecipePreviewView from './views/RecipePreview';
import HeaderBar from './components/HeaderBar';

function RouterComponent() {
  return (
    <>
      <HeaderBar />
      <Router>
        <Route path='/' component={MainView} exact />
        <Route path='/profile' component={ProfileView} exact />
        <Route path='/recipe/:id' component={RecipePreviewView} />
      </Router>
    </>
  );
}

export default RouterComponent;
