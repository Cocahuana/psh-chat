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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
`;

const MessageTime = styled.p<StyledTheme>`
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  white-space: nowrap;
  padding-top: 0.2rem;
`;

const ChatWrapper = styled(Flex)<StyledTheme>`
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 0.5rem;
`;

function Chat(props: ChatProps) {
  const { chat } = props;
  return (
    <ChatWrapper>
      <Flex style={{ gap: "1rem" }}>
        <ProfileImage src={chat.photo} alt={`${chat.name} + Profile image`} />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <LastMessage>asasdasda</LastMessage>
        </Flex>
      </Flex>
      <MessageTime>11:30 AM</MessageTime>
    </ChatWrapper>
  );
}

export default Chat;