"use client";

import { Chat } from "@/components/Chat";
import { ChatProvider } from "@/contexts/ChatContext";
import { UserProvider } from "@/contexts/UserContext";

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-2xl my-6 text-center font-bold">Chat simples</h1>

          <Chat />
        </ChatProvider>
      </UserProvider>
    </div>
  );
};

export default Page;
