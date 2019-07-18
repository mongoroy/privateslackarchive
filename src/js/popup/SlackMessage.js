import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Card, CardBody, Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

SlackMessage.propTypes = {
  message: PropTypes.object,
};
export default function SlackMessage(props) {
  const { message, quoteMessage } = props;
  const handleQuoteMessage = () => {
    quoteMessage(message);
  }
  return (
      <MessageCard>
        <Layout>
          <Text>{message.time}</Text>
          <Text>{message.sender}</Text>
          <Text>{message.content}</Text>
          <ActionButton action={handleQuoteMessage}>Quote</ActionButton>
        </Layout>
      </MessageCard>
  );
}
const MessageCard = styled(Card)`
  margin: 4px auto;
  :first-of-type {
    margin-top: 0px;
  }
`;
const Layout = styled(CardBody)`
  display: flex;
  align-items: top;
  padding: 10px !important;
`;
const Text = styled.span`
  font-size: 18px;
  line-height: 24px;
  margin-left: 10px;
  max-width: calc(100% - 24px - 10px);
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
