require('dotenv').config();  // Make sure this line is at the top
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

let dbClient;

// Connect to MongoDB
MongoClient.connect(process.env.MONGODB_URI)
  .then(client => {
    dbClient = client;
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

// Simple ping route
app.get("/ping", (req, res) => {
  res.send("Pong!");
});

// Home route to check MongoDB connection status
app.get("/", (req, res) => {
  if (dbClient) {
    res.status(200).send("Connected to MongoDB");
  } else {
    res.status(500).send("Failed to connect to MongoDB");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
