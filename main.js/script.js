document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'squares' (color boxes)
    const squares = document.querySelectorAll(".squares");
    // Select the element displaying the color code
    const colorCodeDisplay = document.querySelector(".colorCode");
    // Select the 'Generate' button
    const generateButton = document.querySelector("button");
    const answerDisplay =  document.querySelector("correct");
    let pickedColor;

    // Function to generate a random RGB color
    function randomRGB() {
        const r = Math.floor(Math.random() * 256); // Generate a random red value (0-255)
        const g = Math.floor(Math.random() * 256); // Generate a random green value (0-255)
        const b = Math.floor(Math.random() * 256); // Generate a random blue value (0-255)
        return `rgb(${r}, ${g}, ${b})`; // Return the RGB string
    }

    // Function to assign random colors to squares and pick the target color
    function generateColors() {
        let colors = [];
        for (let i = 0; i < squares.length; i++) {
            let newColor = randomRGB(); // Generate a new random color
            colors.push(newColor); // Add color to the colors array
            squares[i].style.transition = "background-color 0.5s ease"; // Add transition effect
            squares[i].style.backgroundColor = newColor; // Assign color to square
            squares[i].addEventListener("click", checkColor); // Add event listener to check selection
        }
        pickedColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly choose one color as the correct answer
        colorCodeDisplay.textContent = pickedColor; // Display the chosen color code
    }

    // Function to check if the selected color is correct
    function checkColor(event) {
        const selectedColor = event.target.style.backgroundColor; // Get clicked square's color
        if (selectedColor === pickedColor) {
            alert("Correct! You guessed the right color!"); // Notify user of correct guess
            answerDisplay.textContent = 'correct';
            generateColors(); // Regenerate colors for a new round
        } else {
            alert("Try again")
            answerDisplay.textContent = 'wrong';
            event.target.style.opacity = "0"; // Hide the incorrect choice
        }
    }

    // Add click event to the 'Generate' button to refresh colors
    generateButton.addEventListener("click", generateColors);

    generateColors(); // Initialize the game with colors when the page loads
});
