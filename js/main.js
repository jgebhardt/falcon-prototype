
$(document).on('ready', function(){
	var video = $('.vid')[0];
	var update_panel_clicked = false;
	
	$('.update_panel').on('click', function(e){
		console.log("asdas");
		if(!update_panel_clicked) {
			$(this).animate({top: -260});
			video.pause();
			update_panel_clicked = true;
		} else {
			$(this).animate({top: 0});
			video.play();
			update_panel_clicked = false;
		}
		
		
	});


});