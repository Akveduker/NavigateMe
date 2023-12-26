import React from 'react';
import store from '@store/store';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import './style/style.scss';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
/* eslint-disable @typescript-eslint/comma-dangle */
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);
/* eslint-enable @typescript-eslint/comma-dangle */
