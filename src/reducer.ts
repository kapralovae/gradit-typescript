import { createReducer } from '@reduxjs/toolkit';
import {getQuests} from './action';
import { QuestsType } from './types/state';

type TypeInitialState = {
  quests: QuestsType[],
};

const initialState: TypeInitialState = {
  quests: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })
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

export {reducer};
