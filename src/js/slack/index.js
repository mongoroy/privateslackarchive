function getSelectedMessages(dispatch) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getSelectedMessages"}, function(response) {
      console.warn(response);
      var messages = response.data;
      if (response.method == "getSelectedMessages") {
        dispatch({ type: "getSelectedMessages", payload: { messages: messages } });
      }
    });
  });
}

function quoteMessage(message) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {method: "quote", "message": message}, function(response) {
      console.warn(response);
      var messages = response.data;
      if (response.method == "quote") {
        console.warn("Succeeded in quoting message");
      }
    });
  });
}

export default {
  getSelectedMessages, quoteMessage
}