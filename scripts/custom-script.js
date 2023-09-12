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
var slider = document.querySelector(".bank-card-slider-wapper .cards-wrapper .cards.block ul");
if (slider) {
  var tnsOptions = {
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
            768: {
              items: 1,
            }
          }
      }
      var tns = new TinySlider(slider, tnsOptions);
}

// function initializeSlider2() {
//     const slider = tns({
//       container: '.bank-card-slider-wapper .cards-wrapper .cards ul',
//       loop: false,
//       items: 2,
//       slideBy: 'page',
//       nav: false,
//       autoplay: false,
//       speed: 400,
//       autoplayButtonOutput: false,
//       controls: true,
//       mouseDrag: true,
//       lazyload: true,
//       responsive: { 
//         768: {
//           items: 1,
//         }
//       }
//     });
  
//     sliderInitialized = true; // Set to true to avoid reinitialization
  
//     const Nbutton = document.querySelector('button[data-controls="next"]');
//     Nbutton.textContent = " "; // Replace "New Text" with your desired text
  
//     const Pbutton = document.querySelector('button[data-controls="prev"]');
//     Pbutton.textContent = " "; // Replace "New Text" with your desired text
//   }
  
//   function onElementIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         initializeSlider2(); // Initialize the slider when the element is in view
//         observer.unobserve(entry.target); // Stop observing once it's initialized
//       }
//     });
//   }
  
//   // Specify the element you want to watch for visibility
//   const targetElement = document.querySelector('.bank-card-slider-wapper .cards-wrapper .cards');
  
//   const observerOptions = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px', // No margin
//     threshold: 0.5, // Trigger when at least 50% of the element is in view
//   };
  
//   const intersectionObserver = new IntersectionObserver(onElementIntersection, observerOptions);
  
//   document.addEventListener('DOMContentLoaded', function() {
//     intersectionObserver.observe(targetElement); // Start observing the target element
//   });
  

  
// You can add more code here to work with the button element if needed
// Function to initialize and move the carousel
// Function to initialize and move the carousel
function initializeAndMoveCarousel() {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const carouselItems = document.querySelectorAll('.carousel li');

  // Check if carouselItems exist before accessing them
  if (carouselItems.length === 0) {
    return; // Exit the function if no carousel items are found
  }

  const itemWidth = carouselItems[0].clientWidth;
  let currentIndex = 0;

  // Function to move the carousel to a specific index
  function moveCarousel(index) {
    if (index < 0) {
      currentIndex = 0;
    } else if (index >= carouselItems.length - 1) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex = index;
    }

    const translateX = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
  }

  // Event listener for the previous button
  prevButton.addEventListener('click', () => {
    moveCarousel(currentIndex - 1);
  });

  // Event listener for the next button
  nextButton.addEventListener('click', () => {
    moveCarousel(currentIndex + 1);
  });

  // Initial positioning
  moveCarousel(currentIndex);
}

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Initialize and move the carousel when it's in view
      initializeAndMoveCarousel();
      observer.unobserve(entry.target); // Stop observing once it's initialized
    }
  });
}

// Specify the target element to observe
const targetElement = document.querySelector('.bank-card-slider-wapper .cards-wrapper .cards');

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when at least 50% of the element is in view
});

// Start observing the target element
observer.observe(targetElement);



// Wrap your carousel initialization and movement code in a setTimeout
// Function to initialize and move the carousel
