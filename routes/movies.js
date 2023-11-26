const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/:name", moviesController.getMovieByTitle);

module.exports = router;
