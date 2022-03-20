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

### 3-save-comment-action-creator

types.js - to store types.

```js
export const SAVE_COMMENT = "save_comment";
```

index.js - to house all our actions (action creators).

```js
import { SAVE_COMMENT } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
```

reducers/comments.js

```js
import { SAVE_COMMENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
```

now wire up the actions to comments component

### 4-bonding-react-with-redux

now bond the application redux store with components so that it can take the save comment event from the component

components/CommentBox.js

```js
import { connect } from "react-redux";
import * as actions from "../actions";
```

```js
///wire up redux through connect(mapStateToProps,allactioncreators/mapDispatchToProps)
//mapStateToProps - is the inflow from redux state to component
//mapDispatchToProps - is the actions outflow from component to redux state.

//in this case CommentBox doesn't get any state out of our application store, we mark it as null
//whereas since we will access some actions of store to save comments we will have actions creators/mapDispatchToPros

//export default CommentBox;
export default connect(null, actions)(CommentBox);
```

Now we call the passed action from component in the below way.

```js
handleSubmit = (event) => {
  event.preventDefault();

  // we will handle the connect related actioncreators/mapDispatchToProps using the props and pass the component info to store.
  // so this.props - will give that info
  // we use the same for the inflow too that null thing/mapStateToProps.
  this.props.saveComment(this.state.comment);

  this.setState({ comment: "" });
};
```

Entire file of components/CommentBox.js

```js
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO - Call an action creator
    // And save the comment

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

//wire up redux through connect(mapStateToProps,allactioncreators/mapDispatchToProps)
//mapStateToProps - is the inflow from redux state to component
//mapDispatchToProps - is the actions outflow from component to redux state.

//in this case CommentBox doesn't get any state out of our application store, we mark it as null
//whereas since we will access some actions of store to save comments we will have actions creators/mapDispatchToPros

//export default CommentBox;
export default connect(null, actions)(CommentBox);
```
