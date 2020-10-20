const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home page: Exercise Three")
});

module.exports = router;