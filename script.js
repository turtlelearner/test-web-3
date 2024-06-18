let currentSlides = { SHS: 0, JHS: 0 };
let slideIntervals = { SHS: null, JHS: null };

function showSlide(index, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    if (index >= slides.length) {
        currentSlides[sliderId] = 0;
    } else if (index < 0) {
        currentSlides[sliderId] = slides.length - 1;
    } else {
        currentSlides[sliderId] = index;
    }
    const offset = -currentSlides[sliderId] * 100;
    document.querySelector(`#${sliderId} .slides`).style.transform = `translateX(${offset}%)`;
}

function moveSlide(step, sliderId) {
    showSlide(currentSlides[sliderId] + step, sliderId);
}

function startSlideShow(sliderId) {
    slideIntervals[sliderId] = setInterval(() => {
        moveSlide(1, sliderId);
    }, 3000);
}

function stopSlideShow(sliderId) {
    clearInterval(slideIntervals[sliderId]);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let sliderId in currentSlides) {
        showSlide(currentSlides[sliderId], sliderId);
        startSlideShow(sliderId);

        document.querySelector(`#${sliderId} .slider`).addEventListener('mouseenter', () => stopSlideShow(sliderId));
        document.querySelector(`#${sliderId} .slider`).addEventListener('mouseleave', () => startSlideShow(sliderId));
    }
});

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
