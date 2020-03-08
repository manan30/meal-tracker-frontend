import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();

const initialState = {
  user: { isAuthenticated: false },
  feed: {
    topRecipes: [],
    feedRecipes: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return { ...state, feed: action.payload };
    case 'USER_ONBOARD': {
      const { user, accessToken } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      return {
        ...state,
        user: { ...state.user, ...user, isAuthenticated: true }
      };
    }
    case 'ERROR':
      return { ...state };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any)
};

StoreProvider.defaultProps = {
  children: {}
};

export const useStore = () => useContext(StoreContext);
