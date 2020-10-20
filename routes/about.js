const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("About this page: Exercise 3"));
router.get("/me", (req, res) => res.send("About me: Exercise 3"));
router.get("/json", (req, res) => 
res.send([{ itemOne: "cool", itemTwo: "cooloer" }])
);

module.exports = router;