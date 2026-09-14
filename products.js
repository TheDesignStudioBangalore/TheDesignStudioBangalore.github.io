// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your actual key)
emailjs.init("2WXJnoGdo93sd7bU2");

document
  .getElementById("template-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userEmail = document.getElementById("email").value;
    const messageElement = document.getElementById("form-message");
    const submitBtn = document.querySelector(".send-btn");

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const serviceID = "service_ec4lokb";
    const templateID = "template_9ymm6ci";

    // Email 1: Send to user
    emailjs
      .send(serviceID, templateID, {
        email: userEmail, 
      })
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        messageElement.textContent = "Check your email! Template link sent.";
        messageElement.classList.add("success");
        document.getElementById("template-form").reset();
      })
      .catch(function (error) {
        console.error("FAILED...", error);

        messageElement.textContent = "Something went wrong. Please try again.";
        messageElement.classList.add("error");
      })
      .finally(function () {
        // Re-enable button state regardless of success/error
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Me the Template";
      });
  });
