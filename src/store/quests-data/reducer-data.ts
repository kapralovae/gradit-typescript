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

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(loadAllQuests, (state, action) => {
//       state.quests = action.payload;
//       state.filteredQuests = state.quests;
//     })
//     .addCase(changeTypeQuests, (state, action) => {
//       state.filter = action.payload;
//     })
//     });
// });

export const reducer = createSlice({
  name: 'just',
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

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(chengeGenreAction, (state, action) => {
//       state.genre = action.payload;
//     })
//     .addCase(getFilmsWithGenreAction, (state) => {
//       if (state.genre === 'All genres') {
//         state.films = films;
//       } else {
//         state.films = films.filter((film) => film.genre === state.genre);
//       }
//     })
//     .addCase(resetFilterGenreAction, (state) => {
//       state.genre = 'All genres';
//       state.films = films;
//     });
// });

export const {changeTypeQuests, loadQuests, changeFilteredQuests} = reducer.actions;
