import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import Thunk from "redux-thunk";
export default createStore(
    reducer,
    applyMiddleware(Thunk)
)
