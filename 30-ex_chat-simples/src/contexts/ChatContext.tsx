import { chatRedcuer } from "@/reducers/chatReducer";
import { Message } from "@/types/Message";
import { ReactNode, createContext, useReducer } from "react";

type ChatContext = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
};

export const ChatContext = createContext<ChatContext | null>(null);

const [chat, dispatch] = useReducer(chatRedcuer, []);

const addMessage = (user: string, text: string) => {
  dispatch({
    type: "add",
    payload: { user, text },
  });
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ChatContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
