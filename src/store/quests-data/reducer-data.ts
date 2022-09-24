import { createSlice } from '@reduxjs/toolkit';
import { QuestsType } from '../../types/state';

export type TypeInitialState = {
  quests: QuestsType[];
  filter: string;
  filteredQuests: QuestsType[],
};

const initialState: TypeInitialState = {
  quests: [],
  filter: 'All quests',
  filteredQuests: [],
};

export const reducer = createSlice({
  name: 'questReducer',
  initialState,
  reducers: {
    changeTypeQuests: (state, action) => {
      state.filter = action.payload;
    },
    loadQuests: (state, action) => {
      state.quests = action.payload;
    },
    changeFilteredQuests: (state) => {
      if (state.filter === 'All quests') {
        state.filteredQuests = state.quests;
      } else {
        state.filteredQuests = state.quests.filter((quest) => quest.type === state.filter);
      }
    },
  }
});

export const {changeTypeQuests, loadQuests, changeFilteredQuests} = reducer.actions;
