import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from redux;
import rootReducer from './reducers';

const initialState = {};
const middlware = [thunk];

const store = createStore(rootReducer,initialState,applyMiddleware(...middlware));