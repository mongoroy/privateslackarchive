import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "spas"
);

// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db("todo").collection("items");

const messagesCollection = mongoClient.db("psa").collection("messages");

const callFindMessages = function(userId, searchText, dispatch) {
  app.callFunction("findMessages", [userId, searchText]).then(messages => {
    console.log(messages);
    let messagesContent = messages.map(m => m.message);
    dispatch({ type: "findMessages", payload: { messages: messagesContent }});
  })
}

export { items, messagesCollection, callFindMessages };
