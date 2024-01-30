const addMovieForm = document.getElementById("addMovieForm");

addMovieForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title")?.value;
  const director = document.getElementById("director")?.value;
  const publishedYear = document.getElementById("publishedYear")?.value;
  const category = document.getElementById("category")?.value;
  const rating = document.getElementById("rating")?.value;
  const duration = document.getElementById("duration")?.value;
  const image = document.getElementById("image")?.value;

  const newMovie = {
    title: title,
    director: director,
    publishedYear: publishedYear,
    category: category,
    rating: rating,
    duration: duration,
    image: image,
  };

  try {
    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });

    if (response.status === 200 || response.status === 201) {
      const addedMovie = await response.json();
      console.log("Movie added successfully:", addedMovie);
    
      addMovieForm.reset();
    } else {
      const responseBody = await response.text();
      console.log("Failed to add movie. Status code:", response.status);
      console.log("Response body:", responseBody);
    }
  } catch (error) {
    console.error("Error adding movie:", error.message);
  }
});