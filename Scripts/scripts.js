//Footer Date
$('.footer').append(new Date().getFullYear(), " &copy;  Nakba Museum Project. All Rights Reserved.");

//Navbar Auto-close
$('.navbar-collapse').click('li', function() {
	$('.navbar-collapse').collapse('hide');
});

//Carousel Controls
$(document).ready(function() {
	$("#carouselMain").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 5000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});