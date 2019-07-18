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

export default {
  getSelectedMessages
}