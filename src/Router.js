import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import { useStore } from './Store';
import AuthenticatedRoute from './utils/AuthenticatedRoute';
import FeedView from './views/Feed';
import OnboardingView from './views/Onboarding';
import ProfileView from './views/Profile';

function RouterComponent() {
  const { state } = useStore();

  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={OnboardingView} />
        <Route exact path='/signup' component={OnboardingView} />
        <>
          <HeaderBar />
          <AuthenticatedRoute
            path='/profile'
            component={ProfileView}
            authentication={state.user.isAuthenticated}
            exact
          />
          <Route path='/' exact component={FeedView} />
        </>
      </Switch>
    </Router>
  );
}

export default React.memo(RouterComponent);

// TODO: Add this route for recipe previews
/* <Route path='/recipe/:id' component={RecipePreviewView} /> */

// TODO: Separate app in authenticated and unauthenticated content
// function AuthenticatedApp() {
//   const { state } = useStore();
//   return (
//     <Switch>
//       <AuthenticatedRoute
//         path='/profile'
//         component={ProfileView}
//         authentication={state.user.isAuthenticated}
//       />
//     </Switch>
//   );
// }

// function UnAuthenticatedApp() {
//   return (
//     <Switch>
//       <Route exact path='/login' component={OnboardingView} />
//       <Route exact path='/signup' component={OnboardingView} />
//       <HeaderBar />
//       <Route path='/' exact />
//     </Switch>
//   );
// }
