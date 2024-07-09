import React, { createContext, useState, useContext, useEffect } from "react";
import { IChat, IMessage } from "../interfaces/IChats";
import dataFetched from "../assets/chats.json";
import axios from "axios";
import { IApiResponse, IUser } from "../interfaces/IPeopleApi";

interface ChatContextType {
  chats: IChat[];
  addChat: (chat: IChat) => void;
  addMessageToChat: (chatId: string, message: IMessage) => void; // New method
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
    setChats(dataFetched.chats); // Initialize with mock data or empty array
  }, []);

  const addChat = (chat: IChat) => {
    setChats((prevChats) => [...prevChats, chat]);
  };

  const addMessageToChat = (chatId: string, message: IMessage) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  const fetchNewChat = async () => {
    try {
      const response = await axios.get<IApiResponse>(
        "https://randomuser.me/api"
      );
      const user: IUser = response.data.results[0];
      const newChat: IChat = {
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        position: "New User",
        photo: user.picture.large,
        messages: [
          {
            from: `${user.name.first} ${user.name.last}`,
            time: new Date().toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }),
            date: new Date().toLocaleDateString(),
            content: "Be the first to start this conversation!",
          },
        ],
      };
      addChat(newChat);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const contextValue: ChatContextType = {
    chats,
    addChat,
    addMessageToChat,
    fetchNewChat,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export const useChats = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChats must be used within a ChatProvider");
  }
  return context;
};
