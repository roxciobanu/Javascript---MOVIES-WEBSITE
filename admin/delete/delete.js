
document.addEventListener('DOMContentLoaded', async () => {
    const divulMeu = document.getElementById('movies');
  
    let movieData = []; 
  
    async function fetchData() {
      return await fetch('http://localhost:3000/movies').then((response) =>
        response.json()
      );
    }
  
   
    function displayCards(data) {
      divulMeu.innerHTML = '';
      data?.forEach((elem) => {
        divulMeu.innerHTML += `
          <div id="${elem.id}" class="card">
            <img src=${elem.sposter} alt="Movie Poster" />
            <h2>${elem.name}</h2>
            <p class="date">Released: ${elem.date}</p>
            <p class="year">Genre: ${elem.genre}</p>
            <p class="imdb">IMDb: ${elem.imdb}/5</p>
            <button class="delete-btn" onclick="deleteMovie(${elem.id})">Delete</button>
          </div>
        `;
      });
    }
  
    window.deleteMovie = async function(movieId) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
        
          const updatedData = movieData.filter((movie) => movie.id !== movieId);
          
         
          displayCards(updatedData);
  
         
          movieData = updatedData;
        } else {
          console.error('Failed to delete the movie.');
        }
      } catch (error) {
        console.error('Error occurred while deleting the movie:', error);
      }
    };
  

    try {
      movieData = await fetchData();
      displayCards(movieData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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