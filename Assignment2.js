/* 
Name: Emily Gaber
File: Assignment2.js
Date Created: 2/23/2026
Date Updated: 2/27/2026
Purpose: Learning html
*/

function validateFName() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}