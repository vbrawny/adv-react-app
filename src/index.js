import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//inorder to propagate the store to the entire application we wrap the root app component tag with Provider component tag
// store is the instance of our root redux store to which we pass createStore (generates the redux instance of our application)
// createStore function take two arguments - the total reducers of our application, which is combineReducers resultant
// and the initial state of the application, as of now it is empty object.
const initialState = {
    comments: ['Comment 1','Comment 2']
}

ReactDOM.render(
  <React.StrictMode>    
    <Root initialState={initialState}>
      <App />
    </Root>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
