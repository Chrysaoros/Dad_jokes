const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Event Listeners
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // using async/await
  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();

  console.log(response);
  console.log(data);
  jokeElement.innerHTML = data.joke;
}

// // using "fetch"
// fetch("https://icanhazdadjoke.com/", config)
// .then((response) => response.json())
// .then((data) => {
//   console.log(data);
//   jokeElement.innerText = data.joke;
// });
