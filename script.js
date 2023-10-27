const slider = document.getElementById("slider");
const testimonialsContainer = document.getElementById("testimonial-container");
const testimonials = document.querySelectorAll("testimonial");
const interval = 2000; // Time in milliseconds (5 seconds);
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navigation");
const closeBtn = document.getElementById("close-btn")
const navBtn = document.querySelectorAll('nav-btn');

let currentIndex = 0;

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % (testimonials.length - 2);
    testimonialsContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}

function startSlider() {
    setInterval(nextTestimonial, interval);
}

// Start the slider
startSlider();

hamburger.addEventListener("click", () => {
    nav.style.display = 'flex';
    hamburger.style.display = 'none';
    closeBtn.style.display = 'inline-flex';
})

closeBtn.addEventListener("click", () => {
    nav.style.display = 'none';
    hamburger.style.display = 'inline-flex';
    closeBtn.style.display = 'none';
})


//nav btn
navBtn.addEventListener("click", () => {
    forEach(navBtn => {
        
    });
})