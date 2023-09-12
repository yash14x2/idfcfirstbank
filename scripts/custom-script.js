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
    responsive: { 
      768: {
          items: 1,
      }
  }
  });

  const slider2 = tns({
    container: '.bank-card-slider-wapper .cards-wrapper .cards ul',
    loop: false,
    items: 3,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    speed: 400,
    autoplayButtonOutput: false,
    controls: true,
    mouseDrag: true,
    lazyload: true,
    responsive: { 
      // 768: {
      //     items: 1,
      // }
  }
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
function navActiveTab(){
  var active = document.querySelector('.nav-sections ul li:first-child');
  active.classList.add('active-tab');
}
// Delay the initialization of the slider for 2 seconds after the page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(
    initializeSlider,
     2000); // 2000 milliseconds (2 seconds)
});

// You can add more code here to work with the button element if needed

















