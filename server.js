const express = require("express");
const app = express();
const Person = require("./schemas/person"); // Assuming 'person' is a mongoose model in 'schemas/person'
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  let person = {
    firstName: "John",
  };
  res.send(person);
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data); // Ensure correct case for model name
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const persons = await Person.find(); // Fetch all persons from the database
    res.status(200).json(persons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});

// comment added
//comment added
