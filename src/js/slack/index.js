function getLastMessages(n, dispatch) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getLastMessages"}, function(response) {
      console.warn(response);
      var messages = response.data;
      if (response.method == "getLastMessages") {
        dispatch({ type: "setLastMessages", payload: { messages: messages.slice(-(n)) } });
      }
    });
  });
}

export default {
  getLastMessages
}