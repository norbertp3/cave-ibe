// Expand textp
$('.wrapper').find('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    this.expand = !this.expand;
    $(this).text(this.expand?"READ LESS":"READ MORE");
    $(this).closest('.wrapper').find('.small, .big').toggleClass('small big');
});

// Rotation
$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});

// Home 3 boxes same height
$(".home-3-boxes").each(function(){ 
    var largest = 0;
    $(this).find(".home-box-content-text").each(function(){ 
       var findHeight = $(this).height();
       if(findHeight > largest){
          largest = findHeight;
       }  
    });
    $(this).find(".home-box-content-text").css({"height":largest+"px"});
});

if ($(window).width() > 991) {
    // Feature X boxes same height
    $(".fature-x-boxes-large").each(function(){ 
        var largest = 0;
        $(this).find(".card-body").each(function(){ 
        var findHeight = $(this).height();
        if(findHeight > largest){
            largest = findHeight;
        }  
        });
        $(this).find(".card-body").css({"height":largest+"px"});
    });
    $(".fature-x-boxes-small").each(function(){ 
        var largest = 0;
        $(this).find(".card-body").each(function(){ 
        var findHeight = $(this).height();
        if(findHeight > largest){
            largest = findHeight;
        }  
        });
        $(this).find(".card-body").css({"height":largest+"px"});
    });
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
    $("#all-properties").detach().insertAfter(".enquiry-cover");
}

// Custom tabs slidetoogle

$('.custom-tab-head').click(function(){
    $(this).next().slideToggle('slow');
});


// Blog filters
$('.open-filters').click(function(){
    $(".blog-filters-checkboxes").slideToggle('slow');
});

$(".open-filters").click(function () {
    $(".filter-text").text(($(".filter-text").text() == 'CLOSE FILTERS') ? 'FILTER BLOG POSTS' : 'CLOSE FILTERS');
})

$(document).ready(function() {
    $('#multiple-selected').multiselect({
    });
});
  