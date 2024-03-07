const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../schemas/User");
require("dotenv").config();

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    mongoose.connect(process.env.DB_URL);

    const user = new User({
      email: username,
      password: password,
    });

    await user.save();
    res.status(201).send("User created!");
  } catch (error) {
    console.error(error);
  }
});

router.put("/update-hobbies", async (req, res) => {
  try {
    const email = req.body.email;
    const hobbies = req.body.hobbies;
    mongoose.connect(process.env.DB_URL);
    const user = await User.findOne({ email: email });
    user.hobbies = hobbies;
    user.save();
  } catch (error) {
    console.error(error);
  }
});

router.put("/forgot-password", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    mongoose.connect(process.env.DB_URL);
    const user = await User.findOne({ email: email, password: password });
    user.password = password;
    user.save();
    res.status(200).send("Your password has been updated!", user);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/delete", (req, res) => {
  res.send("User deleted!");
});

module.exports = router;
