import React from "react";
import { hot } from "react-hot-loader";
import { StitchAuthProvider, useStitchAuth } from "./StitchAuth";
import styled from "@emotion/styled";
import Login from "./Login";
import { Button } from "reactstrap";
import SlackApp from './SlackApp';

App.propTypes = {};
export default function App() {
  return (
      <StitchAuthProvider>
        <AppUI />
      </StitchAuthProvider>
  );
}

function AppUI() {
  const {
    isLoggedIn,
    actions: { handleLogout },
  } = useStitchAuth();
  return (
      <Layout>
        <Navbar>
          {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
          <AppTitle>Private Slack Archive</AppTitle>
        </Navbar>
        {isLoggedIn ? <SlackApp /> : <Login />}
      </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  * {
    font-family: sans-serif;
  }
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 62px;
  padding: 10px;
  background: #5e9668;
`;
const AppTitle = styled.h1`
  margin-right: auto;
`;

// export default hot(module)(App)
