const server = require("./server");

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.api = onRequest((req, res) => {
  server.emit("request", req, res);
});
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
