/*///// Lightbox /////*/

// Open Lightbox
function openModal(){
    document.getElementById("myModal").style.display = "block";
}

// Close Lightbox
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Returns array, can be looped through
    var dots = document.getElementsByClassName("demo");  // Returns array, can be looped through
    var captionText = document.getElementById("caption");

    // Ensures slideIndex always an available slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // Loops through and hides slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Loops through Dots removing 'active class' lowering opacity.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }

    //Reveals current slide
    slides[slideIndex-1].style.display = "block";
    //Sets 'active' class to current dot, increasing opacity to 1
    dots[slideIndex-1].className += " active";
    //Places current slides 'alt' as caption
    captionText.innerHTML = dots[slideIndex-1].alt;

} 

/*/// Navbar Color Change ///*/

function textDark() {
    var text= document.getElementsByClassName("right")

    for (i = 0; i < text.length; i++) {
        text[i].style.color = text[i].style.color = "black";
    }
}

function textLight() {
    var text= document.getElementsByClassName("right")

    for (i = 0; i < text.length; i++) {
        text[i].style.color = text[i].style.color = "white";
    }
}