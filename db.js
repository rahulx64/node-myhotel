const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/myhotel"; // Use IPv4 address
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connected successfully");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
