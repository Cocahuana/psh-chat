import React from "react";

interface CreateNewChatProps {
  onCreate: () => void;
}

const CreateNewChat: React.FC<CreateNewChatProps> = ({ onCreate }) => {
  return <button onClick={onCreate}>Create New Chat</button>;
};

export default CreateNewChat;
