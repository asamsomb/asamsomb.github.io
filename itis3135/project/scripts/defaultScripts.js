// dropdown menu is hidden when user clicks outside of menu button
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

// displays menu items
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// redirects to contact us page
function redirectContactUs() {
  window.location.href = 'contact_us.html';
}

// redirects to home page
function redirectHome() {
  window.location.href = 'index.html';
}

// Takes phone number input of length 10 --> 1234567890 and formats it to (123) 456-7890
function formatPhoneNumber(input) {
  var phoneNumber = input.value.replace(/\D/g, '');

  if (phoneNumber.length === 10) {
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    input.value = phoneNumber;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  hideSelectServiceForm();
});

// If user selects "Yes" for "Is this a service inqury?", services dropdown shows.
function showSelectServiceForm() {
  var selectServiceForm = document.getElementById("select-service-form");
  selectServiceForm.style.display = "block";
}

// If user selects "No" for "Is this a service inqury?", services dropdown stays hidden.
function hideSelectServiceForm() {
  var selectServiceForm = document.getElementById("select-service-form");
  selectServiceForm.style.display = "none";
}

// Validates form and gives alerts to users for required fields.
function validateForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var message = document.getElementById("message").value;

  if (firstName === "") {
    alert("FIRST NAME field is empty!");
    return false;
  }

  if (lastName === "") {
    alert("LAST NAME field is empty!");
    return false;
  }

  if (email === "") {
    alert("EMAIL field is empty!");
    return false;
  }

  if (phoneNumber === "") {
    alert("PHONE NUMBER field is empty!");
    return false;
  }

  if (message === "") {
    alert("MESSAGE field is empty!");
    return false;
  }

  return true;
}

var defaultForm = document.getElementById("contactForm").innerHTML;

// Submits the form and displays 'thank you' message to confirm form validation and submission
function submitForm() {
  if (validateForm()) {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;

    // creates div element with innerHTML content
    var verifiedSubmission = document.createElement('div');

    verifiedSubmission.innerHTML = `
      <div class="content-container">
        <h1>Thank you, <strong>${firstName} ${lastName}!</strong></h1>
        <br>
            <p class="verified-submission">Your inquiry request has been submitted. Someone from our team will contact you soon!</p>;
        <br>
        <div class="button-container">
          <button type="button" onclick="redirectHome()">Return to Home Page</button>
        </div>
        <br>
      </div>`

    var contentContainer = document.querySelector('.centered');

    contentContainer.innerHTML = '';
    contentContainer.appendChild(verifiedSubmission);
  }
}