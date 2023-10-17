import { createStore } from "redux";
import createRootReducer from "./reducer";

const store = createStore(createRootReducer());
export default store;
