import React from 'react';
import { createStore } from 'redux';

export default const myReducer = (state = initialState, action) {
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.something +=1;
    }

    return newState;
}

const store = createStore(myReducer);

store.dispatch({type: 'ADD'});
store.dispatch({type: 'SUBTRACT'});

console.log(store.getState());