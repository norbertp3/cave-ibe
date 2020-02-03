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
  // $('.view-rates-btn').on('click', function(){
  //   // $(this).closest('.room-with-rates-wrapper').find('.rate-description').detach().insertAfter($(this).closest('.room-with-rates-wrapper').find('.rate-name'));
  //   $($(this).closest('.room-with-rates-wrapper').find('.rate-description')).each(function( index ) {
  //     console.log( index + ": " + $( this ).text() );
  //     $(this).detach().insertAfter('');
  //   });
  // })
  $('.rate-name').click(function(){
    $(this).closest('.rate-container').find('.rate-description').detach().insertAfter($(this).closest('.rate-container').find('.rate-name'));
  });
}

// .Fa rotate
$('.trigger-rotate').click(function(){
  $(this).find('.fa').toggleClass('rotate180');
});

// View Rates
$('.view-rates-btn').click(function(){
  $(this).closest('.room-with-rates-wrapper').find('.rates-wrapper').slideToggle();
  $("html, body").animate({
      scrollTop: $(this).closest('.room-with-rates-wrapper').find('.room-wrapper').offset().top - 10
  }, 'slow');
});
$('.rate-name').click(function(){
  $(this).closest('.rate-container').find('.rate-description').slideToggle();
});
$(".view-rates-btn").click(function(){
  $(".icon-chevron-down").toggleClass("icon-chevron-up");
});
$(".open-booking-summery").click(function(){
  $(".icon-chevron-down").toggleClass("icon-chevron-up");
});

// Slick slider single Item
$('.single-item').slick({
  arrows: true,
  autoplay: true
});