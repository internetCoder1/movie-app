const moviesDB = require("../model/movies.json");
const path = require("path");

const returnMovieHTML = (req, res) => {
  const { name } = req.params;
  const formattedName = name.replace("+", " ").toLowerCase();

  const foundMovie = moviesDB.find((movie) => {
    return formattedName === movie.title.toLowerCase();
  });

  if (foundMovie) {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "public", "movies.html"));
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

module.exports = { returnMovieHTML };
