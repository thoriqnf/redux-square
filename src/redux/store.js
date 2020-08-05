import { createStore } from "redux";
import counterReducers from "./Reducers/counter.reducers";

export default createStore(counterReducers);
