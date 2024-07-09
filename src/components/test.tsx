import React from "react";
import styled from "styled-components";

// Define the styled components
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; // Set height as needed
`;

const HalfDiv = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: auto; // Enable vertical scrolling
  padding: 1rem;
  box-sizing: border-box;
`;

const Content = styled.div`
  height: 200%; // Make content larger to enable scrolling
  background: linear-gradient(
    to bottom,
    #f0f0f0,
    #c0c0c0
  ); // Sample content background
`;

const Test = () => {
  return (
    <Container>
      <HalfDiv>
        <Content>
          Content in the first half. Scrollable if content overflows.
        </Content>
      </HalfDiv>
      <HalfDiv>
        <Content>
          Content in the second half. Scrollable if content overflows.
        </Content>
      </HalfDiv>
    </Container>
  );
};

export default Test;
