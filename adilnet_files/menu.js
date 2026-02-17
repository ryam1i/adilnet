var overlay = "#menu-overlay";
var left_slide_wrp = "#ls";
var left_open_button = "#left-menu-open";
var right_slide_wrp = "#right-menu-wrapper";
var right_open_button = "#right-menu-open";
var close_button_ls = "#close-button-ls";
var close_button_rs = "#close-button-rs";


$(left_open_button).click(function (e) { // On left-menu open button click
	e.preventDefault();
	$(left_slide_wrp).css({"left": "0px"}); // Move left-menu's right position to 0
	setTimeout(function () {
		$(left_slide_wrp).addClass('active'); // Add active class
	}, 50);
	$(overlay).css({"opacity": "1", "width": "100%"});
});

$(right_open_button).click(function (e) { // On right-menu open button click
	e.preventDefault();
	$(right_slide_wrp).css({"right": "0px"}); // Move right-menu's left position to 0
	setTimeout(function () {
		$(right_slide_wrp).addClass('active'); // Add active class
	}, 50);
	$(overlay).css({"opacity": "1", "width": "100%"});
});

function stopPropagation(e) {
	if(e.handled === false) {
		return;
	}
	e.stopPropagation();
	e.preventDefault();
	e.handled = true;
}

$(close_button_ls).on('touchstart click', function (e) { // Closing left menu
	stopPropagation(e);
	$(left_slide_wrp).css({"left": -$(left_slide_wrp).outerWidth() + 'px'}).removeClass('active');
	$(overlay).css({"opacity": "0", "width": "0"});
});

$(close_button_rs).on('touchstart click', function (e) { // Closing right menu
	stopPropagation(e);
	$(right_slide_wrp).css({"right": -$(right_slide_wrp).outerWidth() + 'px'}).removeClass('active');
	$(overlay).css({"opacity": "0", "width": "0"});
});

$(document).on('touchstart click', function (e) { // Hide menus when clicked outside menu area
	if (!$(left_open_button).is(e.target) && !$(left_slide_wrp).is(e.target)
			&& $(left_slide_wrp).has(e.target).length === 0
			&& $(left_slide_wrp).hasClass("active")) {
		
		stopPropagation(e);
		$(left_slide_wrp).css({"left": -$(left_slide_wrp).outerWidth() + 'px'}).removeClass('active');
		$(overlay).css({"opacity": "0", "width": "0"});
	}

	if (!$(right_open_button).is(e.target) && !$(right_slide_wrp).is(e.target)
			&& $(right_slide_wrp).has(e.target).length === 0
			&& $(right_slide_wrp).hasClass("active")) {
		
		stopPropagation(e);
		$(right_slide_wrp).css({"right": -$(right_slide_wrp).outerWidth() + 'px'}).removeClass('active');
		$(overlay).css({"opacity": "0", "width": "0"});
	}
});
