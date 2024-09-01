document.addEventListener('DOMContentLoaded', function () {

  // Initialize Events Slider
  const eventsSwiper = new Swiper('.swiper-container-events', {
      slidesPerView: 3, // Number of slides to show in view
      spaceBetween: 30, 
      loop: true, 
      pagination: {
          el: '.swiper-pagination', // Pagination element
          clickable: true, 
      },
      breakpoints: {
          // Responsive settings based on screen width
          640: {
              slidesPerView: 1, 
          },
          768: {
              slidesPerView: 2, 
          },
          1024: {
              slidesPerView: 3, 
          },
      },
  });

  // Initialize Image Slider
  const imageSwiper = new Swiper('.swiper-container-image', {
      loop: true, // Enable infinite loop mode
      pagination: {
          el: '.swiper-pagination', // Pagination element
          clickable: true, 
      },
      navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev', 
      },
  });

  // Initialize Popular Courses Slider
  var popularCoursesSwiper = new Swiper('.popular-courses-slider', {
      slidesPerView: 1, 
      loop: true, // Enable infinite loop mode
      pagination: {
          el: '.swiper-pagination', // Pagination element
          clickable: true, // Allow clicking on pagination bullets
      },
      navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev', 
      },
  });

  // Initialize Testimonial Slider
  const swiper = new Swiper('.swiper-container-testomonial', {
      loop: true, // Enable infinite loop mode
      pagination: {
          el: '.swiper-pagination', // Pagination element
          clickable: true, // Allow clicking on pagination bullets
      },
      // Add event listener for slide change
      on: {
          slideChangeTransitionEnd: function () {
              // Get all slides
              document.querySelectorAll('.swiper-slide').forEach((slide) => {
                  // Reset all testimonials' styles
                  slide.querySelectorAll('.testimonial').forEach((testimonial) => {
                      testimonial.classList.remove('bg-blue-500', 'text-white');
                      testimonial.classList.add('bg-white', 'text-gray-600');
                  });

                  // Apply styles to the middle testimonial
                  const testimonials = slide.querySelectorAll('.testimonial');
                  if (testimonials.length > 1) {
                      const middleIndex = Math.floor(testimonials.length / 2); // Get middle testimonial index
                      const middleTestimonial = testimonials[middleIndex];
                      middleTestimonial.classList.remove('bg-white', 'text-gray-600');
                      middleTestimonial.classList.add('bg-blue-500', 'text-white');
                  }
              });
          },
      },
  });

  // Get the button element
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  });

});