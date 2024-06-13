const mongoose = require("mongoose");

const personschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: { type: String, required: true },
  salary: {
    type: Number,
    required: true,
  },
});

const person = mongoose.model("person", personschema);
module.exports = person; // Corrected from model.exports to module.exports
