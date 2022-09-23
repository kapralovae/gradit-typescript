import { createAction } from '@reduxjs/toolkit';

export const Action = {
  GET_QUESTS: 'GET_QUESTS',
  CHANGE_TYPE_QUESTS: 'CHANGE_TYPE_QUESTS',
  CHANGE_FILTERED_QUESTS: 'GET_FILTERED_QUESTS',
};

export const loadAllQuests = createAction(Action.GET_QUESTS, (value)=> ({
  payload:value,
}));

export const changeTypeQuests = createAction(Action.CHANGE_TYPE_QUESTS, (value)=> ({
  payload:value,
}));

export const changeFilteredQuests = createAction(Action.CHANGE_FILTERED_QUESTS);
