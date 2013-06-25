// foolish way
// Saves options to localStorage.
function save_options() {
  var hour = document.getElementById("hour");
  localStorage["hour"] = hour.value;

	var minute = document.getElementById("minute");
  localStorage["minute"] = minute.value;
  
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {status.innerHTML = "";}, 750);
  
}

// Restores select box state to saved value from localStorage.
function restore_options() {
 
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");

	hour.value = localStorage["hour"];
  minute.value = localStorage["minute"];
  
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);


//another(cool) way and no button
/*
window.addEventListener('load', function() {

  options.hour.value = localStorage.hour;
  options.hour.onchange = function() {
    localStorage.hour = options.hour.value;
  }
  
  options.minute.value = localStorage.minute;
  options.minute.onchange = function() {
    localStorage.minute = options.minute.value;
  }
});
*/