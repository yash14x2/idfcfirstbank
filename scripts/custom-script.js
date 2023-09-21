
let sliderInitialized = false;
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

  sliderInitialized = true; // Set to true to avoid reinitialization
}

function siemafun() {
  var slider = tns({
    loop: false,
    container: '.get-more-from-bank-wapper .cards-wrapper .block ul',
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
}

function siemafun2() {
  var slider2 = tns({
    loop: false,
    container: '.bank-card-slider-wapper .cards-wrapper .block ul',
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
}

// Delay the initialization of the slider for 2 seconds after the page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    initializeSlider();
  }, 2000);

  setTimeout(function() {
    siemafun();
    siemafun2();
  }, 4000);
});
