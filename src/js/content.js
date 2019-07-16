chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "getLastMessages") {
      var messages = document.querySelectorAll('div[data-qa="message_content"]');
      alert(messages.length);
      sendResponse({ data: messages, method: "getLastMessages"})
    }
  }
);