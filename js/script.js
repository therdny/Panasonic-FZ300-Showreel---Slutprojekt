$(function() {
    $("#tabs").tabs();
  });

$('body').prepend('<a href="#" class="top-of-page">Till topps!</a>');

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.top-of-page').fadeIn('slow');
	} else {
		$('a.top-of-page').fadeOut('slow');
	}
});

$('a.top-of-page').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});