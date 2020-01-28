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
  $(this).find('img').toggleClass('rotate180');
});

// View Rates
$('.view-rates-btn').click(function(){
  $(this).closest('.room-with-rates-wrapper').find('.rates-wrapper').slideToggle();
  $("html, body").animate({
      scrollTop: $(this).closest('.room-with-rates-wrapper').find('.room-wrapper').offset().top - 10
  }, 'slow');
});