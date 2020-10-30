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
