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

// Select the button element with the data-controls attribute set to "next"
const Nbutton = document.querySelector('button[data-controls="next"]');

// Change the text inside the button
Nbutton.textContent = " "; // Replace "New Text" with your desired text

const Pbutton = document.querySelector('button[data-controls="prev"]');

// Change the text inside the button
Pbutton.textContent = " "; // Replace "New Text" with your desired text

}

// Delay the initialization of the slider for 2 seconds (adjust the time as needed)
setTimeout(initializeSlider, 1000); // 2000 milliseconds (2 seconds)

// Select the button element with the data-controls attribute set to "next"

// You can add more code here to work with the button element if needed
