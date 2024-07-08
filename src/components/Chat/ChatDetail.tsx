import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IChat } from "./IChats";
import dataFetched from "../../../chats.json";
import { ITheme } from "../../assets/theme/ITheme";
import { Flex, ScrollableContainer } from "../elements";
import ProfileImage from "../ProfileImage";
import { FaAngleLeft } from "react-icons/fa";

type StyledTheme = {
  theme: ITheme;
};
type ChatDetailProps = {
  handleBackClick: () => void;
};
const ChatDetailContainer = styled.div`
  padding: 20px;
  background-color: red;
  height: 100%;
`;
const ChatName = styled.h3<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chats.chatName};
`;

const Position = styled.p<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;
const BackButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
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
      <Flex style={{ gap: "1rem" }}>
        <BackButton onClick={handleBackClick} style={{ background: "purple" }}>
          <FaAngleLeft color="red" />
        </BackButton>
        <ProfileImage src={chat.photo} alt={`${chat.name} + Profile image`} />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <Position>{chat.position}</Position>
        </Flex>
      </Flex>
      <ScrollableContainer>
        {chat.messages.map((message, index) => (
          <div key={index}>
            <p>
              <strong>{message.from}</strong>: {message.content}
            </p>
          </div>
        ))}
      </ScrollableContainer>
    </ChatDetailContainer>
  );
}

export default ChatDetail;
