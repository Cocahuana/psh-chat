import styled from "styled-components";
import { useParams } from "react-router-dom";
import { IChat } from "./IChats";
import dataFetched from "../../../chats.json";
import { ITheme } from "../../assets/theme/ITheme";
import { Flex } from "../elements";
import ProfileImage from "../ProfileImage";
import { FaAngleLeft } from "react-icons/fa";
import ChatKeyboard from "../ChatKeyboard";
import Message from "./Message";

type StyledTheme = {
  theme: ITheme;
};

type ChatDetailProps = {
  handleBackClick?: () => void;
};

const ChatDetailContainer = styled.div`
  height: 100%;
  padding-bottom: 5rem;
`;

const ChatName = styled.h3<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chatting.chatName};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Position = styled.p<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.bg};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;

const BackButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    border: none;
    color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.text};
    cursor: pointer;
    border-radius: 50%;
    width: 5rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
  }
`;

const ChatHeader = styled(Flex)<StyledTheme>`
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.header};
  padding: 2rem;
  align-items: center;
`;

const ScrollableChatContainer = styled.div`
  height: calc(100% - 7rem); // Adjust height to account for header and footer
  overflow-y: auto;
`;

function ChatDetail(props: ChatDetailProps) {
  const { id } = useParams<{ id: string }>();
  const { handleBackClick } = props;
  const chat: IChat | undefined = dataFetched.chats.find(
    (chat) => chat.id === id
  );

  if (!chat) {
    return <div>Sé el primero en iniciar una conversación!</div>;
  }

  return (
    <ChatDetailContainer>
      <ChatHeader>
        <BackButton onClick={handleBackClick}>
          <FaAngleLeft size={"1.5rem"} />
        </BackButton>
        <ProfileImage
          width="5rem"
          height="5rem"
          src={chat.photo}
          alt={`${chat.name} + Profile image`}
        />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <Position>{chat.position}</Position>
        </Flex>
      </ChatHeader>
      <ScrollableChatContainer>
        <Flex style={{ flexDirection: "column", gap: "1rem" }}>
          {chat.messages.map((message, index) => (
            <Message key={index} message={message} chat={chat} />
          ))}
        </Flex>
      </ScrollableChatContainer>
      <ChatKeyboard />
    </ChatDetailContainer>
  );
}

export default ChatDetail;
