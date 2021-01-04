// Hamburger
$(document).ready(function () {
  $('.hamburger').click(function (e) {
    e.preventDefault();
    $('.mobile-nav__collapse').slideToggle();
  });
  $('.mobile-nav__link--dropdown').click(function (e) {
    e.preventDefault();
    $(this).next('.mobile-nav__sub-nav').slideToggle();
  });

});

// Disable scroll
function noScroll() {
  window.scrollTo(0, 0);
}

//show/hide unavailable rooms
$('.trigger-availability').on('click', function () {
  $('.unavailable-rooms').slideToggle(1000);
  var btnTxt = $('.trigger-availability').text();
  $(this).text($(this).text() == 'show unavailable rooms' ? 'hide unavailable rooms' : 'show unavailable rooms');
});


//navigation
function openNav() {
  if ($(window).width() < 991) {
    $("#mySidenav").css("width", "100%");
  } else if ($(window).width() > 992) {
    $("#mySidenav").css("width", "550px");
  }
}

function closeNav() {
  $("#mySidenav").css("width", "0");
}

/* dropdown menu */
var dropdown = $(".dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
$('.desktop-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
});

$('.addon-messages').detach().insertAfter('#booking-summary');