import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { Provider } from "react-redux";
import ErrorBoundary from './container/ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./store";


ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
