$(document).ready(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() > 150) {
			$('#scrolltop').show();
		} else {
			$('#scrolltop').hide();
		}
	});

	$('#scrolltop').click(function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	$('#city_sel_link').click(function () {
		var h = $("#city_sel").height();
		var p = parseInt($("body").css("padding-top"));
		if (p === 0 || p === h) {
			$("body").animate({paddingTop: h - p}, 600);
			$("#page_cnt").animate({paddingTop: h - p, marginTop: -(h - p)}, 600);
			return false;
		}
	});
});