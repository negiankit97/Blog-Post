import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import reducer from "./reducers";
// creates store 
const store = createStore(reducer, applyMiddleware(thunk));

export default store;