import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, authentication, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authentication ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  authentication: PropTypes.bool.isRequired,
};

export default AuthenticatedRoute;
