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

});

$(function () {
  $("#datepicker1").datepicker();
  $("#datepicker2").datepicker();
});

//navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "550px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* dropdown menu */
var dropdown = document.getElementsByClassName("dropdown-btn");
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

$('.unavailable-rooms-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
});