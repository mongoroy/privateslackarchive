import React from "react";
import slack from "../slack";

const slackReducer = (state, { type, payload }) => {
  switch (type) {
    case 'setLastMessages': {
      return {
        ...state,
        messages: payload.messages || [],
      };
    }

    default: {
      console.error(`Received invalid slack action type: ${type}`);
    }
  }
};

export function useSlack() {
  //
  const [state, dispatch] = React.useReducer(slackReducer, { messages: [] });
  // slack Actions
  const getLastMessages = (n) => {
    slack.getLastMessages(n, dispatch);
  };
  return {
    messages: state.messages,
    actions: {
      getLastMessages
    }
  };
}
