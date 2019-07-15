import React from "react";
import icon from "../../img/icon-128.png"
import { hot } from "react-hot-loader";
import { StitchAuthProvider, useStitchAuth } from "./StitchAuth";
import styled from "@emotion/styled";

class App extends React.Component {
  render () {
    return (
        <StitchAuthProvider>
          <AppUI />
        </StitchAuthProvider>
    )
  }
};

function AppUI() {
  const {
    isLoggedIn,
    actions: { handleLogout },
  } = useStitchAuth();
  return (
      <Layout>
        <Navbar>
          <AppTitle>Private Slack Archive</AppTitle>
        </Navbar>
        <Greeting/>
      </Layout>
  );
}

function Greeting() {
  return (
      <div>
        <p>Hello, find me on src/js/popup/greeting_component.jsx</p>
        <img src={icon} />
      </div>
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

export default hot(module)(App)
