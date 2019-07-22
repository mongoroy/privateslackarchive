Private Slack Archive

To get this up and running first run:

`yarn`

To install dependencies. Then run:

`npm run start`

This will generate the files in ./build.

In chrome open up your Extensions view:

chrome://extensions/

Enable "Developer mode" in the top right corner. Click on "Load unpacked" and find the ./build path and load the extension.

Browse to a slack website. On any messages in the main conversation window, you should be able to click it and then save the highlighted messages via the extension.

Currently this will block you from selecting a threaded conversation. It still needs a lot of work to pick up the full date/time as well as the sender and date/time for messages that are continuation of a sender's messages above.

OAuth2 also does not work.
