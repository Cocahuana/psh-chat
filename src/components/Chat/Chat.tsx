import { useNavigate } from "react-router-dom";
import { Flex } from "../elements";
import { IChat } from "../../interfaces/IChats";
import ProfileImage from "../ProfileImage";
import styled from "styled-components";
import { ITheme } from "../../interfaces/ITheme";

type ChatProps = {
  chat: IChat;
  handleChatSelect: () => void;
  lastMessage: {
    content: string;
    time: string;
  };
  isChatSelected: boolean;
};

type StyledTheme = {
  theme: ITheme;
  isChatSelected?: boolean;
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
`;

const ChatWrapper = styled(Flex)<StyledTheme>`
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
  ${({ isChatSelected, theme }) =>
    isChatSelected &&
    `border-right: 3px solid ${theme.colors.app.sections.chats.selected.rightBorder};
    background-color: ${theme.colors.app.sections.chats.selected.hoverBg};`}

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.app.sections.chats.selected.hoverBg};
    ${({ isChatSelected, theme }) =>
      isChatSelected &&
      `border-right: 3px solid ${theme.colors.app.sections.chats.selected.rightBorder};`}
  }
`;

function Chat(props: ChatProps) {
  const { chat, handleChatSelect, lastMessage, isChatSelected } = props;
  const navigate = useNavigate();

  const onChatClick = () => {
    handleChatSelect();
    navigate(`/chat/${chat.id}`);
  };

  return (
    <ChatWrapper isChatSelected={isChatSelected} onClick={onChatClick}>
      <Flex style={{ gap: "1rem" }}>
        <ProfileImage src={chat.photo} alt={`${chat.name} + Profile image`} />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <LastMessage>{lastMessage.content}</LastMessage>
        </Flex>
      </Flex>
      <MessageTime>{lastMessage.time}</MessageTime>
    </ChatWrapper>
  );
}

export default Chat;
