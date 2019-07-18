import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
import SlackMessage from "./SlackMessage";

SlackLastMessages.propTypes = {
  messages: PropTypes.array,
};
export default function SlackLastMessages(props) {
  const { messages } = props;

  return (
      <ErrorBoundary>
        <List>
          {messages.length === 0 && <NoMessages />}
          {messages.map(message => (
              <SlackMessage
                  message={message}
              />
          ))}
        </List>
      </ErrorBoundary>
  );
}
const NoMessages = props => {
  const Layout = styled.div`
    text-align: center;
    font-size: 1em;
    padding-top: 10px;
    padding-bottom: 10px;
  `;

  return (
      <Layout>
        <span>
          No messages
        </span>
      </Layout>
  );
};
const List = styled.ul`
  padding: 0;
  margin-top: 10px;
  width: 450px;
`;
