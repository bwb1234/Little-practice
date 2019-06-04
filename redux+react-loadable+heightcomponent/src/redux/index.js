import {createStore,combineReducers,applyMiddleware} from 'redux'
import mockreducer  from'./renducer/index'
import thunk from 'redux-thunk'


const reducer=combineReducers({
    mockreducer
});

const store=createStore(
    reducer,
    applyMiddleware(thunk)
   
    );


export default store