import React from "react";
import slack from "../slack";
import {items, messagesCollection, callFindMessages} from "../stitch";

const slackReducer = (state, { type, payload }) => {
  switch (type) {
    case 'getSelectedMessages': {
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
    case 'findMessages': {
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

export function useSlack(userId) {
  //
  const [state, dispatch] = React.useReducer(slackReducer, { messages: [], addedMessageCount: 0 });
  // slack Actions
  const getSelectedMessages = () => {
    console.warn("getSelectedMessages");
    slack.getSelectedMessages(dispatch);
  };
  const addMessages = async messages => {
    const messagesToAdd = messages.map(message => {
      return { message, owner_id: userId }
    });
    const result = await messagesCollection.insertMany(messagesToAdd);
    dispatch({ type: "addMessages", payload: { messages } });
  };
  const findMessages = async searchText => {
    callFindMessages(userId, searchText, dispatch);
  }
  return {
    messages: state.messages,
    addedMessageCount: state.addedMessageCount,
    actions: {
      getSelectedMessages, addMessages, findMessages
    }
  };
}
