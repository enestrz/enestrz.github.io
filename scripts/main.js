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
$(document).ready(function () {
  $("#navToggle").click(function () {
    $("#navList").slideToggle(1000);
  });
});

$(document).ready(function () {
  $(".nav-link").click(function () {
    $("#navList").slideUp();
  });
});

//Smoot Scrolling with JQuery
$(".section-header ul a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
//End of Smoot Scrolling with JQuery
