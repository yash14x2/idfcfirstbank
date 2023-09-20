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



function siemafun() {
    const siema = new Siema({
      selector: '.get-more-from-bank-wapper .cards-wrapper .block ul',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: () => {},
      onChange: (index) => {
        // This function is called when the slide changes
        moveCarousel(index);
      },
    });
    
    // Function to move your carousel
    function moveCarousel(index) {
   
      const itemWidth = carousel.clientWidth / itemsPerPage;
      const translateX = -index * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  }
  




function navActiveTab(){
  var active = document.querySelector('.nav-sections ul li:first-child');
  active.classList.add('active-tab');
}
// Delay the initialization of the slider for 2 seconds after the page loads
document.addEventListener('DOMContentLoaded', function() {
 setTimeout(function() {
  initializeSlider();
  siemafun();
}, 2000);// 2000 milliseconds (2 seconds)
});
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
// Wrap your carousel initialization code in a function
// Wrap your carousel initialization code in a function
// function initializeCarousel() {
//   const carouselWrapper = document.querySelector('.bank-card-slider-wapper .cards-wrapper');
//   const carousel = carouselWrapper.querySelector('.cards ul'); // Corrected selector here
//   const prevButton = document.createElement("button");
//   const nextButton = document.createElement("button");

//   prevButton.classList.add("prev-button");
//   nextButton.classList.add("next-button");

//   prevButton.textContent = "Previous";
//   nextButton.textContent = "Next";

//   carouselWrapper.appendChild(prevButton);
//   carouselWrapper.appendChild(nextButton);

//   const itemsPerPage = 1; // Adjust the number of items per page as needed
//   let currentIndex = 0;

//   // Function to move the carousel to a specific index
//   function moveCarousel(index) {
//     currentIndex = index;
//     const itemWidth = carousel.clientWidth / itemsPerPage;
//     const translateX = -currentIndex * itemWidth;
//     carousel.style.transform = `translateX(${translateX}px)`;
//   }

//   // Event listener for the previous button
//   prevButton.addEventListener('click', () => {
//     currentIndex = Math.max(currentIndex - 1, 0); // Ensure currentIndex doesn't go below 0
//     moveCarousel(currentIndex);
//   });

//   // Event listener for the next button
//   nextButton.addEventListener('click', () => {
//     currentIndex = Math.min(currentIndex + 1, carousel.children.length - itemsPerPage); // Ensure currentIndex doesn't exceed the number of items
//     moveCarousel(currentIndex);
//   });

//   // Initial positioning
//   moveCarousel(currentIndex);
// }

// Delay the initialization of the carousel for 3 seconds after the page loads
// document.addEventListener('DOMContentLoaded', function() {
//   setTimeout(initializeCarousel, 3000); // 3000 milliseconds (3 seconds)
// });




