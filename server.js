const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);
app.use("/movies", require("./routes/movies"));
app.use("/search", require("./routes/movieTitle"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3500, () => {
  console.log(`Server running on port ${PORT}`);
});
