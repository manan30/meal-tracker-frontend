import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OnboardingView from './views/Onboarding';
import HeaderBar from './components/HeaderBar';
import AuthenticatedRoute from './utils/AuthenticatedRoute';
import ProfileView from './views/Profile';
import RecipePreviewView from './views/RecipePreview';

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={OnboardingView} />
        <Route exact path='/signup' component={OnboardingView} />
        <>
          <HeaderBar />
          <Route path='/' exact />
          <AuthenticatedRoute path='/profile' component={ProfileView} />
          <Route path='/recipe/:id' component={RecipePreviewView} />
        </>
      </Switch>
    </Router>
  );
}

export default RouterComponent;
