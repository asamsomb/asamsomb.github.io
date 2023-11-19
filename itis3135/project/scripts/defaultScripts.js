window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function redirectContactUs() {
  window.location.href = 'contact_us.html';
}

function redirectHome() {
  window.location.href = 'index.html';
}

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

function showSelectServiceForm() {
  var selectServiceForm = document.getElementById("select-service-form");
  selectServiceForm.style.display = "block";
}

function hideSelectServiceForm() {
  var selectServiceForm = document.getElementById("select-service-form");
  selectServiceForm.style.display = "none";
}

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

function submitForm() {
  if (validateForm()) {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;

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