// Initialize EmailJS (replace YOUR_PUBLIC_KEY with your actual key)
emailjs.init("YOUR_PUBLIC_KEY");

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

    // Email 1: Send to user
    emailjs
      .send("service_ec4lokb", "template_9ymm6ci", {
        to_email: userEmail,
      })
      .then(function (response) {
        console.log("Email to user sent:", response);

        // Email 2: Send to yourself
        return emailjs.send("YOUR_SERVICE_ID", "YOUR_ADMIN_TEMPLATE_ID", {
          user_email: userEmail,
          message: "New template download request",
        });
      })
      .then(function (response) {
        console.log("Admin email sent:", response);
        messageElement.textContent = "Check your email! Template link sent.";
        messageElement.classList.add("success");
        document.getElementById("template-form").reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Me the Template";
      })
      .catch(function (error) {
        console.log("Error:", error);
        messageElement.textContent = "Something went wrong. Please try again.";
        messageElement.classList.add("error");
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Me the Template";
      });
  });
