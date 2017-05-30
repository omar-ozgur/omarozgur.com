/* Scroll to specified section */
function ScrollToSection(){
	$(".sidebar-icon").click(function() {
		var section = $(this).attr("value");
		$("html, body").animate({scrollTop: $(section).offset().top}, 500, "swing");
	});
}

/* Initialize functions */
$(document).ready(function(){ 
	ScrollToSection();
});

// $(window).load(function() {
//   $('.post-module').hover(function() {
//     $(this).find('.post-content').stop(true, false).animate({top: '0px'}, 'fast', function() {
//       $(this).css("height", "300px");
//       $(this).find('.description').stop(true, false).fadeIn(100);
//     });
//   },
//   function() {
//     var content = $(this).find('.post-content');
//     $(this).find('.description').stop(true, false).fadeOut(100, function() {
//       content.css("height", "120px");
//       content.stop(true, false).animate({top: '180px'}, 'fast');
//     });
//   })
// });
