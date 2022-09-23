import { QuestsType, State } from "../../types/state";

export const getFilteredQuests = (state: State): QuestsType[] => state['just'].filteredQuests;
export const getChoiseFilter = (state: State): string => state['just'].filter;
