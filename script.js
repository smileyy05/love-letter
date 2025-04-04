// Function to show the heart and display confirmation message
function showHeart() {
    // Show the heart
    const heart = document.getElementById("heart");
    const message = document.getElementById("confirmation-message");
    
    heart.style.display = "block";
    message.style.display = "block";

    // Set the messages, one after another
    message.innerHTML = `
        <div class="message-line"> Just ask me for the details, and I'll send you the exact ones soon. In the meantime, hold my heart close. meantime. ❤️</div>
    `;

    // Remove both letters immediately after YES is clicked
    const loveLetter = document.getElementById("love-letter");
    const invitationLetter = document.getElementById("invitation-letter");

    loveLetter.style.display = "none";
    invitationLetter.style.display = "none";

    // Add a small delay before hiding the heart
    setTimeout(() => {
        heart.style.display = "none";
    }, 5000); // After the heart disappears, the confirmation message remains
}

// Function to move the NO button to a random position
function moveNoButton() {
    const noButton = document.getElementById("no-btn");
    
    // Randomly calculate the position of the button within the viewport
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Function to transition from the love letter to the invitation letter
function showInvitation() {
    const loveLetter = document.getElementById("love-letter");
    const invitationLetter = document.getElementById("invitation-letter");

    // Fade out the love letter
    loveLetter.style.opacity = 0;

    // Wait for the fade-out to finish before displaying the invitation letter
    setTimeout(() => {
        loveLetter.style.display = "none";
        invitationLetter.style.display = "block";
        invitationLetter.style.opacity = 1;
    }, 500); // Matches the fade-out transition time
}
