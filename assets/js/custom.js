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

$(".rslides").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  speed: 1000,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: false,   // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "800",           // Integer: Max-width of the slideshow, in pixels
  controls: "",           // Selector: Where controls should be appended to, default is after the 'ul'
});