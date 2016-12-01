
//This is the tabs-function
$(function() {
    $("#tabs").tabs();
  });

$("body").prepend('<a href="#" class="top-of-page">Till topps!</a>'); //This is added as jquery so I don't have to insert it in every html-file.

//The "to the top of the page"-function.
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.top-of-page').fadeIn('slow');
	} else {
		$('a.top-of-page').fadeOut('slow');
	}
});

//To make a cool animationeffect on the scroll-up.
$('a.top-of-page').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});