import React, { createContext, useState, useContext, useEffect } from "react";
import { IChat } from "../interfaces/IChats";
import dataFetched from "../assets/chats.json";
import axios from "axios";
import { IApiResponse, IUser } from "../interfaces/IPeopleApi";
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
    const newChat = await fetchUser();
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
const API_URL = "https://randomuser.me/api";

export const fetchUser = async (): Promise<IChat> => {
  try {
    const formattedTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const response = await axios.get<IApiResponse>(API_URL);
    const user: IUser = response.data.results[0];
    const newChat: IChat = {
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      position: "New User",
      photo: user.picture.large,
      messages: [
        {
          from: `${user.name.first} ${user.name.last}`,
          time: formattedTime,
          date: new Date().toLocaleDateString(),
          content: "Be the First at starting this conversation!",
        },
      ],
    };
    return newChat;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
