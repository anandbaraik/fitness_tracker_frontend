import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fitnessTrackReducer } from "./reducer";

export const store = createStore(fitnessTrackReducer, applyMiddleware(thunk));
