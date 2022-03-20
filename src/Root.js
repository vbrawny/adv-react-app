import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//middleware
import reduxPromise from 'redux-promise';

import reducers from './reducers';

// export default (props) => {
//     return (
//         <Provider store={createStore(reducers,{})}>
//             {props.children}
//         </Provider>
//     )
// }



// export default (props) => {
export default ({children, initialState={}}) => {   
    const store = createStore(reducers,initialState, applyMiddleware(reduxPromise));
    return (
        // <Provider store={createStore(reducers,props.initialState)}>
         <Provider store={store}>
            {/* {props.children} */}
            {children}
        </Provider>
    )
}