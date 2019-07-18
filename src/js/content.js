chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(request.method);
    if (request.method == "getLastMessages") {
      console.log("calling getLastMessages");
      var messages = [...document.querySelectorAll('div[data-qa="message_content"]')].map(function(message) {
        return {
          'time': (message.querySelector('.c-timestamp__label')) ? message.querySelector('.c-timestamp__label').innerText : null,
          'sender': (message.querySelector(
              'a[data-qa="message_sender_name"]')) ? message.querySelector(
              'a[data-qa="message_sender_name"]').innerText : null,
          'content': (message.querySelector(
              '.c-message__body')) ? message.querySelector(
              '.c-message__body').innerText : null
        };
      });
      console.log('grabbed ' + messages.length);
      sendResponse({ data: messages, method: "getLastMessages"})
    } else {
      console.log('error');
    }
  }
);