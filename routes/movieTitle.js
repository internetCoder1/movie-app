const express = require("express");
const router = express.Router();
const moviesHTMLController = require("../controllers/moviesHTMLController");

router.get("/:name", moviesHTMLController.returnMovieHTML);

module.exports = router;
