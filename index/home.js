let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];

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


let cards = document.querySelector('.cards');

left_btn.addEventListener("click", () => {
  cards.scrollLeft -= 300;
});

right_btn.addEventListener("click", () => {
  cards.scrollLeft += 300;
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

let json_url = "http://localhost:3000/popular";

fetch(json_url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); 

    let cards = document.querySelector('.cards');

    if (data && Array.isArray(data)) {
      data.forEach((ele, i) => {
        let { name, imdb, date, sposter, bposter, genre } = ele;

        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${sposter}" alt="${name}" class="poster" />
          <div class="rest_card">
            <img src="${bposter}" alt="" />
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
              </div>
            </div>
          </div>
        `;

        card.addEventListener("mouseover", () => {
          card.querySelector(".rest_card .cont").style.opacity = "1";
        });

        card.addEventListener("mouseout", () => {
          card.querySelector(".rest_card .cont").style.opacity = "0";
        });

        cards.appendChild(card);
      });
    } else {
      console.error('Data format is not as expected:', data);
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });




function changeBg(bg, title) {
  console.log("Background:", bg);
  console.log("Title:", title);
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("../images/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

let json_url2 = "http://localhost:3000/soon";

fetch(json_url2)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); 

    let cards2 = document.querySelector('.cards2');

    if (data && Array.isArray(data)) {
      data.forEach((ele, i) => {
        let { name, imdb, date, sposter, bposter, genre } = ele;

        let card2 = document.createElement("div");
        card2.classList.add("card2");
        card2.innerHTML = `
          <img src="${sposter}" alt="${name}" class="poster" />
          <div class="rest_card">
            <img src="${bposter}" alt="" />
            <div class="cont">
              <h4>${name}</h4>
              <div class="sub">
                <p>${genre}, ${date}</p>
                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
              </div>
            </div>
          </div>
        `;

        card2.addEventListener("mouseover", () => {
          card2.querySelector(".rest_card2 .cont2").style.opacity = "1";
        });

        card2.addEventListener("mouseout", () => {
          card2.querySelector(".rest_card2 .cont2").style.opacity = "0";
        });

        cards2.appendChild(card2);
      });
    } else {
      console.error('Data format is not as expected:', data);
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });




 function changeBg(bg, title) {
  console.log("Background:", bg);
  console.log("Title:", title);
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("../images/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}


async function fetchMovieInfo(movieTitle) {
  const response = await fetch('http://localhost:3000/movies') 
    ;
  const data = await response.json();
  const movieInfo = data.find(movie => movie.name === movieTitle);
  return movieInfo;
}

function addToMovieList(movieTitle) {

  const movieList = JSON.parse(localStorage.getItem('movieList')) || [];
  movieList.push(movieTitle);
  localStorage.setItem('movieList', JSON.stringify(movieList));


  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = `Movie added to the list`;
  popup.style.display = 'block';
}


function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

const addToListButtons = document.querySelectorAll('.add-to-list');
addToListButtons.forEach(button => {
  button.addEventListener('click', function () {
    const movieTitle = this.closest('.content').querySelector('.movie-title').getAttribute('alt');
    addToMovieList(movieTitle);
  });
});

