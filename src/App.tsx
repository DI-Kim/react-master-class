import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Title>Hello</Title>
      </Box>
    </Wrapper>
  );
}

export default App;
