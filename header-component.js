class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        
        // Create a shadow DOM for your component
        this.attachShadow({ mode: 'open' });
        
        // Define the HTML content and styles for your component
        this.shadowRoot.innerHTML = `
            <style>
            /* Common styles for the header */
            .cta {
                position: relative;
            }
            
            .mobile-phone-number {
              position: fixed;
              width: 100%;
              top: 0;
              left: 0;
              background: red; /* Red background for visibility */
              z-index: 10;
              height: 1cm; /* Set height to 1 cm */
              display: flex;
              align-items: center; /* Center content vertically */
              justify-content: center; /* Center content horizontally */
              box-shadow: 0 0 15px 5px rgba(0,0,0,0.3); /* Gradient shadow */
              transition: box-shadow 0.5s ease-out; /* Transition for glow effect */
          }
          
          .mobile-phone-number a {
              text-decoration: none; /* Remove underline */
              color: white; /* Set text color */
              display: flex;
              align-items: center; /* Align icon with text */
              justify-content: center;
              width: 100%; /* Fill the entire width of the parent */
              height: 100%; /* Fill the entire height of the parent */
          }
            
            /* Adjustments for toggle-and-title to align properly */
            .toggle-and-title {
                display: flex;
                align-items: center;
                padding-top: 1cm; /* Adjusted based on the height of the mobile-phone-number */
            }
            
            .navbar-toggle {
                position: fixed;
                width: 10vw;
                left: 0;
                top: 1cm; /* Adjusted based on the height of the mobile-phone-number */
                z-index: 9;
            }
            
            h1 {
                margin-left: 10vw;
                padding: 0 10px;
            }
            
            </style>
            <header class="cta">
                <div class="mobile-phone-number">
                    <a href="tel:0470553519" aria-label="Call us at 0470 553 519">
                        <img src="/images/phone-icon.png" alt="Phone Icon">
                        <span class="phone-number-text">0470 553 519</span>
                    </a>
                </div>
                <div class="toggle-and-title">
                    <button class="navbar-toggle" aria-label="Toggle navigation">&#9776;</button>
                    <h1>Perth's Top Cash for Eco-Friendly Car Disposal!</h1>
                </div>
            </header>
        `;
        this.fetchHeader();
    }
  
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
