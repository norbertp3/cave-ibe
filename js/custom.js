// Hamburger
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
  $('#guest-widget').on('click', function () {
    $('.guest-widget-buttons-container').show();
  });
});

// Disable scroll
function noScroll() {
  window.scrollTo(0, 0);
}

// Booking Widget

function openWidget() {
  document.getElementById("booking-widget").style.width = "100%";
  window.addEventListener('scroll', noScroll);
}

function closeWidget() {
  document.getElementById("booking-widget").style.width = "0";
  window.removeEventListener('scroll', noScroll);
}