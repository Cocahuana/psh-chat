import React from "react";
import { Flex } from "../elements";
import { IChat } from "./IChats";
import ProfileImage from "../ProfileImage";
import styled from "styled-components";
import { ITheme } from "../../assets/theme/ITheme";
type ChatProps = {
  chat: IChat;
};

type StyledTheme = {
  theme: ITheme;
};

const ChatName = styled.h3<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chats.chatName};
`;

const LastMessage = styled.p<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
`;
const MessageTime = styled.p<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
`;

function Chat(props: ChatProps) {
  const { chat } = props;
  return (
    <Flex>
      <Flex>
        <ProfileImage src={chat.photo} alt={`${chat.name} + Profile image`} />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <LastMessage>Calc lastMessage</LastMessage>
        </Flex>
      </Flex>
      <MessageTime>Calc lastMessage</MessageTime>
    </Flex>
  );
}

export default Chat;
