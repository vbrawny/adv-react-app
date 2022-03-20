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

Now we include redux side of things
