import React, { useState } from "react";
import styled from "styled-components";
import { ITheme } from "../interfaces/ITheme";
import { Flex } from "./elements";

type StyledTheme = {
  theme: ITheme;
};

const Wrapper = styled(Flex)<StyledTheme>`
  min-height: 2rem;
  background: red;
  padding: 1rem;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 80%;
  resize: none;
`;

const SendButton = styled.button`
  width: 20%;
`;

type ChatKeyboardProps = {
  onSend: (messageContent: string) => void; // Function to handle sending a message
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
      setMessage(""); // Clear textarea after sending message
    }
  };

  return (
    <Wrapper>
      <TextArea
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown} // Listen for a key in your keyboard
      />
      <SendButton onClick={handleSendClick} name="send">
        SEND
      </SendButton>
    </Wrapper>
  );
}

export default ChatKeyboard;
