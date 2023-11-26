const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchContainer = document.getElementById("searchContainer");
const movieIcon = document.getElementById("movieIcon");
const titleValue = document.getElementById("titleValue");
const yearValue = document.getElementById("yearValue");
const descriptionValue = document.getElementById("descriptionValue");
let errorSent = false;

async function fetchMovie() {
  const searchBoxValue = searchBox.value;
  try {
    const response = await fetch(
      `http://localhost:3500/movies/${searchBoxValue}`
    );
    if (response.status === 200) {
      window.location.href = `http://localhost:3500/search/${searchBoxValue}`;
    } else {
      if (errorSent === false) {
        const para = document.createElement("p");
        const textNode = document.createTextNode(
          `${response.status} ${response.statusText}`
        );
        para.append(textNode);
        para.style.color = "red";
        para.style.fontSize = "1.5rem";
        searchContainer.appendChild(para);
        errorSent = true;

        setTimeout(() => {
          para.style.display = "none";
          errorSent = false;
        }, 4000);
      }
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

searchButton.addEventListener("click", () => {
  fetchMovie();
});
