const slider = document.getElementById("slider");
const testimonialsContainer = document.getElementById("testimonial-container");
const testimonials = document.querySelectorAll("testimonial");
const interval = 2000; // Time in milliseconds (5 seconds)

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
