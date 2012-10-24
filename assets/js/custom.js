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
    animation: "fade",
    slideshow: false,
    controlNav: false,
    directionNav: false,
    touch: true,                  
    video: true,
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