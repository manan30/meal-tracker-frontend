import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, ...rest }) {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default AuthenticatedRoute;
