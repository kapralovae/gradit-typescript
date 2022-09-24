import { QuestsType, State } from "../../types/state";

export const getFilteredQuests = (state: State): QuestsType[] => state['questReducer'].filteredQuests;
export const getChoiseFilter = (state: State): string => state['questReducer'].filter;
export const getq = (state: State): QuestsType[] => state['questReducer'].quests;
