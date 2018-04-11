//Accordian\

$(document).ready(function() {
	$('li.q').on('click', function() {
		$(this).next().slideToggle(150).siblings('li.a').slideUp();

		var arrow = $(this).children('i');

		$('i').not(arrow).removeClass('rotate');

		arrow.toggleClass('rotate');
	});
});