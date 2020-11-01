// Temporary Alert Box
var close = document.getElementsByClassName("closebtn");
close[0].onclick = function () {
  var div = this.parentElement;
  div.style.opacity = "0";
  setTimeout(function () {
    div.style.display = "none";
  }, 600);
};
//End of Temporary Alert Box

// Back to Top Button

// End of Back to Top Button

//Responsive Navigation Bar
let navList = document.getElementById("navList");
let navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", function() {
  navList.classList.toggle("active");
});

//End of Responsive Navigation Bar
