const express = require("expresss");
const router = express.Router();
router.post("/person", async (req, res) => {
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

router.get("/person", async (req, res) => {
  try {
    const persons = await Person.find(); // Fetch all persons from the database
    res.status(200).json(persons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
