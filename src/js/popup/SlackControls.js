import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import SlackInput from "./SlackInput";

SlackControls.propTypes = {
  items: PropTypes.array,
  actions: PropTypes.object,
};
export default function SlackControls(props) {
  const { messages, actions } = props;
  const [inputText, setInputText] = useState("");
  const handleInput = e => setInputText(e.target.value);
  const handleGetLastMessages = () => {
    if (inputText) {
      actions.getLastMessages(inputText);
      setInputText("");
    }
  };
  const handleAddMessages = () => {
    actions.addMessages(messages);
  }
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleGetLastMessages();
    }
  };
  return (
      <Layout>
        <SlackInput
            value={inputText}
            getLastMessages={handleGetLastMessages}
            addMessages={handleAddMessages}
            onChange={handleInput}
            onKeyDown={handleKeyPress}
        />
        <AddedMessages />
      </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;
const AddedMessages = props => {
  const Layout = styled.div`
    text-align: center;
    font-size: 2em;
    padding-top: 60px;
    padding-bottom: 60px;
  `;

  return (
      <Layout>
        {props.addedMessageCount ? (
            <span>
          <span role="img" aria-label="celebrate">
            {" "}
            🎉{" "}
          </span>
          Added {props.addedMessageCount} message(s)!
        </span>
        ) : (
            <span>
          Get some messages and add them!
        </span>
        )}
      </Layout>
  );
};