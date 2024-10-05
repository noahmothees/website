// Get the modal (popup)
var popup = document.getElementById("popup");

// Get the button that opens the modal
var dareButton = document.getElementById("dareButton");

// Get the link that opens the modal
var dareLink = document.getElementById("darelink");

// Get the <span> element that closes the modal
var closeButton = document.querySelector(".close-button");

// Function to open the popup
function openPopup() {
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none";
}

// When the user clicks the button, open the popup
dareButton.onclick = function() {
    openPopup();
}

// When the user clicks the "Dare" link, also open the popup
dareLink.onclick = function(event) {
    event.preventDefault();  // Prevent default link behavior
    openPopup();
}

// When the user clicks on <span> (x), close the popup
closeButton.onclick = function() {
    closePopup();
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}

function openPage1() {
    window.location.href = 'page1.html'; // This will navigate to page1.html
}

