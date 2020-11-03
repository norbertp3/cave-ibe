// Hamburger
$(document).ready(function(){
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('.mobile-nav__collapse').slideToggle();
  });
  $('.mobile-nav__link--dropdown').click(function(e) {
    e.preventDefault();
    $(this).next('.mobile-nav__sub-nav').slideToggle();
  });
});

// Disable scroll
function noScroll() {
  window.scrollTo(0, 0);
}

