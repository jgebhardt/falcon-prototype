
$(document).on('ready', function(){
  $('.slidebutton').on('click', function(e){
    var v = $('.vid')[0];
    if (!v.paused){
      $(this).animate({top: 0});
      v.pause();
    } else {
      $(this).animate({top: -150});
      v.play();
    }
  });
});