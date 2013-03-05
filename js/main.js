
$(document).on('ready', function(){
	var state = 0;
	var video = $('.vid')[0];
	var update_panel_clicked = false;
	
	$('.prev').on('click', function(e){
		if(state > 0) {
			state--;
			render_state(state);
			
		} 
	
	});
	
	
	$('.next').on('click', function(e){
		if(state < 8) {
			state++;
			render_state(state);
		}
	});
	
	
	$('.text0').text("FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON FALCON ");
	
	
	
	
	setTimeout(function() {
		$('.splash').fadeOut(2000,  function() {
			render_state(state);
		});
	}, 2000);
	
	
	

	function render_state(state) {
		disable_buttons();
		console.log(state);
	
		if(state == 0) {
			$('.left').animate({left:-300}, function() {enable_buttons();});
			$('.right').animate({left:400}, function() {enable_buttons();});
		} else if(state == 1) {
			// hide completely then show
			$('.left').animate({left:-700}, function() {
				$('.left').animate({left:0}, function() {enable_buttons();});
			});
			
			$('.right').animate({left:800}, function() {
				$('.right').animate({left:700}, function() {enable_buttons();});
			});
		
			
		} else if(state == 2) {
			$('.left').animate({left: -600}, function() {enable_buttons();});
			$('.right').animate({left: 100}, function() {enable_buttons();});
		
		} else if(state == 3) {
			$('.left').animate({left: 0}, function() {enable_buttons();});
			$('.right').animate({left: 700}, function() {enable_buttons();});
		} else if(state == 4) {
			$('.left').animate({left: -600}, function() {enable_buttons();});
			$('.right').animate({left: 100}, function() {enable_buttons();});
		
		} else if(state == 5) {
			$('.left').animate({left: 0}, function() {enable_buttons();});
			$('.right').animate({left: 700}, function() {enable_buttons();});
		} else if(state == 6) {
			$('.left').animate({left: -600}, function() {enable_buttons();});
			$('.right').animate({left: 100}, function() {enable_buttons();});
		} else if(state == 7) {
			$('.left').animate({left: 0}, function() {enable_buttons();});
			$('.right').animate({left: 700}, function() {enable_buttons();});
		} else if(state == 8) {
			$('.left').animate({left: -600}, function() {enable_buttons();});
			$('.right').animate({left: 100}, function() {enable_buttons();});
		} else if(state == 9) {
			$('.left').animate({left: 0}, function() {enable_buttons();});
			$('.right').animate({left: 700}, function() {enable_buttons();});
		}
	}
	
	function disable_buttons() {
		$('.prev').css('pointer-events', 'none');
		$('.next').css('pointer-events', 'none');
	}
	
	function enable_buttons() {
		$('.prev').css('pointer-events', 'auto');
		$('.next').css('pointer-events', 'auto');
	}

});