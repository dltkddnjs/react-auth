import React from "react";
import Login from "./pages/Login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
