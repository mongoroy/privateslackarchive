import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Card, CardBody } from "reactstrap";

SlackMessage.propTypes = {
  message: PropTypes.string,
};
export default function SlackMessage(props) {
  const { message } = props;
  return (
      <MessageCard>
        <Layout>
          <Text>{message.time}</Text>
          <Text>{message.sender}</Text>
          <Text>{message.content}</Text>
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
