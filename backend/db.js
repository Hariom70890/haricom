const mongoose = require("mongoose");
require("dotenv").config();

// Connection to MongoDB
mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handling for successful connection
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event handling for connection errors
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Event handling for disconnection
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Close the Mongoose connection when the Node process terminates
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection closed due to application termination");
    process.exit(0);
  });
});

module.exports = db;
