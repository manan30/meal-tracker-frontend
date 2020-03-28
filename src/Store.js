import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();

const initialState = JSON.parse(localStorage.getItem('store')) || {
  user: { isAuthenticated: false },
  feed: { topRecipes: [], feedRecipes: [] }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEED': {
      const feed = {
        topRecipes: action.payload.topRecipes || [],
        feedRecipes: [
          ...state.feed.feedRecipes,
          ...(action.payload.feedRecipes || [])
        ]
      };
      return { ...state, feed };
    }
    case 'USER_ONBOARD': {
      const { user, accessToken } = action.payload;
      const { user: storedUser } = state;
      const newState = {
        ...state,
        user: { ...storedUser, ...user, isAuthenticated: true }
      };
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('store', JSON.stringify(newState));
      return newState;
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
