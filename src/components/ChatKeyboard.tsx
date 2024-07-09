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
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;

const TextInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: white;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  max-width: 80%;
`;

const TextInput = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const SendButton = styled.button<StyledTheme>`
  background-color: ${({ theme }) =>
    theme.colors.app.sections.chatting.sendBtn.bg};
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.text};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-height: 2rem;
  width: 100%;
`;

type ChatKeyboardProps = {
  onSend: (messageContent: string) => void;
};

function ChatKeyboard(props: ChatKeyboardProps) {
  const { onSend } = props;
  const [message, setMessage] = useState<string>("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />
      </TextInputWrapper>
      <Flex
        style={{ width: "20%", justifyContent: "center", alignItems: "center" }}
      >
        <SendButton onClick={handleSendClick} name="send">
          SEND
        </SendButton>
      </Flex>
    </Wrapper>
  );
}

export default ChatKeyboard;
