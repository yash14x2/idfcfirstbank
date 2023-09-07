let sliderInitialized = false; // To track whether the slider has been initialized

// Function to initialize the slider
function initializeSlider() {
    var liElem = document.querySelector('.secondary-nav-section-wrapper .default-content-wrapper ul li');
    liElem.forEach(function(item) {
        item.classList.add('up-arrow'); 
    });
 

    const slider = tns({
      container: '.hero-section-wrapper',
      loop: false,
      items: 1,
      slideBy: 'page',
      nav: false,
      autoplay: false,
      speed: 400,
      autoplayButtonOutput: false,
      controls: true,
      mouseDrag: true,
      lazyload: true,
    });

    sliderInitialized = true; // Set to true to avoid reinitialization
  }


// Function to check if the user has scrolled to a certain point
function checkScroll() {
  const triggerPoint = 10; // Adjust this value as needed

  if (window.scrollY > triggerPoint) {
    initializeSlider();
    // Remove the scroll event listener to prevent reinitialization
    window.removeEventListener('scroll', checkScroll);
  }
}

// Add a scroll event listener to trigger the initialization when the user scrolls
window.addEventListener('scroll', checkScroll);

// document.addEventListener("DOMContentLoaded", function () {
    // var liElem = document.querySelector('.secondary-nav-section-wrapper .default-content-wrapper ul li');
    // liElem.forEach(function(item) {
    //     item.classList.add('up-arrow'); 
    // });
// });