// Initialize Game Variables
let score = 0;
let timeLeft = 0;  // Timer will be set by user
let gameStarted = false;
let timerInterval;
let totalTime = 0;  // Variable to store total time for click speed

// DOM Elements
const flowerImage = document.getElementById('flowerImage');
const scoreValue = document.getElementById('scoreValue');
const popup = document.getElementById('newPopup');
const closePopup = document.getElementById('closeNewPopup');
const timerValue = document.getElementById('timerValue');
const clickSpeedValue = document.getElementById('clickSpeedValue'); // Element for click speed
const startButton = document.getElementById('startButton');
const timerSelect = document.getElementById('timerSelect');
const dropletContainer = document.getElementById('dropletContainer'); // Container for droplets
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const clickSound = document.getElementById('clickSound'); // Reference to the audio element
const resultContainer = document.getElementById('resultContainer');
const backToTopButton = document.getElementById("backToTop"); // Back to Top button

// Function to Start the Game
function startGame() {
    score = 0;
    timeLeft = parseInt(timerSelect.value); // Set time from selection
    totalTime = timeLeft;  // Store the total time for click speed calculation
    gameStarted = true;

    // Reset UI
    scoreValue.textContent = score;
    clickSpeedValue.textContent = "0";  // Reset click speed display
    timerValue.textContent = timeLeft;
    flowerImage.style.display = 'block';  // Show the flower image

    // Start the Countdown Timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerValue.textContent = timeLeft;

        if (timeLeft === 0) {
            endGame();
        } else {
            updateClickSpeed(); // Update click speed during the game
        }
    }, 1000); // Decrease time by 1 second every 1000 ms
}

// Function to Update Click Speed
function updateClickSpeed() {
    const elapsedTime = totalTime - timeLeft;
    const clickSpeed = elapsedTime > 0 ? (score / elapsedTime).toFixed(2) : 0;
    clickSpeedValue.textContent = clickSpeed;  // Update the UI with click speed
}

// Function to End the Game and Show the Popup
function endGame() {
    clearInterval(timerInterval);  // Stop the timer
    gameStarted = false;

    // Hide the Flower Image
    flowerImage.style.display = 'none';

    // Get the Selected Time and Calculate Click Speed
    const selectedTime = parseInt(timerSelect.value);
    const clickSpeed = (score / totalTime).toFixed(2);

    // Update the Popup Content
    const popupTitle = document.getElementById('popupTitle');
    const popupCPS = document.getElementById('popupCPS');
    const popupClicks = document.getElementById('popupClicks');
    const popupTime = document.getElementById('popupTime');
    const popupResultImage = document.getElementById('popupResultImage');
    const popupAnimals = document.getElementById('popupAnimals');

    // Determine the Result Based on Time and Score
    let resultImageSrc = '';
    let resultTitle = '';
    let animalImages = [];

    // Define Your Game Logic Here
    // Example Logic: You can customize this based on your game's rules
    if (selectedTime === 5) {
        if (score <= 20) {
            resultImageSrc = './assets/images/turtle.png';
            resultTitle = `Aww, Sweetheart, Try Again!<br><span class="small-text">Looks like you need a little more practice to catch my attention!</span>`;
            popup.className = 'popup awesome'; // Apply awesome class
            animalImages = ['rabbit', 'octopus', 'cheetah'];
        } else if (score >= 21 && score <= 35) {
            resultImageSrc = './assets/images/octopus.png';
            resultTitle = `Getting Warmer, Cutie!<br><span class="small-text">You're heating things up! Just a bit more effort and you might have my heart!</span>`;
            popup.className = 'popup warm'; // Apply warm class
            animalImages = ['cheetah', 'rabbit'];
        } else if (score >= 36 && score <= 50) {
            resultImageSrc = './assets/images/rabbit.png';
            resultTitle = `Ravishingly Quick, Aren’t We?<br><span class="small-text">You’re a force to be reckoned with! What’s your secret?</span>`;
            popup.className = 'popup quick'; // Apply quick class
            animalImages = ['cheetah'];
        } else if (score > 51) {
            resultImageSrc = './assets/images/cheetah.png';
            resultTitle = `Ultimate Temptation, Wow!<br><span class="small-text">You've reached peak seduction! No one can keep up with you now, can they?</span>`;
            popup.className = 'popup ultimate'; // Apply ultimate class
            animalImages = ['turtle', 'octopus', 'rabbit'];
        }
    }
    

    if (selectedTime === 3) {
        if (score <= 12) {
            resultImageSrc = './assets/images/turtle.png';
            resultTitle = `Aww, Sweetheart, Try Again!<br><span class="small-text">Looks like you need a little more practice to catch my attention!</span>`;
            popup.className = 'popup awesome'; // Apply awesome class
            animalImages = ['rabbit', 'octopus', 'cheetah'];
        } else if (score >= 13 && score <= 21) {
            resultImageSrc = './assets/images/octopus.png';
            resultTitle = `Getting Warmer, Cutie!<br><span class="small-text">You're heating things up! Just a bit more effort and you might have my heart!</span>`;
            popup.className = 'popup warm'; // Apply warm class
            animalImages = ['cheetah', 'rabbit'];
        } else if (score >= 22 && score <= 30) {
            resultImageSrc = './assets/images/rabbit.png';
            resultTitle = `Ravishingly Quick, Aren’t We?<br><span class="small-text">You’re a force to be reckoned with! What’s your secret?</span>`;
            popup.className = 'popup quick'; // Apply quick class
            animalImages = ['cheetah'];
        } else if (score >30) {
            resultImageSrc = './assets/images/cheetah.png';
            resultTitle = `Ultimate Temptation, Wow!<br><span class="small-text">You've reached peak seduction! No one can keep up with you now, can they?</span>`;
            popup.className = 'popup ultimate'; // Apply ultimate class
            animalImages = ['turtle', 'octopus', 'rabbit'];
        }
    }

    if (selectedTime === 10) {
        if (score <= 40) {
            resultImageSrc = './assets/images/turtle.png';
            resultTitle = `Aww, Sweetheart, Try Again!<br><span class="small-text">Looks like you need a little more practice to catch my attention!</span>`;
            popup.className = 'popup awesome'; // Apply awesome class
            animalImages = ['rabbit', 'octopus', 'cheetah'];
        } else if (score >= 41 && score <= 70) {
            resultImageSrc = './assets/images/octopus.png';
            resultTitle = `Getting Warmer, Cutie!<br><span class="small-text">You're heating things up! Just a bit more effort and you might have my heart!</span>`;
            popup.className = 'popup warm'; // Apply warm class
            animalImages = ['cheetah', 'rabbit'];
        } else if (score >= 71 && score <= 100) {
            resultImageSrc = './assets/images/rabbit.png';
            resultTitle = `Ravishingly Quick, Aren’t We?<br><span class="small-text">You’re a force to be reckoned with! What’s your secret?</span>`;
            popup.className = 'popup quick'; // Apply quick class
            animalImages = ['cheetah'];
        } else if (score >100) {
            resultImageSrc = './assets/images/cheetah.png';
            resultTitle = `Ultimate Temptation, Wow!<br><span class="small-text">You've reached peak seduction! No one can keep up with you now, can they?</span>`;
            popup.className = 'popup ultimate'; // Apply ultimate class
            animalImages = ['turtle', 'octopus', 'rabbit'];
        }
    }

    if (selectedTime === 15) {
        if (score <= 60) {
            resultImageSrc = './assets/images/turtle.png';
            resultTitle = `Aww, Sweetheart, Try Again!<br><span class="small-text">Looks like you need a little more practice to catch my attention!</span>`;
            popup.className = 'popup awesome'; // Apply awesome class
            animalImages = ['rabbit', 'octopus', 'cheetah'];
        } else if (score >= 61 && score <= 105) {
            resultImageSrc = './assets/images/octopus.png';
            resultTitle = `Getting Warmer, Cutie!<br><span class="small-text">You're heating things up! Just a bit more effort and you might have my heart!</span>`;
            popup.className = 'popup warm'; // Apply warm class
            animalImages = ['cheetah', 'rabbit'];
        } else if (score >= 106 && score <= 150) {
            resultImageSrc = './assets/images/rabbit.png';
            resultTitle = `Ravishingly Quick, Aren’t We?<br><span class="small-text">You’re a force to be reckoned with! What’s your secret?</span>`;
            popup.className = 'popup quick'; // Apply quick class
            animalImages = ['cheetah'];
        } else if (score >150) {
            resultImageSrc = './assets/images/cheetah.png';
            resultTitle = `Ultimate Temptation, Wow!<br><span class="small-text">You've reached peak seduction! No one can keep up with you now, can they?</span>`;
            popup.className = 'popup ultimate'; // Apply ultimate class
            animalImages = ['turtle', 'octopus', 'rabbit'];
        }
    }
    
    // Add more conditions based on different selectedTime values if needed

    // Update Popup Content with Results
    popupTitle.innerHTML = resultTitle;  // Use innerHTML instead of textContent
    popupResultImage.src = resultImageSrc;
    popupCPS.textContent = `${clickSpeed} CPS`;
    popupClicks.textContent = `${score} Clicks`;
    popupTime.textContent = `${selectedTime} Seconds`;

    // Show Only Relevant Animal Images
    document.querySelectorAll('.popup-animal').forEach(img => {
        if (animalImages.includes(img.id.replace('Image', ''))) {
            img.style.display = 'inline-block';
        } else {
            img.style.display = 'none';
        }
    });

    // Display the Popup
    popup.style.display = 'block';

    // Add Event Listeners for Sharing Buttons
    const shareWhatsAppBtn = document.getElementById('shareWhatsApp');
    const shareInstagramBtn = document.getElementById('shareInstagram');

    shareWhatsAppBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
shareInstagramBtn.innerHTML = '<i class="fab fa-instagram"></i>';


    shareWhatsAppBtn.onclick = () => shareOnWhatsApp(score);
    shareInstagramBtn.onclick = () => shareOnInstagram(score);

    // Close Popup Functionality
    closePopup.onclick = () => {
        popup.style.display = 'none';
        startButton.disabled = false; // Enable start button again
    };

    // Optional: Close Popup When Clicking Outside the Popup Content
    window.onclick = (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
            startButton.disabled = false; // Enable start button again
        }
    };
}

// Function to Handle Flower Clicks
flowerImage.addEventListener('click', (event) => {
    if (gameStarted && timeLeft > 0) {
        score++;
        scoreValue.textContent = score;
        updateClickSpeed(); // Update click speed on each click

        // Play Click Sound
        clickSound.currentTime = 0; // Reset audio to start
        clickSound.play();

        // Add Vibration Effect
        flowerImage.classList.add('vibrate');
        setTimeout(() => {
            flowerImage.classList.remove('vibrate');
        }, 500); // Duration should match the CSS animation duration

        // Get the position of the image relative to the page
        const rect = flowerImage.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // X position relative to the image
        const offsetY = event.clientY - rect.top;  // Y position relative to the image

        // Trigger Water Droplets Animation at the relative position
        createDroplets(event.pageX, event.pageY); // Pass page click coordinates
    }
});

// Function to Create Water Droplets Animation
function createDroplets(clickX, clickY) {
    const numDroplets = 30; // Number of droplets in the burst
    const angleStep = (2 * Math.PI) / numDroplets; // Full circle divided into equal parts

    for (let i = 0; i < numDroplets; i++) {
        const droplet = document.createElement('div');
        droplet.classList.add('water-droplet');

        // Randomize size of droplets
        const size = Math.random() * 5 + 5; // Random size between 5px and 10px
        droplet.style.width = `${size}px`;
        droplet.style.height = `${size * 1.5}px`; // Slightly taller than wide to mimic droplets

        // Randomize burst distance and direction
        const angle = i * angleStep; // Create a circle explosion pattern
        const distance = Math.random() * 120 + 50; // Random distance between 50px and 170px
        const tx = Math.cos(angle) * distance + 'px';
        const ty = Math.sin(angle) * distance + 'px';

        // Set CSS variables for animation (translation coordinates)
        droplet.style.setProperty('--tx', tx);
        droplet.style.setProperty('--ty', ty);

        // Randomize animation duration for more realism
        const duration = Math.random() * 0.8 + 0.5; // Duration between 0.5s and 1.3s
        droplet.style.animationDuration = `${duration}s`;

        // Set initial position at the exact click coordinates
        droplet.style.position = 'absolute';
        droplet.style.left = `${clickX - size / 2}px`; // Center the droplet horizontally
        droplet.style.top = `${clickY - size / 2}px`;  // Center the droplet vertically

        // Append droplet to the container
        dropletContainer.appendChild(droplet);

        // Remove the droplet after the animation completes
        droplet.addEventListener('animationend', () => {
            dropletContainer.removeChild(droplet);
        });
    }
}




// Function to Share on WhatsApp
function shareOnWhatsApp(score) {
    const message = `I scored ${score} in the Flower Click Game! Can you beat me?`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Function to Share on Instagram
function shareOnInstagram(score) {
    // Note: Instagram doesn't support direct sharing via URL like WhatsApp.
    // This function redirects users to Instagram. To share content, you'd need to use Instagram's API or prompt the user to share manually.
    const message = `I scored ${score} in the Flower Click Game! Can you beat me?`;
    alert(`To share on Instagram, please copy the following message and post it manually:\n\n${message}`);
}

// Event Listener for Start Button
startButton.addEventListener('click', () => {
    startButton.disabled = true;  // Disable the start button during the game
    startGame();  // Start the game
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Optional: Add functionality to close the menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// Function to Scroll Back to Top Smoothly
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onload = function() {
    // Show the popup on page load
    document.getElementById('gameInstructionsPopup').style.display = 'flex';
  };
  
  // Close the popup when the 'OK' button is clicked
  document.getElementById('acceptButton1').onclick = function() {
    document.getElementById('gameInstructionsPopup').style.display = 'none';
  };
  
  // Close the popup when the 'X' (close button) is clicked
  document.getElementById('closePopup1').onclick = function() {
    document.getElementById('gameInstructionsPopup').style.display = 'none';
  };
  
  // Close the popup if the user clicks outside of the popup content
  window.onclick = function(event) {
    var popup1 = document.getElementById('gameInstructionsPopup');
    if (event.target === popup1) {
      popup1.style.display = 'none';
    }
  };

// Assuming you have an element to display the result, e.g., a div with id 'resultContainer'


// Set the innerHTML to resultTitle


  
  
