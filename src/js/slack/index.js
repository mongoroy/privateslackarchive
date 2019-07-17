function getLastMessages(n, dispatch) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getLastMessages"}, function(response) {
      var messages = response.data;
      if (response.method == "getLastMessages") {
        dispatch({ type: "setLastMessages", payload: { messages: messages } });
      }
    });
  });
  // return ["a fake message"];
}

export default {
  getLastMessages
}