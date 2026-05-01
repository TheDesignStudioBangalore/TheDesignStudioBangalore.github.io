const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    // service1: document.getElementById("service1").value,
    // service2: document.getElementById("service2").value,
    // service3: document.getElementById("service3").value,
    service1: document.getElementById("service1").checked ? "Yes" : "No",
    service2: document.getElementById("service2").checked ? "Yes" : "No",
    service3: document.getElementById("service3").checked ? "Yes" : "No",
  };

  emailjs
    .send("service_ec4lokb", "template_vabsswm", parms)
    .then(function () {
      alert("We have received your email, lets goo!!");
    })
    .catch(function (err) {
      alert("Email failed to send. Please try again after 4 mins :)))");
      console.error("Failed to send...", err);
    });

  return false;
}
