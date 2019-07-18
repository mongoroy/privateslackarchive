// React
import React from "react";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
// To-Do Components & Hooks
import { useStitchAuth } from "./StitchAuth";
import { useSlack } from "./useSlack";
import { Card } from "reactstrap";
import SlackControls from "./SlackControls";
import SlackLastMessages from "./SlackLastMessages"

SlackApp.propTypes = {};
export default function SlackApp() {
  const { currentUser } = useStitchAuth();
  const slack = useSlack(currentUser.id);
  return (
    <ErrorBoundary>
      <Layout>
        <SlackCard>
          <SlackControls {...slack}/>
          <SlackLastMessages {...slack}/>
        </SlackCard>
      </Layout>
    </ErrorBoundary>
  );
}
const Layout = styled.div`
  background: #eeeeee;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
const SlackCard = styled(Card)`
  max-width: 600px;
  align-items: center;
  width: 100%;
`;