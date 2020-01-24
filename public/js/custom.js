// Hamburger
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

// Mobile detach
if ($(window).width() < 991) {
  $("#booking-summary").detach().insertAfter("#mobile-hotel-info");
  $('.open-booking-summery').click(function(){
    $('.booking-summary-data').slideToggle();
    $(this).find('.fa').toggleClass('rotate180');
});
}
// .Fa rotate
$('.trigger-rotate').click(function(){
  $(this).find('.fa').toggleClass('rotate180');
});