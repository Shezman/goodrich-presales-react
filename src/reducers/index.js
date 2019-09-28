/****
- Defines Root Reducer for App
- Combines all the reducer and export as a single reducer
*/

import { combineReducers } from "redux";

import auth_reducer from "./auth";


export default combineReducers({
  auth: auth_reducer,
});
