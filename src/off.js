import React, { Component } from 'react';
import './config/StatusBarConfig';
import { Provider } from 'react-redux';

import store from './store';

import App from '.';

// import Routes from './routes';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
