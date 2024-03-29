import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import '../src/assets/css/index.css'

import './assets/boxicons-2.0.7/css/boxicons.min.css'

import './assets/css/grid.css'

import './assets/css/theme.css'

import Layout from '../src/components/layout/Layout'

// import '../../assets/icons'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import Login from './login/Login';
import App from './app/App';
import TestLogin from './app/TestLogin';


const store = createStore(
  rootReducer
)



ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Layout />
        {/* <App /> */}
        {/* <TestLogin /> */}
      </React.StrictMode>
    </Provider>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
