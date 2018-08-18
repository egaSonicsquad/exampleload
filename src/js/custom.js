$(window).load(function() {
  $('.load-intro').width():80px;
  $('.loader').fadeOut("slow",function start(){
    start_animate();
  });
});

  function start_animate(){
    // setTimeout(function(){ 
    $('header').animate({
      top:"0",
      opacity:1
    },
      500,
    function(){
      $('.loader').hide();
    }
    )
  // }, 2000);
}
