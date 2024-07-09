import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Flex } from "./elements";
import { ITheme } from "../interfaces/ITheme";
interface CreateNewChatProps {
  onCreate: () => void;
}

type StyledTheme = {
  theme: ITheme;
  isChatSelected?: boolean;
};
const NewChatBtn = styled(Flex)<StyledTheme>`
  min-height: 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.app.sections.chats.createNew};
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.app.sections.chats.selected.hoverBg};
  }
`;
const NewChatText = styled.p<StyledTheme>`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const CreateNewChat: React.FC<CreateNewChatProps> = ({ onCreate }) => {
  return (
    <NewChatBtn onClick={onCreate}>
      <FaPlus size={"2rem"} />
      <NewChatText>Create New</NewChatText>
    </NewChatBtn>
  );
};

export default CreateNewChat;
