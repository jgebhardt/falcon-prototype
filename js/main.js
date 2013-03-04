
$(document).on('ready', function(){
	var state = 0;
	var video = $('.vid')[0];
	var update_panel_clicked = false;
	
	render_page(state);
	
	$('.next').on('click', function(e){
		console.log(state);
		if(state == 5) {
			//render_page(state);
		} else {
			state++;
			render_page(state);
		}
	
	});
	
	$('.update_panel').on('click', function(e){
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

	function render_page(state) {
		if(state == 0) {
			$('.main_panel').css('background-image', 'url("img/mom-cam-son_03.png")');
		} else if(state == 1) {
			$('.main_panel').css('visibility', 'hidden');
			$('.confirm_panel').css('visibility', "visible");
			$('.confirm_panel').css('background-image', 'url("img/screens1_03.png")');
			$('.confirm_panel').animate({top: 0});
			
			
		} else if(state == 2) {
			$('.main_panel_shadow').css({visibility: "visible"}).animate({opacity: 0.5});
			$('.main_panel_gadget').css('background-image', 'url("img/icon-mic-trans_03.png")');
			$('.main_panel_action').css('background-image', 'url("img/mic_action_sprite_03.png")').animate({top: 0});
		} else if(state == 3) {
		
		} else if(state == 4) {
		
		} else if(state == 5) {
		
		}
	}
	
	
});