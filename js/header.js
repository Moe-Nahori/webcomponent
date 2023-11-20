$(document).ready(function() {
    // Toggle visibility of the navList when the .navbar-toggle button is clicked.
    $('.navbar-toggle').click(function(event) {
        console.log("navbar clicked");
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
        $(this).toggleClass('expanded'); // Toggle the expanded class
        event.stopPropagation(); // Prevent the document click event from firing
        event.preventDefault();  // Prevent default action
    }
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

    // Open the modal when .quote-form-toggle or .new-quote-form-toggle is clicked
    $('.quote-form-toggle, .new-quote-form-toggle').click(function() {
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

    // Ensure submenu links remain clickable
    $('.submenu a').on('click touchstart', function(event) {
        event.stopPropagation();
    });
});