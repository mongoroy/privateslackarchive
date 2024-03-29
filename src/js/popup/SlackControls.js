import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import SlackInput from "./SlackInput";
import SlackSearchInput from "./SlackSearchInput";

SlackControls.propTypes = {
  items: PropTypes.array,
  actions: PropTypes.object,
};
export default function SlackControls(props) {
  const { messages, actions } = props;
  const handleGetSelectedMessages = () => {
    actions.getSelectedMessages();
  };
  const handleAddMessages = () => {
    actions.addMessages(messages);
  }

  const [searchInputText, setSearchInputText] = useState("");
  const handleSearchInput = e => setSearchInputText(e.target.value);
  const handleFindMessages = () => {
    actions.findMessages(searchInputText);
  }
  const handleSearchKeyPress = e => {
    if (e.key === "Enter") {
      handleFindMessages();
    }
  };

  return (
      <Layout>
        <SlackInput
            getSelectedMessages={handleGetSelectedMessages}
            addMessages={handleAddMessages}
        />
        <SlackSearchInput
            value={searchInputText}
            findMessages={handleFindMessages}
            onChange={handleSearchInput}
            onKeyDown={handleSearchKeyPress}
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
    font-size: 1em;
    padding-top: 10px;
    padding-bottom: 10px;
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