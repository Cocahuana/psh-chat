import React from "react";
import styled from "styled-components";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
}
const FlexStyle = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "100%"};
  display: flex;
`;
const Flex: React.FC<FlexProps> = ({ children, width, ...rest }) => {
  return (
    <FlexStyle width={width} {...rest}>
      {children}
    </FlexStyle>
  );
};

export default Flex;
