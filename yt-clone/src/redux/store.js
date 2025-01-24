import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';

const rootReducer = combineReducers({
   auth :  authReducer
});

const initialState = {};

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(thunk)) 
);

export default store;
