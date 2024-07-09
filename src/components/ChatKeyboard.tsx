import styled from "styled-components";
import { ITheme } from "../interfaces/ITheme";
import { Flex } from "./elements";
type StyledTheme = {
  theme: ITheme;
};

// const ChatName = styled.h3<StyledTheme>`
//   color: ${({ theme }) => theme.colors.app.sections.chatting.chatName};
//   font-size: ${({ theme }) => theme.fontSizes.large};
// `;

const Wrapper = styled(Flex)<StyledTheme>`
  min-height: 2rem;
  background: red;
  padding: 1rem;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

function ChatKeyboard() {
  return (
    <Wrapper>
      <textarea style={{ width: "80%" }} placeholder="Type your message..." />
      <button style={{ width: "20%" }} name="send">
        SEND
      </button>
    </Wrapper>
  );
}

export default ChatKeyboard;
