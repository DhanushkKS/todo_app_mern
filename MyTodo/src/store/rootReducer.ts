import { combineReducers } from "@reduxjs/toolkit";
import { todoApi } from "../redux/Todo/api.ts";

export const rootReducer = combineReducers({
  //user: userReducer,
  /*Create RTK Query requests/mutations under the redux folder*/
  [todoApi.reducerPath]: todoApi.reducer,
});
