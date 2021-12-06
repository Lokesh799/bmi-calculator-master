import { combineReducers } from "redux";
import bmiState from "./BmiState"
import appReducer from "./appReducer";
export default combineReducers({

  bmiState,
  appReducer

});