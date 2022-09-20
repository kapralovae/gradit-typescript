import { createAction } from '@reduxjs/toolkit';

export const Action = {
  GET_QUESTS: 'GET_QUESTS',
};

export const getQuests = createAction(Action.GET_QUESTS, (value)=> ({
  payload:value,
}));
