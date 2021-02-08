import { applyMiddleware, createStore } from 'redux';
import allReducers from '../redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
