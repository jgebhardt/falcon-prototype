
$(document).on('ready', function(){
	var window_width;
	var gap;
	var state = 0;
	var interval = null;
	var vid_timeout = null;
	var vid0 = $('.vid0')[0];
	var vid1 = $('.vid1')[0]
	
	initialize();
	
	$('.about').on('click', function(e) {
		vid1.pause();
		
		if(vid_timeout != null)
			clearTimeout(vid_timeout);
		
		$('.main_page').hide();
		$('.about_page').show();
	});
	
	$('.prev').on('click', function(e){
		vid1.pause();
		
		if(vid_timeout != null)
			clearTimeout(vid_timeout);
			
		clear_interval();
		prev_state();
	});
	
	$('.next').on('click', function(e){
		vid1.pause();
		
		if(vid_timeout != null) {
			console.log("Timeout removed");
			clearTimeout(vid_timeout);
		}
			
		clear_interval();
		next_state();
	});
	
	$('.play').on('click', function(e) {
		vid1.pause();
		
		if(vid_timeout != null)
			clearTimeout(vid_timeout);
		
		$('.play').hide();
		$('.pause').show();
	
		if(state == 10) {
			state = 0;
			render_state();
		}
		
		if(interval == null) {
			console.log("interval");
			interval = setInterval(function() {
				next_state();
			}, 1000);
		}
	});
	
	$('.pause').on('click', function(e) {
		$('.pause').hide();
		$('.play').show();
	
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
		
		
			$('.image0')
				.attr('src', 'img/screen-0a.png')
				.css({top: 120});
			
			
			$('.image0').animate({left: $(window).width()/2 - 500}, function() {enable_buttons();});
			$('.image1').animate({left:$(window).width()});
		} else if(state == 1) {
			$('.image0')
				.attr('src', 'img/screen-0a.png')
				.css({top: 120});
				
			
			$('.image1')
				.attr('src', 'img/screen-0b.png')
				.css({top: 120});
			
			$('.image0').animate({left: $(window).width()/2 - 500}, function() {enable_buttons();});
			$('.image1').animate({left:$(window).width()/2}, function() {enable_buttons();});
		
			$('.iphone0').animate({left: -280});
			$('.iphone1').animate({left: $(window).width()-100});
		
		} else if(state == 2) {
			
			
			$('.image0').animate({left:-700}, 
				function() {
					$('.image0')
						.attr('src', 'img/screen-1.png')
						.css({top: 150});
				
					$('.iphone0').animate({left: $(window).width()/2 - 500}, function() { enable_buttons();});
					$('.image0').animate({left: $(window).width()/2 - 150 }, function() { enable_buttons();});
				}
			);
			
			$('.image1').animate({left:$(window).width()});
			$('.iphone1').animate({left:$(window).width() - 100}, function() { enable_buttons();});
		
		} else if(state == 3) {
			$('.iphone0').animate({left: -280});
			$('.image0').animate({left: -700}, function() { 
			
				$('.image1')
						.attr('src', 'img/screen-2.png')
						.css({top: 150});
			
				$('.iphone1').animate({left: $(window).width()/2 + 150}, function() {enable_buttons(); playVideo(vid1, 0,5000);});
				$('.image1').animate({left: $(window).width()/2 - 450}, function() {enable_buttons();});
			
			});
		
			
		} else if(state == 4) {
			$('.image1').animate({left:$(window).width()});
			$('.iphone1').animate({left:$(window).width() - 100}, function() { 
			
				$('.image0')
					.attr('src', 'img/screen-3.png')
					.css({top: 150});
					
				$('.iphone0').animate({left: $(window).width()/2 - 500}, function() { enable_buttons();});
				$('.image0').animate({left: $(window).width()/2 -150}, function() { enable_buttons();});			
			
			});
			
		} else if(state == 5) {
			$('.iphone0').animate({left: -280});
			$('.image0').animate({left: -700}, function() { 
			
				$('.image1')
					.attr('src', 'img/screen-4.png')
					.css({top: 150});
			
				$('.iphone1').animate({left: $(window).width()/2 + 150}, function() {enable_buttons(); playVideo(vid1, 5600,10700);});
				$('.image1').animate({left: $(window).width()/2 - 450}, function() {enable_buttons();});
			
			});
		
		} else if(state == 6) {
			$('.image1').animate({left:$(window).width()});
			$('.iphone1').animate({left:$(window).width() - 100}, function() { 
			
					$('.image0')
						.attr('src', 'img/screen-5.png')
						.css({top: 150});
						
				$('.iphone0').animate({left: $(window).width()/2 - 500}, function() { enable_buttons();});
				$('.image0').animate({left: $(window).width()/2 -150}, function() { enable_buttons();});		
			});
		
			$('.image0').animate({left: -700});		
		} else if(state == 7) {
			$('.image0').animate({left: -700}, function() { 
				$('.image0')
					.attr('src', 'img/screen-6.png')
					.css({top: 150});
		
				$('.image0').animate({left: $(window).width()/2 -150}, function() { enable_buttons();});		
			});
			
		} else if(state == 8) {
			$('.iphone0').animate({left: -280});
			$('.image0').animate({left: -700}, function() {
				$('.image1')
					.attr('src', 'img/screen-7.png')
					.css({top: 150});
			
				$('.iphone1').animate({left: $(window).width()/2 + 150}, function() {enable_buttons(); playVideo(vid1, 10800,15000);});
				$('.image1').animate({left: $(window).width()/2 - 450 }, function() {enable_buttons();});
			
			});
			
			
		} else if(state == 9) {
			$('.image1').animate({left: $(window).width()});
			$('.iphone1').animate({left: $(window).width() + 150}, function() { 
				$('.image0')
					.attr('src', 'img/screen-8.png')
					.css({top: 150});
			
				$('.image0').animate({left: $(window).width()/2 - 450 }, function() { enable_buttons();});
			});
		
			
		} else if(state == 10) {
			$('.image0').animate({left: -900}, function() {
				$('.image1')
					.attr('src', 'img/screen-9.png')
					.css({top: 150});
					
				$('.image1').animate({left: $(window).width()/2 - 450 }, function() {enable_buttons();});
			});

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

	function playVideo(vid, start, end) {
	
		var duration = end - start;

		vid.currentTime = start / 1000;
		vid.play();
		
		
		vid_timeout = setTimeout(function() {
			vid.pause();
		}, duration);
	}
	
	$(window).resize(function() {
		window_width = $(window).width();
		console.log(window_width);
		
		initialize();
	});
	
	function initialize() {
		$('.main').css({width: $(window).width()});
		$('.image1').css({left: $(window).width()});
		$('.iphone1').css({left: $(window).width()-100});
		$('.splash').css({left: $(window).width()/2 - 120});
		
		
	}
});