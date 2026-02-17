$(window).bind('scroll', function () {
	if ($(window).scrollTop() > 30) {
		$('.toppanel-mobile').addClass('fixed');
	} else {
		$('.toppanel-mobile').removeClass('fixed');
	}
});