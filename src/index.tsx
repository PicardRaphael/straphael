import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import './styles.scss'
import {BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy'
import store from "store";

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root')
)