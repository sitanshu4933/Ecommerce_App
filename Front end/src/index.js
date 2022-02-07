import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

window.store = Store
ReactDOM.render(

  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);
