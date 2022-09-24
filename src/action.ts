import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadQuests } from "./store/quests-data/reducer-data";
import { AppDispatch, QuestsType, State } from "./types/state";

export const requestQuests = createAsyncThunk<QuestsType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: any,
}>(
    'fetchQuests',
    async (_arg, {dispatch, extra: api}) => {
      const data = await api;
      dispatch(loadQuests(data));
      return data;
    },
);

