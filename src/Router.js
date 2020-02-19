import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeedView from './views/Feed';
import ProfileView from './views/Profile';
import RecipePreviewView from './views/RecipePreview';
import HeaderBar from './components/HeaderBar';

function RouterComponent() {
  return (
    <>
      <HeaderBar />
      <Router>
        <Route path='/' component={FeedView} exact />
        <Route path='/profile' component={ProfileView} exact />
        <Route path='/recipe/:id' component={RecipePreviewView} />
      </Router>
    </>
  );
}

export default RouterComponent;
