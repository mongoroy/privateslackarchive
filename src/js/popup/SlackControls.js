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
            onChange={handleInput}
            onKeyDown={handleKeyPress}
        />
      </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;
