import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Anything in Provider tags will have access to redux store
import { Provider } from 'react-redux';
// Compose combine diff middlewares into 1 - to pass in all middleware as 1 argument in createStore
import { createStore, applyMiddleware, compose } from 'redux';
// Thunk to incorporate async code without Redux actions
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
src/reducers
import App from './App';
import reportWebVitals from './reportWebVitals';

// Enable Redux DevTools Extension to view store state + each action dispatched
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Pass reducer into createStore, assigning return value to store
// configure thunk by passing in thunk as part of the composeEnhancer
// REDUCER = responsible for taking in action & deciding what to update about current store
// and return new version of store
// ACTIONS will be dispatched to our reducer
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App/> 
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// <App /> renders our app component, and the doc.get is finding our root to append things

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
