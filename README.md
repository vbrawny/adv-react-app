# Getting Started with Create React App

### 1-adding-redux

npm install redux react-redux

we will wire up redux,
setup reducers
and add action creators

we create reducers folders
comments.js

```js
export default function (state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

index.js - will have combine reducers logic using combine reducers

```js
import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";

export default combineReducers({
  // we store the state of comments
  comments: commentsReducer,
});
```

### 2-provider-tag

Now we include redux side of things to the index js
wiring up redux to our react application

we will import

Provider from react-redux

index.js

```js
import { Provider } from "react-redux";
```

createStore from redux inside index.js

```js
import { createStore } from "redux";
```

our application reducers from reducers folder inside index.js

```js
import reducers from "reducers";
```

index.js

```js
import React from "react";
import ReactDOM from "react-dom";

//redux imports starts
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
//redux imports starts

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

connect function of react-redux library

provider(redux store) -> app -> (connect(commentbox))

provider(redux store) -> app -> (connect(comments list))

The connect function of react-redux will wire up our components to the store and redux library
The connect function will talk to our application store using the Provider(component) tag or component and again back to our components

so to simplify reduxstore <-> (actions) <-> app(provider) <-> connect <-> appcomponents

Adding Provider tag

```js
//inorder to propagate the store to the entire application we wrap the root app component tag with Provider component tag
// store is the instance of our root redux store to which we pass createStore (generates the redux instance of our application)
// createStore function take two arguments - the total reducers of our application, which is combineReducers resultant
// and the initial state of the application, as of now it is empty object.
```

index.js

```js
import React from "react";
import ReactDOM from "react-dom";

//redux imports starts
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
//redux imports starts

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//inorder to propagate the store to the entire application we wrap the root app component tag with Provider component tag
// store is the instance of our root redux store to which we pass createStore (generates the redux instance of our application)
// createStore function take two arguments - the total reducers of our application, which is combineReducers resultant
// and the initial state of the application, as of now it is empty object.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, [])}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
