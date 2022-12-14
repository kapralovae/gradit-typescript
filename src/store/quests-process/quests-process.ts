import { createSlice } from "@reduxjs/toolkit";
import { requestQuests } from "../../action";
import { QuestsType } from "../../types/state";

type TypeInitialState2 = {
  quests: QuestsType[],
  isDataLoaded: boolean;
};

const initialState :TypeInitialState2 = {
  quests: [],
  isDataLoaded: false,
};

export const serverReducer = createSlice({
  name: 'serverReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isDataLoaded = false;
     })
      .addCase(requestQuests.pending, (state) => {
        state.isDataLoaded = true;
      });
  },

});
