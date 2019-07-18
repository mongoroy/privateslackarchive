import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "spas"
);

const messagesCollection = mongoClient.db("psa").collection("messages");

const callFindMessages = function(userId, searchText, dispatch) {
  app.callFunction("findMessages", [userId, searchText]).then(messages => {
    console.log(messages);
    let messagesContent = messages.map(m => m.message);
    dispatch({ type: "findMessages", payload: { messages: messagesContent }});
  })
}

export { messagesCollection, callFindMessages };
