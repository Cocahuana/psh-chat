import React from "react";
import styled from "styled-components";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const StyledScrollableContainer = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding: 1rem;
`;
const ScrollableContainer: React.FC<ScrollProps> = ({ children, ...rest }) => {
  return (
    <StyledScrollableContainer {...rest}>{children}</StyledScrollableContainer>
  );
};

export default ScrollableContainer;
