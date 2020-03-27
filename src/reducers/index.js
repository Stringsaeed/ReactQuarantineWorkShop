import { combineReducers } from "redux";
import submittedData from "./submittedData";

export default combineReducers({
  users: submittedData,
});
