// this is jquery script for the website needed to be created

$(document).ready(function(){
	$('nav').hide().delay(500).fadeIn(1000);

	$('nav :first-child').on('click', function(){
		$('#about').show();
		$('#clips').hide();
		$('#photos').hide();
	});


	$('nav :nth-child(2)').on('click', function(){
		$('#clips').fadeIn(500);
		$('#about').hide();
		$('#photos').hide();
	});

	$('nav :nth-child(3)').on('click', function(){
		$('#photos').slideDown(1500);
		$('#about').hide();
		$('#clips').hide();
	});

});