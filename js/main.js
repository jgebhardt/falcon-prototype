
$(document).on('ready', function(){
	var state = 0;
	var interval = null;
	var vid0 = $('.vid0')[0];
	
	$('.about').on('click', function(e) {
		$('.main_page').hide();
		$('.about_page').show();
	});
	
	$('.prev').on('click', function(e){
		clear_interval();
		prev_state();
	});
	
	$('.next').on('click', function(e){
		clear_interval();
		next_state();
	});
	
	$('.play').on('click', function(e) {
		if(state == 10) {
			state = 0;
			render_state();
		}
		
		if(interval == null) {
			console.log("interval");
			interval = setInterval(function() {
				console.log("ha");
				next_state();
			}, 1000);
		}
	});
	
	$('.pause').on('click', function(e) {
		clear_interval();
	});
	
	function clear_interval() {
		if(interval != null) {
			clearInterval(interval);
			interval = null;
		}
	}
	
	function next_state() {
		if(state < 10) {
			state++;
			render_state();
		} else {
			clearInterval(interval);
			interval = null;
		}
	}
	
	function prev_state() {
		if(state > 0) {
			state--;
			render_state();
		} 
	}
	
	disable_buttons();
	
	setTimeout(function() {
		$('.splash').fadeOut(1000,  function() {
			render_state();
		});
	}, 1000);
	
	
	

	function render_state() {
		disable_buttons();
		console.log(state);
	
		if(state == 0) {
			$('.bottom').animate({top: 600});
		
			$('.iphone0').hide();
			$('.iphone1').hide();
		
			$('.left').animate({left:-450}, function() {enable_buttons();});
			$('.right').animate({left:1000});
		} else if(state == 1) {
			$('.iphone0').hide();
			$('.iphone1').hide();
			
			$('.left').animate({left:-450}, function() {enable_buttons();});
			$('.right').animate({left:500}, function() {enable_buttons();});
		
		
			
		} else if(state == 2) {
		
			// hide completely then show
			$('.left').animate({left:-950}, 
				function() {
					$('.iphone0').show();
					$('.left').animate({left:-900}, function() { enable_buttons();});
				}
			);
			
			$('.right').animate({left:1000}, 
				function() {
					$('.iphone1').show();
					$('.right').animate({left:50}, function() {enable_buttons();});
			});
		
		} else if(state == 3) {
		
			$('.left').animate({left: 0}, function() {enable_buttons(); playVideo(2,4);});
			$('.right').animate({left: 950}, function() {enable_buttons();});
		
			
		} else if(state == 4) {
			$('.left').animate({left: -900}, function() {enable_buttons();});
			$('.right').animate({left: 50}, function() {enable_buttons();});
		
		
			
		} else if(state == 5) {
			$('.left').animate({left: 0}, function() {enable_buttons(); playVideo(2,4);});
			$('.right').animate({left: 950}, function() {enable_buttons();});
		
		
		} else if(state == 6) {
			$('.left').animate({left: -900}, function() {enable_buttons();});
			$('.right').animate({left: 50}, function() {enable_buttons();});
		
		} else if(state == 7) {
			$('.left').animate({left: -900});
			$('.right').animate({left:1000}, 
				function() {
					$('.right').animate({left:50}, function() {enable_buttons();});
			});
			
		} else if(state == 8) {
		
			$('.top').animate({top: -600});
			
			$('.left').animate({top: 0, left: 0}, function() {enable_buttons();});
			$('.right').animate({top: 0, left: 950}, function() {enable_buttons();});
		
			
			
		} else if(state == 9) {
			$('.left').animate({top: 600, left:-950});
			$('.right').animate({top: 600, left:1000});
		
			$('.top').animate({top: 0}, function() { enable_buttons(); });
			$('.bottom').animate({top: 600}, function() { enable_buttons(); });
		} else if(state == 10) {
			$('.left').animate({top: 0});
			$('.right').animate({top: 0});
		
			$('.top').animate({top: -600}, function() { enable_buttons(); });
			$('.bottom').animate({top: 0}, function() { enable_buttons(); });
		}
	}
	
	function disable_buttons() {
		vid0.pause();
		//vid1.pause();
		
		console.log('button DISABLED');
		$('.prev').css('pointer-events', 'none');
		$('.next').css('pointer-events', 'none');
		$('.play').css('pointer-events', 'none');
		$('.pause').css('pointer-events', 'none');
	}
	
	function enable_buttons() {
		console.log('button ENABLED');
		$('.prev').css('pointer-events', 'auto');
		$('.next').css('pointer-events', 'auto');
		$('.play').css('pointer-events', 'auto');
		$('.pause').css('pointer-events', 'auto');
	}

	function playVideo(start, end) {
		var duration = (end - start) * 1000;

		vid0.currentTitme = start;
		vid0.play();
		
		setTimeout(function() {
			vid0.pause();
		}, duration);
	}
	
});