 <!-- Quote Form Section -->
      <div class="modal" id="quoteModal">
          <!-- Start of modal-content div -->
          <div class="modal-content">
              <!-- Close Button -->
              <span class="close-btn" onclick="closeModal()">&times;</span>

              <!-- Quote Form Section -->
              <section class="quote-form-section">
                  <h2>Fill the Form Below for an Instant Quote</h2>
                  <form id="quote-form" action="process-form.php" method="post">
                      <!-- Name -->
                      <label for="name">Full Name:</label>
                      <input type="text" id="name" name="name" required>

                      <!-- Car Make -->
                      <label for="car-make">Car Make:</label>
                      <input type="text" id="car-make" name="car-make" required>

                      <!-- Car Model -->
                      <label for="car-model">Car Model:</label>
                      <input type="text" id="car-model" name="car-model" required>

                      <!-- Year of Manufacture -->
                      <label for="year">Year of Manufacture:</label>
                      <input type="number" id="year" name="year" required min="1900" max="2099">

                      <!-- Contact Number -->
                      <label for="contact-number">Contact Number:</label>
                      <input type="tel" id="contact-number" name="contact-number" required pattern="[0-9]{10}">

                      <!-- Email Address -->
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email">

                      <!-- Message -->
                      <label for="message">Message:</label>
                      <textarea id="message" name="message" rows="4" cols="50"></textarea>

                      <!-- Submit Button -->
                      <button type="submit">Get Quote</button>
                  </form>
              </section>
          </div>
          <!-- End of modal-content div -->