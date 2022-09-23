import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./quests-data/reducer-data";
import { serverReducer } from "./quests-process/quests-process";

export const rootReducer = combineReducers({
  'just': reducer.reducer,
  'serverReducer': serverReducer.reducer,
});
