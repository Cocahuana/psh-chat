import React, { useState } from "react";
import styled from "styled-components";
import { ITheme } from "../interfaces/ITheme";
import { Flex } from "./elements";

type StyledTheme = {
  theme: ITheme;
};

const Wrapper = styled(Flex)<StyledTheme>`
  min-height: 2rem;
  background: ${({ theme }) => theme.colors.white?.[900]};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 1rem;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #e0e0e0;
  max-width: 100%;
`;

const TextInputWrapper = styled.div<StyledTheme>`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: white;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.bg};
  @media (max-width: 480px) {
    min-width: 70%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    min-width: 80%;
  }

  @media (min-width: 767px) {
    min-width: 75%;
  }
  @media (min-width: 1367px) {
    min-width: 75%;
  }
`;

const TextInput = styled.input<StyledTheme>`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.text};

  ::placeholder {
    color: red;
    font-weight: bold;
  }
`;

const SendButton = styled.button<StyledTheme>`
  background-color: ${({ theme }) =>
    theme.colors.app.sections.chatting.sendBtn.bg};
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
  height: 100%;
  width: 100%;
  letter-spacing: 0.1rem;
  @media (max-width: 480px) {
    max-width: 20%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 20%;
  }
  @media (min-width: 767px) {
    max-width: 20%;
  }
  @media (min-width: 1367px) {
    max-width: 10%;
  }
`;

type ChatKeyboardProps = {
  onSend: (messageContent: string) => void;
};

function ChatKeyboard(props: ChatKeyboardProps) {
  const { onSend } = props;
  const [message, setMessage] = useState<string>("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedEnter = event.key === "Enter" && !event.shiftKey;
    if (pressedEnter) {
      event.preventDefault();
      handleSendClick();
    }
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <Wrapper>
      <TextInputWrapper>
        <TextInput
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />
      </TextInputWrapper>
      <SendButton onClick={handleSendClick} name="send">
        SEND
      </SendButton>
    </Wrapper>
  );
}

export default ChatKeyboard;
