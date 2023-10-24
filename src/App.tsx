import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" text="hello" />
    </div>
  );
}

export default App;
