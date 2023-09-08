let sliderInitialized = false; // To track whether the slider has been initialized

// Function to initialize the slider
function initializeSlider() {
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

// Call the initializeSlider() function immediately when the page loads
initializeSlider();

// Select the button element with the data-controls attribute set to "next"

// You can add more code here to work with the button element if needed
