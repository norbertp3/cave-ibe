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

$(".location-nav-dropdown").hover(function(){
    $(".location-nav").toggleClass("add-nav-hover");
});
$(".hotels-nav-dropdown").hover(function(){
    $(".hotels-nav").toggleClass("add-nav-hover");
});