function noisy(){
	$('html,body').noisy({
    intensity: 1, 
    size: 200, 
    opacity: 0.08,
    fallback: '../img/noise.png',
    monochrome: false
	});
}

$(document).ready(function() {
    $(".navbar").hide();
    $(".show-hide").show();
    $('.show-hide').click(function(){
        $(".navbar").slideToggle();
    });
    noisy();
    $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    controlNav: false,
    directionNav: false,
    start: function(slider) {
    $('.slide-anchor').click(function(event){
      event.preventDefault();
      var pos = parseInt(this.rel, 10);
      if (pos !== slider.currentSlide) {
        slider.flexAnimate(pos, true);
        }
      });
      }
      }
    );

})