import {legacy_createStore as createStore } from "redux";
import fetchAPIDATA from "./reducers/Reducer";

const store = createStore(fetchAPIDATA, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ``) 

export default store;