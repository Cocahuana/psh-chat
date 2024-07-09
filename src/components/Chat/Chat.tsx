import { useNavigate } from "react-router-dom";
import { Flex } from "../elements";
import { IChat } from "./IChats";
import ProfileImage from "../ProfileImage";
import styled from "styled-components";
import { ITheme } from "../../assets/theme/ITheme";

type ChatProps = {
  chat: IChat;
  handleChatSelect: () => void;
  lastMessage: {
    content: string;
    time: string;
  };
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
`;

const ChatWrapper = styled(Flex)<StyledTheme>`
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.app.sections.chats.lastMessage};
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 0.5rem;
  cursor: pointer;
`;

function Chat(props: ChatProps) {
  const { chat, handleChatSelect, lastMessage } = props;
  const navigate = useNavigate();

  const onChatClick = () => {
    handleChatSelect();
    navigate(`/chat/${chat.id}`);
  };

  return (
    <ChatWrapper onClick={onChatClick}>
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
