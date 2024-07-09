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
  justify-content: ${({ from, theme }) =>
    from === "Me" ? "flex-end" : "flex-start"};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const MessageBubbleThey = styled(Flex)<StyledTheme>`
  background-color: ${({ from, theme }) =>
    from === "Me" ? theme.colors.primary : "#fff"};
  color: ${({ from, theme }) => (from === "Me" ? "#fff" : "#000")};
  border-radius: 20px;
  padding: 10px;
`;
const MessageBubbleUs = styled(Flex)<StyledTheme>`
  background-color: ${({ from, theme }) =>
    from === "Me" ? theme.colors.primary : "#fff"};
  color: ${({ from, theme }) => (from === "Me" ? "#fff" : "#000")};
  border-radius: 20px;
  padding: 10px;
`;

const MessageTime = styled.p<StyledTheme>`
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  white-space: nowrap;
  padding: ${({ from, theme }) =>
    from === "Me" ? "0 0 0 0.5rem" : "0 0.5rem 0 0 "};
`;

type MessageProps = {
  message: IMessage;
  chat: IChat;
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
          {isMe ? (
            <MessageBubbleUs from={message.from}>
              {message.content}
            </MessageBubbleUs>
          ) : (
            <MessageBubbleThey from={message.from}>
              {message.content}
            </MessageBubbleThey>
          )}
        </Flex>
      </Flex>
    </MessageWrapper>
  );
};

export default Message;
