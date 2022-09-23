import { QuestsType, State } from "../../types/state";

export const getQuestsFromServer = (state: State): QuestsType[] => state['serverReducer'].quests;
