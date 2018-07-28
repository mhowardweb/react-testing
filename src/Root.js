import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers  from 'reducers';

// props are destructured to allow initialState to be used by test modules
// Other modules do not use initialState, hence it is initialised to and empty
// array to stop any errors.
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(reduxPromise)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
