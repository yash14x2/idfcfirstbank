let sliderInitialized = false; // To track whether the slider has been initialized

// Function to initialize the slider
function initializeSlider() {
  if (!sliderInitialized) {
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
        },
      },
    });

    sliderInitialized = true; // Set to true to avoid reinitialization

    // Select the button element with the data-controls attribute set to "next"
    const Nbutton = document.querySelector('button[data-controls="next"]');

    // Change the text inside the button
    Nbutton.textContent = " "; // Replace "New Text" with your desired text

    const Pbutton = document.querySelector('button[data-controls="prev"]');

    // Change the text inside the button
    Pbutton.textContent = " "; // Replace "New Text" with your desired text

    // Show the slider container once it's initialized
    document.querySelector('.hero-section-wrapper').style.opacity = '1';
    document.querySelector('.hero-section-wrapper').style.position = 'relative';
    document.querySelector('.hero-section-wrapper').style.left = '0';
  }
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

  // Select the button element with the data-controls attribute set to "next"
  const Nbutton = document.querySelectorAll('button[data-controls="next"]');
  Nbutton.forEach(function(items){
    items.textContent = ""

  })

  // Change the text inside the button
  

  const Pbutton = document.querySelectorAll('button[data-controls="prev"]');
  Pbutton.forEach(function(items){
    items.textContent = ""

  })

  // Change the text inside the button
  Pbutton.textContent = " "; // Replace "New Text" with your desired text



    
  }
  






function navActiveTab(){
  var active = document.querySelector('.nav-sections ul li:first-child');
  active.classList.add('active-tab');
}
// Delay the initialization of the slider for 2 seconds after the page loads
document.addEventListener('DOMContentLoaded', function() {
 setTimeout(function() {
  initializeSlider();
 
}, 2000);



 setTimeout(function() {
   siemafun();
   siemafun2();
 
}, 3000);
  
  // 2000 milliseconds (2 seconds)
});
