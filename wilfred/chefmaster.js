/**************************** */
/* Form validation*/
/**************************** */

function validateForm() {
  // Get form elements
  const name = document.getElementById("name").value.trim();
  const country = document.getElementById("country").value.trim();
  const city = document.getElementById("city").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value.trim();
  const services = document.querySelectorAll('input[name^="service"]:checked');
  const message = document.getElementById("message").value.trim();

  //  flags
  let isValid = true;
  let errorMessage = "";

  //  name
  if (!name) {
    errorMessage += "Name is required.\n";
    isValid = false;
  }

  //  country
  if (!country) {
    errorMessage += "Country/State is required.\n";
    isValid = false;
  }

  //  city
  if (!city) {
    errorMessage += "City is required.\n";
    isValid = false;
  }

  //  email
  if (!email || !email.includes("@")) {
    errorMessage += "A valid email is required.\n";
    isValid = false;
  }

  //  phone
  if (!phone) {
    errorMessage += "Phone number is required.\n";
    isValid = false;
  }

  //  date
  if (!date) {
    errorMessage += "Preferred Service Date is required.\n";
    isValid = false;
  }

  // services
  if (services.length === 0) {
    errorMessage += "At least one service type is required.\n";
    isValid = false;
  }

  // message
  if (!message) {
    errorMessage += "Message is required.\n";
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit it
    document.getElementById("myForm").submit();
  } else {
    // Show validation errors
    alert(errorMessage);
  }
}

// Attach event listener to the submit button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitButton").addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
  });
});

/*************************************/
/* form submition*/
/*************************************/

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input[required]");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
  let isFormComplete = true;

  for (let input of inputs) {
    if (input.value.trim() === " ") {
      alert("Please fill out all required fields.");
      isFormComplete = false;
      break;
    }
  }

  if (isFormComplete) {
    alert("Form has been successfully submitted!");
  } else {
    event.preventDefault();
  }
});
