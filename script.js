const words = ["philosophy", "productivity", "creativity", "innovation"];
const gradients = [
  "linear-gradient(45deg, #ff6a00, #ff6347)", // Gradient 1
  "linear-gradient(45deg, #32cd32, #1e90ff)", // Gradient 2
  "linear-gradient(45deg, #ff1493, #ff69b4)", // Gradient 3
  "linear-gradient(45deg, #00ced1, #20b2aa)"  // Gradient 4
];
let index = 0;
const changingWordElement = document.getElementById('changing-word');

function changeWord() {
  changingWordElement.style.opacity = 0; // Fade out the current word

  setTimeout(() => {
    changingWordElement.textContent = words[index]; // Change the word
    changingWordElement.style.backgroundImage = gradients[index]; // Apply the gradient
    changingWordElement.style.opacity = 1; // Fade in the new word
    index = (index + 1) % words.length; // Loop through the words
  }, 300); // Wait for the fade-out to complete in 0.3 seconds
}

setInterval(changeWord, 1000); // Change the word every 1 second
