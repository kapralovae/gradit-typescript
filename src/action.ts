import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadQuests } from "./store/quests-data/reducer-data";
import { AppDispatch, QuestsType, State } from "./types/state";

export const Action = {
  GET_QUESTS: 'GET_QUESTS',
  CHANGE_TYPE_QUESTS: 'CHANGE_TYPE_QUESTS',
  CHANGE_FILTERED_QUESTS: 'GET_FILTERED_QUESTS',
  request: 'request',
};


export const requestQuests = createAsyncThunk<QuestsType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: any,
}>(
    'fetchQuests',
    async (_arg, {dispatch, extra: api}) => {
      const data = await api;
      console.log(data);
      dispatch(loadQuests(data));
      return data;
    },
);

// export const requestQuests = () => async (dispatch: (arg0: { type: string; payload: any; }) => void, api: () => any, extra: ) => {
//   const quest = api();
//   dispatch({
//     type: Action.request,
//     payload: quest,
//   });
// };


// export const setTitleAction = () => async (dispatch, getState, api) => {
//   const title = await api();
//   dispatch({
//     type: Action.SET_TITLE,
//     payload: title,
//   });
// };


// () => async (dispatch, getState, api) => {
//   const quests = await api();
//   dispatch({
//     type: Action.request,
//     payload: quests,
//   });
// };
