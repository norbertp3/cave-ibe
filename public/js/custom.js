// Expand textp

$('.wrapper').find('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    this.expand = !this.expand;
    $(this).text(this.expand?"READ LESS":"READ MORE");
    $(this).closest('.wrapper').find('.small, .big').toggleClass('small big');
});

$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});
