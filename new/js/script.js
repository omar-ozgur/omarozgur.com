function SkrollrInit(){
	var s = skrollr.init();
}

function ScrollToSection(){
	$(".sidebar-icon").click(function() {
		var section = $(this).attr("value");
		$("html, body").animate({scrollTop: $(section).offset().top}, 750, "swing");
	});
}

$(document).ready(function(){ 
	SkrollrInit();
	ScrollToSection();
}); 