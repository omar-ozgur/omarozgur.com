/* Scroll to specified section */
function ScrollToSection(){
	$(".sidebar-icon").click(function() {
		var section = $(this).attr("value");
		$("html, body").animate({scrollTop: $(section).offset().top}, 750, "swing");
	});
}

/* Initialize functions */
$(document).ready(function(){ 
	ScrollToSection();
});
