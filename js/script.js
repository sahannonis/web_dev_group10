
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-deal');
    const nextButton = document.getElementById('next-deal');
    const slider = document.querySelector('.deals-slider');
    const slideWidth = document.querySelector('.deal').offsetWidth; // Width of each slide item
    const slidesPerPage = 5; // Number of slides visible at once
    let slideIndex = 0; // Current slide index

    // Adjust slider width based on number of slides
    const totalSlides = document.querySelectorAll('.deal').length;
    const totalSlidesWidth = totalSlides * slideWidth;
    slider.style.width = `${totalSlidesWidth}px`;

    // Event listeners for navigation buttons
    nextButton.addEventListener('click', () => {
        slideIndex = Math.min(slideIndex + slidesPerPage, totalSlides - slidesPerPage);
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });

    prevButton.addEventListener('click', () => {
        slideIndex = Math.max(slideIndex - slidesPerPage, 0);
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
});
