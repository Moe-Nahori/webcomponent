$(document).ready(function() {
    // Toggle visibility of the navList when the .navbar-toggle button is clicked.
    $('.navbar-toggle').click(function(event) {
        $('.navbar').slideToggle();
        event.stopPropagation(); // Prevent the document click event from firing
    });

    // Hide the navbar when clicked outside
    $(document).click(function() {
        if ($(window).width() <= 768) {
            $('.navbar').slideUp();
            $('.submenu').slideUp();
        }
    });

    // Toggle visibility of submenu on dropdown click (for smaller screens)
    $('.dropdown').off('click touchstart').on('click touchstart', function(event) {
        if ($(window).width() <= 768) {
            // Prevent the function from being called twice on touch devices
            if (event.type == "touchstart") {
                $(this).off('click');
            }
            $(this).find('.submenu').slideToggle();
            event.stopPropagation(); // Prevent the document click event from firing
            event.preventDefault();  // Prevent default action (useful if your .dropdown is an anchor link)
        }
    });
      // Ensure submenu links remain clickable
      $('.submenu a').on('click touchstart', function(event) {
          event.stopPropagation();
      });

    $('#quote-form').on('submit', function(event) {
        var unfilled = false;

        // Check each required field to see if they have values
        $(this).find(':input[required]').each(function() {
            if (!$(this).val()) {
                unfilled = true;
            }
        });

        if (unfilled) {
            alert('Please fill in all the required fields.');
            event.preventDefault(); // Stop form from submitting
        }
    });

    // Open the modal when .quote-form-toggle is clicked
    $('.quote-form-toggle').click(function() {
        $('#quoteModal').fadeIn();
    });

    // Close the modal when .close-btn is clicked or when clicked outside
    $('.close-btn, .modal').click(function(event) {
        if (event.target == this) {
            $('#quoteModal').fadeOut();
        }
    });

    // Stop propagation of click event to prevent modal from closing when clicking inside
    $('.quote-form-section').click(function(event) {
        event.stopPropagation();
    });

    // Toggle visibility of submenu on hover over Services
    $('.dropdown').hover(function() {
        $(this).find('.submenu').stop().slideDown();
    }, function() {
        $(this).find('.submenu').stop().slideUp();
    });
    // Slideshow logic
    let currentSlideshow = 'mobile-slideshow';  // Start with mobile as default
    const slideIndices = {};
    const slideshowIntervals = {};

    const slideDisplayTime = 3000;  // Change this value to whatever you desire
    const fadeInTime = 1000; // 1 second fade-in
    const fadeOutTime = 1000; // 1 second fade-out
    const totalInterval = slideDisplayTime + fadeInTime + fadeOutTime;

    function showNextSlide() {
        const $slides = $(`.slide`);  // All slides have the same class
        const currentIndex = slideIndices[currentSlideshow] || 0;

        $slides.eq(currentIndex).fadeOut(fadeOutTime, function() {
            const nextIndex = (currentIndex + 1) % $slides.length;
            $slides.eq(nextIndex).fadeIn(fadeInTime);
            slideIndices[currentSlideshow] = nextIndex;
        });
    }

    function pauseSlideshow() {
        if (slideshowIntervals[currentSlideshow]) {
            clearInterval(slideshowIntervals[currentSlideshow]);
            slideshowIntervals[currentSlideshow] = null;
        }
    }

    function resumeSlideshow() {
        if (!slideshowIntervals[currentSlideshow]) {
            slideshowIntervals[currentSlideshow] = setInterval(showNextSlide, totalInterval);
        }
    }

    function setSlideshowType() {
        const width = $(window).width();
        if (width <= 370) {
            currentSlideshow = 'mobile-slideshow';
        } else if (width <= 768) {
            currentSlideshow = 'tablet-slideshow';
        } else {
            currentSlideshow = 'desktop-slideshow';
        }
    }

    // Set slideshow type initially
    setSlideshowType();
    // Update slideshow type on window resize
    $(window).resize(setSlideshowType);

    // Start the slideshow:
    resumeSlideshow();

    // Pause or resume slideshow based on visibility
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseSlideshow();
        } else {
            resumeSlideshow();
        }
    });
      // Open the quote form modal when #textLink is clicked
      $('#textLink').click(function(e) {
          e.preventDefault(); // Prevent the default action
          $('#quoteModal').fadeIn(); // Replace 'quoteModal' with the actual ID of your quote modal
      });

      // Open the quote form modal when #quoteFormButton is clicked
      $('#quoteFormButton').click(function() {
          $('#quoteModal').fadeIn(); // Replace 'quoteModal' with the actual ID of your quote modal
      });
   
});