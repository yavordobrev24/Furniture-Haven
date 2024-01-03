const server = require("./server");
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// Cloud Function handling HTTP requests and emitting them to the server
exports.api = functions
  .runWith({ maxInstances: 10 }) // Set the maximum instances to 10
  .https.onRequest((req, res) => {
    server.emit("request", req, res);
  });
