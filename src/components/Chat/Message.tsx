import React from "react";
import styled from "styled-components";
import { ITheme } from "../../interfaces/ITheme";
import { IChat, IMessage } from "../../interfaces/IChats";
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
  margin-bottom: 1rem; // Add spacing between messages
`;

const MessageBubble = styled.div<StyledTheme>`
  background-color: ${({ from, theme }) =>
    from === "Me"
      ? theme.colors.app.sections.chatting.me.bg
      : theme.colors.app.sections.chatting.they.bg};
  color: ${({ from, theme }) =>
    from === "Me"
      ? theme.colors.app.sections.chatting.me.text
      : theme.colors.app.sections.chatting.they.text};
  border-radius: 0.5rem;
  padding: 0.9rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  position: relative; // For arrow positioning
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.5);
  &::after {
    content: "";
    position: absolute;
    top: 0; // Align arrow with the top of the bubble
    ${({ from }) =>
      from === "Me"
        ? "right: -1rem"
        : "left: -0.9rem"}; // Adjust arrow position

    bottom: auto;
    width: 0;
    height: 0;
    border: 1.5rem solid transparent;

    border-top-color: ${({ from, theme }) =>
      from === "Me"
        ? theme.colors.app.sections.chatting.me.bg
        : theme.colors.app.sections.chatting.they.bg}; // Arrow color
  }
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

const MessageAndTime = styled(Flex)`
  flex-direction: column;
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
          width: "auto",
          maxWidth: "70%",
          gap: "0.2rem",
        }}
      >
        <Flex
          style={{
            flexDirection: isMe ? "row-reverse" : "row",
            justifyContent: isMe ? "flex-end" : "flex-start",
            gap: "1rem",
          }}
        >
          <div style={{ marginTop: "1rem" }}>
            <ProfileImage
              width="3rem"
              height="3rem"
              src={isMe ? "/avatar-4.png" : chat.photo}
              alt={`${chat.name}`}
            />
          </div>
          <MessageAndTime>
            <Flex style={{ justifyContent: isMe ? "flex-start" : "flex-end" }}>
              <MessageTime from={message.from}>{message.time}</MessageTime>
            </Flex>
            <MessageBubble from={message.from}>
              <MessageContent from={message.from}>
                {highlightLinks(message.content)}
              </MessageContent>
            </MessageBubble>
          </MessageAndTime>
        </Flex>
      </Flex>
    </MessageWrapper>
  );
};

export default Message;
