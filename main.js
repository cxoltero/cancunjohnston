
	var action= "click";
	var speed = "500";
$(document).ready(function(){
	// Get next element after question aka answer
	$("li.category").on(action, function(){
		// select all other answers
		$(this).next().slideToggle(speed)
			.siblings("li.items")
				.slideToggle();
		// Get image for active question
		var img = $(this).children('img');
		// Remove the rotate class for all images except the active one
		$('img').not(img).removeClass('rotate');
		// Toggle roate class
		img.toggleClass('rotate');
	});
});