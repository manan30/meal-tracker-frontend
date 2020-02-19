import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();
const initialState = { user: { isAuthenticated: false } };

const reducer = (state, action) => {
  switch (action.type) {
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
