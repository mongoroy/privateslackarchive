import "../css/content.css";

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.method);
    if (request.method == "getSelectedMessages") {
      console.log("calling getSelectedMessages");
      var messages = selectedMessages();
      console.log('grabbed ' + messages.length);
      sendResponse({ data: messages, method: "getSelectedMessages"});
    } else if (request.method == "checkOverlay") {
      console.log('overlay');
      sendResponse({ data: null, method: "checkOverlay" });
    } else {
      console.log('error unrecognized request.method: ' + request.method);
    }
  }
);

function setOverlay() {
  var elements = document.querySelectorAll('div[data-qa="message_container"]')
  Array.prototype.slice.call(elements).forEach(function (messageElement) {
    console.log(messageElement.getElementsByClassName('psa').length);
    if (messageElement.getElementsByClassName('psa').length === 0) {
      var div = document.createElement('div')
      div.className = 'psa psa-overlay'

      div.addEventListener('click', function (e) {
        if (div.classList.contains('psa-selected')) {
          div.classList.remove('psa-selected')
        } else {
          div.classList.add('psa-selected')
        }
      })

      messageElement.appendChild(div)
    }
  })

}

function scrapeMessage(messageContainer) {
  let message = messageContainer.querySelector('div[data-qa="message_content"]');
  return {
    'time': (message.querySelector('.c-timestamp__label')) ? message.querySelector('.c-timestamp__label').innerText : null,
    'sender': (message.querySelector(
        'a[data-qa="message_sender_name"]')) ? message.querySelector(
        'a[data-qa="message_sender_name"]').innerText : null,
    'content': (message.querySelector(
        '.c-message__body')) ? message.querySelector(
        '.c-message__body').innerText : null
  };
}

function selectedMessages () {
  let elements = document.querySelectorAll('.psa-selected')

  return Array.prototype.slice.call(elements).map(function (el) {
    let messageElement = el.parentNode

    let message = scrapeMessage(messageElement)
    return message;
  })
}

setOverlay();
setInterval(function() {
  console.log('overlay');
  setOverlay();
}, 3000);