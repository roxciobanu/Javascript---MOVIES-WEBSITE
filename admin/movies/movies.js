const divulMeu = document.getElementById("movies");

async function fetchData() {
  return await fetch("http://localhost:3000/movies").then((response) =>
    response.json()
  );
}

function displayCards(data) {
  divulMeu.innerHTML = "";
  data?.forEach((elem) => {
    const card = document.createElement("div");
    card.id = elem.id;
    card.className = "card";

    const cardImage = document.createElement("img");
    cardImage.src = elem.sposter;
    cardImage.alt = "Movie Poster";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = elem.name;

    const cardDate = document.createElement("p");
    cardDate.className = "date";
    cardDate.textContent = `Published: ${elem.date}`;

    const cardGenre = document.createElement("p");
    cardGenre.className = "year";
    cardGenre.textContent = `Genre: ${elem.genre}`;

    const cardImdb = document.createElement("p");
    cardImdb.className = "imdb";
    cardImdb.textContent = `Imdb: ${elem.imdb}/5`;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDate);
    card.appendChild(cardGenre);
    card.appendChild(cardImdb);

    card.addEventListener("click", function () {
    
      window.location.href = `/admin/movies/page.html?id=${elem.id}`;
    });

    divulMeu.appendChild(card);
  });
}


(async () => {
  const data = await fetchData();
  displayCards(data);
})();





async function main() {
  const data = await fetchData();
  displayCards(data);
}

main();

const display = document.getElementById("movies");
const input = document.querySelector("#searchInput");
const filterBySearchQuery = async () => {
  let query = input.value;
  console.log("Query:", query);

  const load = await fetchData();

  let dataDisplay = load.filter((eventData) => {
    if (query === "") {
      return false;
    } else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
  });

  displayCards(dataDisplay);
};

input.addEventListener("input", () => {
  filterBySearchQuery();
});


const selectedYear = document.getElementById("dropdown2");
let yearFilter = "";

selectedYear.addEventListener("change", (e) => {
  console.log(e.target.value);
  yearFilter = e.target.value;
});

const filterMoviesByYear = async () => {
  const movies = await fetchData();
  let filteredMovies = [];

  if (yearFilter !== "") {
    filteredMovies = movies.filter((movie) => parseInt(movie.date, 10) === parseInt(yearFilter, 10));
  } else {
    filteredMovies = movies;
  }

  console.log("Filtered Movies:", filteredMovies);
  displayCards(filteredMovies);
};

button1.addEventListener("click", async () => {
  await filterMoviesByYear();
}); 






let scrollPrecentage  = () =>{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrollValue = Math.round(pos * 100 / calcHeight);
  scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`
}

window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
      navbar.classList.add("white-bg");
    } else {
      navbar.classList.remove("white-bg");
    }
  });
});




  




