import { Message } from "@/types/Message";

type addAction = {
  type: "add";
  payload: {
    user: string;
    text: string;
  };
};

type ChatActions = addAction;

export const chatRedcuer = (state: Message[], action: ChatActions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          user: action.payload.user,
          text: action.payload.text,
        },
      ];
    default:
      return state;
  }
};
