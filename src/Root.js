import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
    return (
        // <Provider store={createStore(reducers,props.initialState)}>
         <Provider store={createStore(reducers,initialState)}>
            {/* {props.children} */}
            {children}
        </Provider>
    )
}