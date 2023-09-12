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
      var tnsSlider = new TinySlider(slider, tnsOptions);
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
const prev = document.createElement("button");
prev.classList.add("prev-button");
prev.textContent = "Previous"; // Add text to the button

const next = document.createElement("button");
next.classList.add("next-button");
next.textContent = "Next"; // Add text to the button

// Append the buttons to the document
document.body.appendChild(prev);
document.body.appendChild(next);

// Select carousel items
const carouselItems = document.querySelectorAll('.cards-wrapper li'); // Get carousel items

// Rest of your code for carousel functionality
const carousel = document.querySelector('.cards ul');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

// Function to move the carousel to a specific index
function moveCarousel(index) {
  const itemWidth = carouselItems[0].offsetWidth; // Get the width of each <li>
  const translateX = -index * itemWidth;
  carousel.style.transform = `translateX(${translateX}px)`;
}

// Event listener for the previous button
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0); // Ensure currentIndex doesn't go below 0
  moveCarousel(currentIndex);
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1); // Ensure currentIndex doesn't exceed the number of items
  moveCarousel(currentIndex);
});

// Initial positioning
moveCarousel(currentIndex);
