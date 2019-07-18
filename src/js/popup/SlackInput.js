import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

SlackInput.propTypes = {
  getSelectedMessages: PropTypes.func,
  addMessages: PropTypes.func,
};
export default function SlackInput(props) {
  const { getSelectedMessages, addMessages, ...inputProps } = props;
  return (
      <Container>
        <ActionButton action={getSelectedMessages}>Get Selected Messages</ActionButton>
        <ActionButton action={addMessages}>Add</ActionButton>
      </Container>
  );
}
const Container = styled(InputGroup)`
  width: 100%;
`;
const ActionButton = props => {
  const Text = styled.div`
    margin-right: 8px;
    margin-left: 8px;
  `;
  return (
      <InputGroupAddon addonType="append">
        <InputButton
            color="info"
            onClick={props.action}
            disabled={props.disabled}
        >
          <Text>{props.children}</Text>
        </InputButton>
      </InputGroupAddon>
  );
};
const InputButton = styled(Button)`
  background-color: #5e9668 !important;
`;
