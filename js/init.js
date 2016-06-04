(function($) {
  $(function() {

    var fadeIn = function(el){
      $(el).fadeIn();
    };

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(document).ready(function() {
      $('.scrollspy').scrollSpy();
    });

    var options = [
  {selector: '#about', offset: 100, callback: fadeIn('#about') },
  {selector: '#resume', offset: 3000, callback: fadeIn('#resume') },
  {selector: '#projects', offset: 2000, callback: fadeIn('#projects') }

];
Materialize.scrollFire(options);


  }); // end of document ready
})(jQuery); // end of jQuery name space
