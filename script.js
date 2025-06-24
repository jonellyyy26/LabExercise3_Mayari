// Get the button element by its ID
const button = document.getElementById('changeColorButton');

// Add an event listener to change the background color when clicked
button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
