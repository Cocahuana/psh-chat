import React from "react";
import styled from "styled-components";
import { ITheme } from "../../assets/theme/ITheme";
import { IChat, IMessage } from "./IChats";
import ProfileImage from "../ProfileImage";
import { Flex } from "../elements";

type StyledTheme = {
  theme: ITheme;
  from?: string;
};

const MessageWrapper = styled.div<StyledTheme>`
  display: flex;
  justify-content: ${({ from }) => (from === "Me" ? "flex-end" : "flex-start")};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const MessageBubble = styled.div<StyledTheme>`
  background-color: ${({ from, theme }) =>
    from === "Me" ? theme.colors.primary : "#fff"};
  color: ${({ from }) => (from === "Me" ? "#fff" : "#000")};
  border-radius: 20px;
  padding: 10px;
  max-width: 70%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const MessageTime = styled.p<StyledTheme>`
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  white-space: nowrap;
  padding: ${({ from }) => (from === "Me" ? "0 0 0 0.5rem" : "0 0.5rem 0 0")};
`;

const HyperLink = styled.a<StyledTheme>`
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  white-space: pre-wrap;
  color: blue;
  text-decoration: underline;
`;

const MessageContent = styled.span<StyledTheme>`
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  white-space: pre-wrap;
`;

type MessageProps = {
  message: IMessage;
  chat: IChat;
};

const highlightLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <HyperLink
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </HyperLink>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const Message = (props: MessageProps) => {
  const { message, chat } = props;
  const isMe = message.from === "Me";

  return (
    <MessageWrapper from={message.from}>
      <Flex
        style={{
          flexDirection: "column",
          maxWidth: "70%",
          gap: "0.2rem",
        }}
      >
        <Flex
          style={{
            justifyContent: isMe ? "flex-start" : "flex-end",
          }}
        >
          <MessageTime from={message.from}>{message.time}</MessageTime>
        </Flex>
        <Flex
          style={{
            flexDirection: isMe ? "row-reverse" : "row",
            justifyContent: isMe ? "flex-end" : "flex-start",
            gap: "1rem",
          }}
        >
          <ProfileImage
            width="3rem"
            height="3rem"
            src={isMe ? "/avatar-4.png" : chat.photo}
            alt={`${chat.name}`}
          />
          <MessageBubble from={message.from}>
            <MessageContent from={message.from}>
              {highlightLinks(message.content)}
            </MessageContent>
          </MessageBubble>
        </Flex>
      </Flex>
    </MessageWrapper>
  );
};

export default Message;