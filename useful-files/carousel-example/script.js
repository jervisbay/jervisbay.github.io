// Define buttons
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var carousel = document.querySelector(".carouselbox");

// Define image array to contain the different pictures that will cycle through the carousel
var imageArray = ["https://live.staticflickr.com/7508/16123008052_e4429b9a67_b.jpg", "https://live.staticflickr.com/8622/16121823991_529e333985_b.jpg", "https://live.staticflickr.com/7565/15936436970_ea1665d36e_b.jpg"]

// Define variable to store URL of chosen image
var imageURL;

// Define variable to be initial counter - basically the index number of the array
var arrayLength = imageArray.length;
console.log(arrayLength);
var imageCounter = -1;

// Define function for cycling to next image
function nextImage(event) {
    event.stopPropagation();
    if (imageCounter + 1 >= arrayLength) {
        imageCounter = 0;
        carousel.style.backgroundImage = "url(" + imageArray[imageCounter] + ")"; // Changes background image to next image
        imageURL = imageArray[imageCounter];
        console.log(imageURL);
        console.log("Image Counter: " + imageCounter);
    } else {
        imageCounter++;
        carousel.style.backgroundImage = "url(" + imageArray[imageCounter] + ")"; // Changes background image to next image
        imageURL = imageArray[imageCounter];
        console.log(imageURL);
        console.log("Image Counter: " + imageCounter);
    }
}

// Define function for cycling to previous image
function previousImage(event) {
    event.stopPropagation();
    if (imageCounter < 1) {
        imageCounter = arrayLength - 1;
        carousel.style.backgroundImage = "url(" + imageArray[imageCounter] + ")"; // Changes background image to next image
        imageURL = imageArray[imageCounter];
        console.log(imageURL);
        console.log("Image Counter: " + imageCounter);
    } else {
        imageCounter--;
        carousel.style.backgroundImage = "url(" + imageArray[imageCounter] + ")"; // Changes background image to next image
        imageURL = imageArray[imageCounter];
        console.log(imageURL);
        console.log("Image Counter: " + imageCounter);
    }
}

// Call function on next or previous button click / event listener
next.addEventListener("click", nextImage);
prev.addEventListener("click", previousImage);

// Call function on image click
carouselClick.addEventListener("click", function() {
    window.location.href = imageArray[imageCounter];
});