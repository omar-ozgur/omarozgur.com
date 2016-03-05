$(document).ready(function(){ 
	$(".button").click(function() {
		var section = $(this).attr("value");
		console.log(section);
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 1000);
	});
}) 