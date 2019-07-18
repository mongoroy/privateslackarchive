import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

SlackSearchInput.propTypes = {
  findMessages: PropTypes.func,
};
export default function SlackSearchInput(props) {
  const { findMessages, ...inputProps } = props;
  return (
      <Container>
        <TextInput
            {...inputProps}
            type="text"
            placeholder="Looking for evidence?"
        />
        <ActionButton action={findMessages}>Find</ActionButton>
      </Container>
  );
}
const Container = styled(InputGroup)`
  width: 100%;
  padding-top: 10px;
`;
const TextInput = styled(Input)`
  background-color: white;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
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
