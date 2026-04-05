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
//credit w3schools tyty
function clear() {
  document.getElementById("Intake").reset();
}
    
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
