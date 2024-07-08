import React from "react";
import chats from "../../../chats.json";
import { Flex, Box } from "../elements";
type ChatsProps = {
  children: React.ReactNode;
};

function Chats(props: ChatsProps) {
  const { children } = props;

  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Flex>
  );
}

export default Chats;
