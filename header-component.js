
  class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        
        // Create a shadow DOM for your component
        this.attachShadow({ mode: 'open' });
         
        // Define the HTML content and styles for your component
        this.shadowRoot.innerHTML = `
            <style>
            /* Common styles for the header */
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; /* Optional: ensures padding/border are included in width/height */
        }
            .cta {
                position: relative;
            }
            .logo{
                display:none;
            }
            .mobile-phone-number {
              position: fixed;
              width: 100%;
              top: 0;
              left: 0;
              z-index:10;
              background: red; /* This will be hidden by the border animation */
              height: 1cm; /* Set height to 1 cm */
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 0 15px 5px rgba(0,0,0,0.3)
              position: relative;
              overflow:hidden;
          }
          
          /* Create the animated border using a pseudo-element */
          .mobile-phone-number::before {
              content: '';
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 140%;
              box-sizing: border-box;
              z-index: 1;
              background-image: radial-gradient(circle, #ffff80 0%, #ffff00 50%, rgba(255, 255, 0, 0.5) 100%);
              background-origin: border-box;
              background-clip: padding-box; /* Clips the background to the padding area */
              animation: rotate 10s linear infinite;
          }

          /* Define the rotation animation for the gradient */
          @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(90deg);
            }
            50% {
                transform: rotate(180deg);
            }
            75% {
                transform: rotate(270deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
          .mobile-phone-number::after {
            content: '';
            position: absolute;
            inset: 5px;
            background-color: red; /* This can be adjusted as needed */
            z-index: 2; /* Adjust if necessary for proper layering */
        }
          
          .mobile-phone-number img {
            width: 30px; /* Adjust this value as needed */
            height: auto; /* Maintains aspect ratio */
            max-height: 0.9cm; /* Ensures the height does not exceed 1cm */
            animation: pulse 3s infinite ease-in-out;
            z-index:10;

        }
          .mobile-phone-number a {
              text-decoration: none; /* Remove underline */
              color: white; /* Set text color */
              font-size: 1.5em; 
              display: flex;
              align-items: center; /* Align icon with text */
              justify-content: center;
              width: 100%; /* Fill the entire width of the parent */
              height: 100%; /* Fill the entire height of the parent */
              z-index:10;
              white-space: nowrap;
          }
      
           @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
         }
    
    
        
            /* Adjustments for toggle-and-title to align properly */
            .toggle-and-title {
                display: flex;
                align-items: center;
                padding-top: 1cm;
            }
            
            .navbar-toggle {
                position: fixed;
                flex: 0 0 20%;
                left: 0;
                top: 1cm; /* Adjusted based on the height of the mobile-phone-number */
                z-index: 9;
                cursor: pointer; /* Changes the cursor to a pointer */
                background: transparent; /* Removes any default background */
                border: none; /* Removes any default border */
                outline: none; /* Removes outline on focus for accessibility */
                font-size: 24px; /* Adjust the size of the hamburger icon */
                color: #333; 
            }
            navbar-toggle:hover {
                color: #666; /* Darken the icon on hover */
            }
        
            /* Focus and Active Effect */
            .navbar-toggle:focus, .navbar-toggle:active {
                color: #999; /* Change the color when active or focused */
            }
            h1{
                flex: 0 0 80%;
                position: relative;
                margin-left: auto;
                padding-right: 20px;

            }
            @media (min-width: 768px) {
                .cta {
                    position: fixed;
                    width:100%;
                    max-width:100vw;    
                    box-sizing: border-box;
                    background-color: white;
                    top: 0;
                    left:0;
                    display: flex; /* Enable flexbox */
                    align-items: center; /* Vertically centers the children */
                    justify-content: center; /* Horizontally centers the children */
                }
            
                .logo {
                    display: block;
                    flex: 0 0 20%; /* Allocate 20% width, don't grow or shrink */
                    max-width: 100px; /* Limit maximum width */
                    height: 3cm;
                   }
                  .toggle-and-title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: unset;
                    }
                h1 {

                        flex: 0 0 80%;
                        margin-left: unset;
                        padding-right:unset;
                        text-align: center;
        
                   }


    
                .mobile-phone-number {
                    flex: 0 0 20%; /* Allocate 20% width for large screens */
                    position: static; /* Override fixed positioning */
                    width: auto; /* Reset width */
                    top: auto; /* Reset top positioning */
                    left: auto; /* Reset left positioning */
                    height: 3cm; /* Reset height */
                    box-shadow: none; /* Reset box-shadow */
                    order:3;
                    position:relative;
                    /* Apply any additional styles needed for large screens */
                }
                .mobile-phone-number::before {
                    animation: rotate 5s linear infinite;
                }
                .mobile-phone-number a {
                    font-size: calc(1vw + 1vh + 1.3vmin); 
                   }
            
                .navbar-toggle {
                    display: none; /* Hide the hamburger menu on larger screens */
                }
            }
            
            </style>
            <header class="cta">
            <img src="/images/icar_wrecker_logo_new_1.webp" alt="Logo" class="logo">
                <div class="mobile-phone-number">
                    <a href="tel:0470553519" aria-label="Call us at 0470 553 519">
                        <img src="/images/phone-icon.svg" alt="Phone Icon">
                        <span class="phone-number-text">0470 553 519</span>
                    </a>
                </div>
                <div class="toggle-and-title">
                    <button class="navbar-toggle" aria-label="Toggle navigation">&#9776;</button>
                    <h1>Welcome to our site</h1>
                </div>
            </header>
        `;
        this.fetchHeader();
    
        
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Toggle visibility of the navList when the .navbar-toggle button is clicked.
        document.querySelectorAll('.navbar-toggle').forEach(function(toggle) {
            toggle.addEventListener('click', function(event) {
                console.log("navbar clicked");
                var navbar = document.querySelector('.navbar');
                if (navbar.style.display === 'none' || navbar.style.display === '') {
                    navbar.style.display = 'block';
                } else {
                    navbar.style.display = 'none';
                }
                event.stopPropagation(); // Prevent the document click event from firing
            });
        });
    
        // Hide the navbar when clicked outside
        document.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                var navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.style.display = 'none';
                }
                document.querySelectorAll('.submenu').forEach(function(submenu) {
                    submenu.style.display = 'none';
                });
            }
        });
    
        // Toggle visibility of submenu on dropdown click (for smaller screens)
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.addEventListener('click', function(event) {
                if (window.innerWidth <= 768) {
                    var submenu = this.querySelector('.submenu');
                    if (submenu.style.display === 'none' || submenu.style.display === '') {
                        submenu.style.display = 'block';
                    } else {
                        submenu.style.display = 'none';
                    }
                    this.classList.toggle('expanded'); // Toggle the expanded class
                    event.stopPropagation(); // Prevent the document click event from firing
                    event.preventDefault();  // Prevent default action
                }
            });
        });
    });
   
   
    
    fetchHeader() {
       // console.log('fetchHeader method called');
        let currentPage = window.location.pathname;
      
        // Adjust for the root path if necessary
        if (currentPage === '/') {
          currentPage = '/index.html'; // Change this if your homepage has a different path
        }
      
        const encodedPage = encodeURIComponent(currentPage);
      
        // Log the URL being sent for debugging purposes
        console.log('Fetching header for URL:', '/customh1.php?page=' + encodedPage);
      
        fetch('/customh1.php?page=' + encodedPage)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then(headerText => {
            this.shadowRoot.querySelector('h1').innerText = headerText;
          })
          .catch(error => {
            console.error('Error fetching header:', error);
            this.shadowRoot.querySelector('h1').innerText = 'Header could not be loaded';
          });
      }
      
  }
  customElements.define('header-component', HeaderComponent);
