$(document).ready(function(){
	('.carousel').carousel({
		interval:5000;
		);
});
// Activate Carousel
$("#myslide").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myslide").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myslide").carousel("prev");
});

$(document).ready(function () {

var menu = $('.menu');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('.menu').addClass('sticky');
        $('.content').addClass('menu-padding');
    } else {
        $('.menu').removeClass('sticky');
        $('.content').removeClass('menu-padding');
    }


   }

  document.onscroll = scroll;

});
//loading screen

