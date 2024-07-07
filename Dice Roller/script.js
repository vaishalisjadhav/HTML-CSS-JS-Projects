document.getElementById('roll-button').addEventListener('click', function() {
    // Generate a random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;

    // Set the image source based on the roll
    document.getElementById('dice-image').src = `dice${roll}.png`;
});
