import { createSlice } from "@reduxjs/toolkit";
import { requestQuests } from "../../action";
import { QuestsType } from "../../types/state";

type TypeInitialState2 = {
  quests: QuestsType[],
};

const initialState :TypeInitialState2 = {
  quests: [],
};

export const serverReducer = createSlice({
  name: 'serverReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
  },

});





// reducers: {
//   requestQuests: (state, action) => {
//     state.quests = action.payload;
//     console.log(state.quests);
//   },
// },
