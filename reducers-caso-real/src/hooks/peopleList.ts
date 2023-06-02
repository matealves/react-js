import { useReducer } from "react";
// biblioteca que gera id único para o item
import { v4 as uuidv4 } from "uuid";

type Person = {
  id: string;
  name: string;
};

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

const initalState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
  switch (action.type) {
    case "add":
      if (action.payload?.name) {
        const newState = [...state];
        newState.push({
          id: uuidv4(),
          name: action.payload?.name,
        });
        return newState;
      }
      break;
    case "del":
      if (action.payload?.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== action.payload?.id);
        return newState;
      }
      break;
    case "order":
      let newState = [...state];
      newState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return newState;
      break;
  }
  return state;
};

export const usePeopleList = () => {
  return useReducer(reducer, initalState);
};
