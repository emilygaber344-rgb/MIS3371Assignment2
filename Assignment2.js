/* 
Name: Emily Gaber
File: Assignment2.js
Date Created: 2/23/2026
Date Updated: 2/27/2026
Purpose: Learning html
*/

function validateFName() {
 let x = document.forms["form"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
//credit w3schools tyty
function clear() {
  document.getElementById("Intake").reset();
}
 /*   <script>
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
    */
   // credit to geeksforgeeks and you professor
    
        const d = new Date();
        let text = d.toLocaleDateString();
        document.getElementById("today").innerHTML = text;

          const dp = document.getElementById('date');
        dp.setAttribute('min', '1909-01-01');
        dp.setAttribute('max', 'today');
        const minDate = dp.getAttribute('min');
        const maxDate = dp.getAttribute('max');
        document.getElementById('dateRange').textContent = 
            'Accepted Date Range: ' + minDate + ' to ' + maxDate;
        dp.addEventListener('change', function () {
            const dateSelect = dp.value;
            document.getElementById('selectedDate').textContent = 
                'Selected Date: ' + dateSelect;
        });
  }
}
