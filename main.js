$(function() {

	// jQuery Goes here!

	$('.fa-bars').on('click', function(){
		$('.nav ul').addClass('flexplicit');
	});
	$('.nav a').on('click', function(){
		$('.nav ul').removeClass('flexplicit');
	});

});