const express = require("express");
const router = express.Router();
const Users = require("../models/apiurdata");
//Get all
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get one

router.get("/:id", getUsers, (req, res) => {
  res.send(res.user);
});

//Creating one
router.post("/", async (req, res) => {
  const user = new Users({
    id: req.body.id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    company: req.body.company,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Updating one
router.patch("/:id", getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.id != null) {
    res.user.id = req.body.id;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.address != null) {
    res.user.address = req.body.address;
  }
  if (req.body.phone != null) {
    res.user.phone = req.body.phone;
  }
  if (req.body.website != null) {
    res.user.website = req.body.website;
  }
  if (req.body.company != null) {
    res.user.company = req.body.company;
  }
  try {
    const updatedSubscriber = await res.user.save();
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete one
router.delete("/:id", getUsers, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Delted Subscriber" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Middleware
async function getUsers(req, res, next) {
  let user;
  try {
    user = await Users.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}
module.exports = router;
