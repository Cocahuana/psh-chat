import React, { createContext, useState, useContext, useEffect } from "react";
import { IChat } from "../components/Chat/IChats";
import dataFetched from "../../chats.json";
interface ChatContextType {
  chats: IChat[];
  addChat: (chat: IChat) => void;
  fetchNewChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider = (props: ChatProviderProps) => {
  const { children } = props;
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    setChats(dataFetched.chats);
  }, []);

  const addChat = (chat: IChat) => {
    setChats((prevChats) => [...prevChats, chat]);
  };

  const fetchNewChat = async () => {
    // Mock API call
    const newChat = await fetchNewChatFromAPI();
    addChat(newChat);
  };

  return (
    <ChatContext.Provider value={{ chats, addChat, fetchNewChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChats = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChats must be used within a ChatProvider");
  }
  return context;
};

// Mocked API call function
const fetchNewChatFromAPI = async (): Promise<IChat> => {
  // Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "abc11",
        name: "New Chat User",
        position: "New Position",
        photo: "/avatar-4.png",
        messages: [
          {
            from: "New Chat User",
            time: "11:00 AM",
            date: "09/07/2024",
            content: "This is a new message.",
          },
        ],
      });
    }, 1000);
  });
};
