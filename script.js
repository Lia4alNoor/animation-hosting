const words = ["philosophy", "productivity", "creativity", "innovation", "and more"];
const gradients = [
  "linear-gradient(45deg, #ff6a00, #ff6347)", // Gradient 1
  "linear-gradient(45deg, #32cd32, #1e90ff)", // Gradient 2
  "linear-gradient(45deg, #ff1493, #ff69b4)", // Gradient 3
  "linear-gradient(45deg, #00ced1, #20b2aa)"  // Gradient 4
];

let index = 0; // Track the current word and gradient
const changingWordElement = document.getElementById("changing-word");

function changeWord() {
  // Fade out and slight vertical shift up
  changingWordElement.style.opacity = 0;
  changingWordElement.style.transform = "translateY(-10px)"; // Slight upward movement

  // Wait for the fade-out transition to finish
  setTimeout(() => {
    // Update the text and gradient
    changingWordElement.textContent = words[index];
    changingWordElement.style.backgroundImage = gradients[index];

    // Fade in and slight vertical shift down
    changingWordElement.style.opacity = 1;
    changingWordElement.style.transform = "translateY(10px)"; // Slight downward movement

    // Wait for the downward shift transition to finish
    setTimeout(() => {
      changingWordElement.style.transform = "translateY(0)"; // Reset to normal position
    }, 200); // Duration of the downward shift

    // Update index for the next word
    index = (index + 1) % words.length;
  }, 500); // Duration of fade-out and shift-up transition
}

// Set initial styles
changingWordElement.style.transition = "opacity 0.5s ease, transform 0.3s ease";
changingWordElement.style.opacity = 1; // Ensure it's visible initially
changingWordElement.style.transform = "translateY(0)"; // Start with no movement

// Start the interval
setInterval(changeWord, 2000); // 2 seconds for each word
