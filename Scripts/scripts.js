//Footer Date
$('.footer').append(new Date().getFullYear(), " &copy;  Nakba Museum Project. All Rights Reserved.");

//Navbar Auto-close
$('.navbar-collapse').click('li', function() {
	$('.navbar-collapse').collapse('hide');
});
