import React from "react";
import slack from "../slack";
import {items, messagesCollection} from "../stitch";

const slackReducer = (state, { type, payload }) => {
  switch (type) {
    case 'setLastMessages': {
      return {
        ...state,
        messages: payload.messages || [],
      };
    }
    case 'addMessages': {
      return {
        ...state,
        messages: [],
        addedMessageCount: payload.messages.length
      }
    }

    default: {
      console.error(`Received invalid slack action type: ${type}`);
    }
  }
};

export function useSlack(userId) {
  //
  const [state, dispatch] = React.useReducer(slackReducer, { messages: [], addedMessageCount: 0 });
  // slack Actions
  const getLastMessages = (n) => {
    console.warn("getLastMessages");
    slack.getLastMessages(n, dispatch);
  };
  const addMessages = async messages => {
    const messagesToAdd = messages.map(message => {
      return { message, owner_id: userId }
    });
    const result = await messagesCollection.insertMany(messagesToAdd);
    dispatch({ type: "addMessages", payload: { messages } });
  };
  return {
    messages: state.messages,
    addedMessageCount: state.addedMessageCount,
    actions: {
      getLastMessages, addMessages
    }
  };
}
