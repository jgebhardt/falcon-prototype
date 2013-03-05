
$(document).on('ready', function(){
	var state = 0;
	var video = $('.vid')[0];
	var update_panel_clicked = false;
	
	$('.left').on('click', function(e) {
		$('.left').animate({left: 0});
		$('.right').animate({left: 700});
	
	});
	
	$('.right').on('click', function(e) {
		$('.left').animate({left: -600});
		$('.right').animate({left: 100});
	});
	
	$('.text0').text("FALCONNN");
	
	setTimeout(function() {
		disable_buttons();
		render_state(state);
	}, 1000);
	
	
	$('.prev').on('click', function(e){
		console.log(state);
		if(state > 0) {
			state--;
			render_state(state);
		} 
	
	});
	
	
	$('.next').on('click', function(e){
		console.log(state);
		if(state < 9) {
			state++;
			render_state(state);
		}
	});
	

	function render_state(state) {
		if(state == 0) {
			$('.left').animate({left:-300});
			$('.right').animate({left:400});
		} else if(state == 1) {
			// hide completely then show
			$('.left').animate({left:-700}, function() {
				$('.left').animate({left:0});
			});
			
			$('.right').animate({left:800}, function() {
				$('.right').animate({left:700});
			});
		
			
		} else if(state == 2) {
			$('.left').animate({left: -600});
			$('.right').animate({left: 100});
		
		} else if(state == 3) {
			$('.left').animate({left: 0});
			$('.right').animate({left: 700});
		} else if(state == 4) {
			$('.left').animate({left: -600});
			$('.right').animate({left: 100});
		
		} else if(state == 5) {
			$('.left').animate({left: 0});
			$('.right').animate({left: 700});
		} else if(state == 6) {
			$('.left').animate({left: -600});
			$('.right').animate({left: 100});
		} else if(state == 7) {
			$('.left').animate({left: 0});
			$('.right').animate({left: 700});
		} else if(state == 8) {
			$('.left').animate({left: -600});
			$('.right').animate({left: 100});
		} else if(state == 9) {
			$('.left').animate({left: 0});
			$('.right').animate({left: 700});
		}
	}
	

});