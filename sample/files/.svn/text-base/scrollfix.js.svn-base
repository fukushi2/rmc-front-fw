$(document).ready(function(){
	var topbar = $(".topbar");
	// Scroll and Show
	$(window).scroll(function(){

		var distanceTop = $('#start_content').offset().top - $(window).height();
		
		if ($(window).scrollTop() > distanceTop){
			topbar.slideDown("fast");
		}else{ 
			topbar.slideUp("fast");
		};
	});
	$("span[data-role=topbar-close-btn]").click(function(){
		topbar.hide();
	});
	
});
