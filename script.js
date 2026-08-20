// =========================
// CAMPUS OFFICIALS JAVASCRIPT
// =========================

// Display a message when the webpage is loaded

document.addEventListener("DOMContentLoaded", function () {

    console.log("Campus Officials webpage loaded successfully.");

});


// =========================
// IMAGE ERROR HANDLING
// =========================

// If an image cannot be found,
// display a simple placeholder.

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        this.src = "https://via.placeholder.com/170?text=No+Image";

    });

});