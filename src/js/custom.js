


$(window).load(function() { 
   $('.load-intro').css('left','800px'); 
   $('.tittle-load').find('img').addClass('anim-load-two'); 
   setTimeout(function(){ 
    $('.loader').fadeOut('slow',function(){
      Allfunction.initheader();
      Allfunction.initAnime();

    });  
  }, 2000);
  
    
});

$('.positionIndicator').mouseenter(function(){
  if (!$(this).hasClass('active')){
    $(this).find('.positionIndicatorLine').animate({
      opacity:'1'
    });
     }
});
$('.positionIndicator').mouseleave(function(){ 
  if (!$(this).hasClass('active')){
    $(this).find('.positionIndicatorLine').animate({
      opacity:'.2'
    });
  }
 
});
 
$('#indicator_1').click(function(){
  if (!$(this).hasClass('active')){
  Allfunction.removeAnime();
  $('.info_project').fadeOut();
      $('.positionIndicator').removeClass('active');
      $(this).addClass('active');
      $('.slide').css("transform", "scale(0.8,0.8)");
      setTimeout(function(){ 
      $('#slide_1').animate({
        left:'0'
      }),

      $('#slide_2').animate({
        left:'100%'
      })
     
    },500);
    setTimeout(function(){
      $('.info_project').fadeIn();
      Allfunction.initAnime();
      $('.slide').css("transform", "scale(1, 1)");
    },1700);
  }
});
$('#indicator_2').click(function(){
  if (!$(this).hasClass('active')){
  Allfunction.removeAnime();
  $('.info_project').fadeOut(); 
  $('.positionIndicator').removeClass('active');
  $(this).addClass('active');
  $('.slide').css("transform", "scale(0.8,0.8)");
    setTimeout(function(){ 
      $('#slide_1').animate({
        left:'-100%'
      }),
      $('#slide_2').animate({
        left:'0'
      }) 
    },500);
    setTimeout(function(){
      $('.info_project').fadeIn();
      Allfunction.initAnime();
      $('.slide').css("transform", "scale(1, 1)");
    },1700);
  }
});
var Allfunction = {
   
  initheader:function (){ 
    $('.bg').delay(200).animate({ 
      opacity:1, 
      easing: "easeInQuint"
    }),
    $('header').delay(200).animate({
      top:"0",
      opacity:1
    }),
   
    $('#zonePositionIndicator').delay(600).animate({
      bottom:"44",
      opacity:1
    })
  },
  initAnime:function(){
    $('.one_n').addClass('anim-1'),
    $('.two_change').addClass('anim-2'),
    $('.info_project p').delay(900).animate({
      top:"0",
      opacity:1
    }),
    $('.info_project h2').delay(800).animate({
      top:"0",
      opacity:1
    }),
    $('.info_project h4').delay(700).animate({
      top:"0",
      opacity:1
    })
  },
  animCont_menu:function(){
    $('.col-50:nth-child(1)').animate({
      top:"0",
      opacity:"1"
    }),
    $('.col-50:nth-child(2)').delay(200).animate({
      top:"0",
      opacity:"1"
    }),
    $('.col-50:nth-child(3)').delay(300).animate({
      top:"0",
      opacity:"1"
    }), 
  
    $('.col-50:nth-child(4)').delay(400).animate({
      top:"0",
      opacity:"1"
    }),
    $('.socialZone').delay(500).animate({
      bottom:"20px",
      opacity:"1"
    })
  },
  animCont_menu_remove:function(){
    $('.col-50:nth-child(1)').animate({
      top:"50",
      opacity:"0"
    }),
    $('.col-50:nth-child(2)').delay(200).animate({
      top:"50",
      opacity:"0"
    }),
    $('.col-50:nth-child(3)').delay(300).animate({
      top:"50",
      opacity:"0"
    }), 
  
    $('.col-50:nth-child(4)').delay(400).animate({
      top:"50",
      opacity:"0"
    }),
    $('.socialZone').delay(500).animate({
      bottom:"0px",
      opacity:"0"
    })
  },
  removeAnime:function(){
    $('.one_n').removeClass('anim-1'),
    $('.two_change').removeClass('anim-2'),
    $('.info_project p').delay(900).animate({
      top:"-20",
      opacity:'0'
    }),
    $('.info_project h2').delay(800).animate({
      top:"-20",
      opacity:'0'
    }),
    $('.info_project h4').delay(700).animate({
      top:"-20",
      opacity:'0'
    })

  },
  menuanim_active:function(){
    $('.menubar_top').animate({
      left:"-250%",
      opacity:"0",
      easing:"easeOutQuart"
    });
    setTimeout(function(){ 
      $('.menu').addClass('p_fixed');
      $('.menubar_bottom').addClass('menuBtmTransform');
      $('.menubar_mid').addClass('menuTopTransform');
    },500);

  }
}
var menu = true;
$('.menu').click(function(){
  if(menu==true){
    Allfunction.menuanim_active();
    $('#zonePositionIndicator').fadeOut();
    $('.content-menu').fadeIn();
    $('.content-menu').animate({ 
      opacity:"1",
      left:"0" 
    });
    setTimeout(function(){
      Allfunction.animCont_menu();
    },1000);
    

    menu = false;
  }else if(menu == false){
    $('.menubar_top').animate({
      left:"0",
      opacity:"1",
       easing:"easeOutBounce"
    });
  

    $('.content-menu').animate({ 
      opacity:"1",
      left:"0" 
    });
    $('.content-menu').fadeOut();
    Allfunction.animCont_menu_remove();
    setTimeout(function(){ 
      $('.menu').removeClass('p_fixed');
      $('.menubar_bottom').removeClass('menuBtmTransform');
      $('.menubar_mid').removeClass('menuTopTransform');
      $('#zonePositionIndicator').fadeIn("slow");
    },500);
    menu = true;
  }
});
$('.menu').mouseenter(function(){
    if($('.menu').hasClass('p_fixed')){
      $('.menu').addClass('rotate180'); 
    }
});
$('.menu').mouseleave(function(){
  if($('.menu').hasClass('p_fixed')){
    $('.menu').removeClass('rotate180'); 
  }
});

$('.socialElement').mouseenter(function(){
  $(this).animate({
    opacity:".3"
  }),
    $(this).find('.lineHover').animate({
      left:"120%",
      width:"10px",
      opacity:"1"
    });
});
$('.socialElement').mouseleave(function(){
  $(this).animate({
    opacity:"1"
  }),
  $(this).find('.lineHover').animate({
    left:"-100px",
    width:"50px",
    opacity:"0"
  }); 
});