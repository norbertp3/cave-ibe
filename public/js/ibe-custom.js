

// Rotation
$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});



if ($(window).width() < 991) {
    $('.my-booking-heading').click(function(){
        $('.my-booking-info').slideToggle();
        $(this).find('.fa').toggleClass('rotate180');
    });
    $("#sidebar_affix").detach().insertAfter("#top-bar");

}

// Navigation hover
$(".location-nav-dropdown").hover(function(){
    $(".location-nav").toggleClass("add-nav-hover");
});
$(".hotels-nav-dropdown").hover(function(){
    $(".hotels-nav").toggleClass("add-nav-hover");
});

// Detach properties listWidth
if ($(window).width() < 767) {
    
}

// Custom tabs slidetoogle

$('.custom-tab-head').click(function(){
    $(this).next().slideToggle('slow');
    $(this).find('.fa').toggleClass('rotate180');
});

$('.rotate-fa-slide-next').click(function(){
    $(this).next().slideToggle('slow');
    $(this).find('.fa').toggleClass('rotate180');
});



$(document).ready(function() {
    $('#multiple-selected').multiselect({
    });
});



/* Rooms dropdown */
$('select[name="rooms"]').on('change', function () {
    update_room_dropdowns();
});


//Update rooms dropdown
function update_room_dropdowns() {
    rooms = parseInt($('#rooms').val());
    parent = $('#rooms').parents('form');
    totalNumberOfDivs = $('form .rooms_list .extra-rooms').length;
    if (rooms < 10) {
        for (i = 1; i <= totalNumberOfDivs; i++) {
            if (i <= rooms) {
                $('form #roomId' + i).css('display', 'flex');
            } else {
                $('form #roomId' + i).hide();
            }
        }
        $('.info-text.group-booking').hide();
        $('#booking-widget-banner button[type=submit]').show();
        $('.add-promo').show();
        $('.booking-widget-inner .rooms_list').show();
    } else {
        $('.info-text.group-booking').show();
        $('#booking-widget-banner button[type=submit]').hide();
        $('.add-promo').hide();
        $('.booking-widget-inner .rooms_list').hide();
        $('form .room-details.extra-rooms:not("#roomId1")').hide();
    }
}



// Modal disable scroll
// var vpH = window.innerHeight;
// document.documentElement.style.height = vpH.toString() + "px";
// body.style.height = vpH.toString() + "px";



function initSlickSlider() {
    setTimeout( function() {
        $(".home-3-boxes-slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 1.5,
            slidesToScroll: 1
        });
    
        $(".home-slider").slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
        $(".standard-slider").slick({
            dots: true,
            infinite: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 300000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
        
        $(".large-slider").slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }, 500);
}


// IBE 
// ****************************************************************


$('.view-room-btn').click(function(){
    var showBtn = 'SHOW RATES <i class="fa fa-chevron-down float-right"></i>';
    var hideBtn = 'HIDE RATES <i class="fa fa-chevron-up float-right"></i>'; 
    $(this).closest('.main-room').find('.rates-list-wrapper').slideToggle();
    this.expand = !this.expand;
    $(this).html(this.expand? hideBtn:showBtn );
    $("html, body").animate({
        scrollTop: $(this).closest('.main-room').find('.main-room-content').offset().top - 10
    }, 'slow');
});

$('.ibe-join-mobile-close').click(function(){
    $('.ibe-join-mobile').hide();
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
    $('[data-toggle="popover"]').popover()
})
