import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, searchReducer } from './reducer';
const rootReducer = {
    loginReducer,
    searchReducer
    
}
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));

console.log('INITIAL', store.getState())

store.subscribe(()=>{
    console.log('Subscribed')
     console.log(store.getState());
})


export {store};
