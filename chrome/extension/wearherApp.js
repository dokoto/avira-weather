import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './modules/root/root_reducers';
import Router from './modules/root/root_router';
import logger from './helpers/middleware/logger';
import './weatherApp.css';

const store = createStore(reducers, applyMiddleware(thunk, logger, liveStreamerSock));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./modules/root/root_router', () => {
    render(Router);
  });
}
