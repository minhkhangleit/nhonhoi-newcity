(function ($) {
	var methods = { on: $.fn.on, bind: $.fn.bind };
	$.each(methods, function(k){
	  $.fn[k] = function () {
	  var args = [].slice.call(arguments),
	  delay = args.pop(),
	  fn = args.pop(),
	  timer;
	  args.push(function () {
	  var self = this,
	  arg = arguments;
	  clearTimeout(timer);
	  timer = setTimeout(function(){
	  fn.apply(self, [].slice.call(arg));
	  }, delay);
	});
	  return methods[k].apply(this, isNaN(delay) ? arguments : args);
	 };
	});
}(jQuery));

var timex;
var show;
var News = 0;
var Details = 0;
var Click = 0;
var doWheel = true;
var doTouch = true;
var windscroll = $(document).scrollTop();
var timer;  


function NavClick() {
TweenLite.set($('.nav li'),{x:'150%', opacity:0});
 

	$('.nav-click').on('click', function() {
		
        if ($('.nav-click').hasClass('active')) {
			$('.navigation').scrollTop(0);
            $('.nav-click').removeClass('active');
            $('.overlay-menu, .navigation').removeClass('show'); 
			$('html, body').removeClass('no-scroll');
			  
			 if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			   StartPlay();
		    }
			
			  if($('.show-text .wave-ani').length){
		              $('.play-svg').trigger('click');
	           }
			 
			 TweenLite.set($('.nav li'),{x:'150%', opacity:0});
			  clearTimeout(timer);
			
        } else {
		   
		    $('.navigation').scrollTop(0);
            $('.nav-click').addClass('active');
			$('.overlay-menu, .navigation').addClass('show');
			$('html, body').addClass('no-scroll');
			
			if ($('.youtube-video iframe').length) {
                 $('.pause-button').trigger('click');
              }
			  
			if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			  StopPlay()
		    }
			
			 if($('.youtube-video iframe').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
                    $('.play-button').trigger('click');
                }
			   clearTimeout(timer);
			 
			if($('.wave-ani').hasClass('in-play')){
			    $('.stop-svg').trigger('click');
			 }
			
			$('.nav li').each(function(index, element) {
                var box = $(this);
				timer = setTimeout(function(){ TweenLite.to($(box),0.6,{x:'0%',opacity:1,delay:0.3,ease:Quad.easeOut});}, (index+1) * 100);
             });
			  
			}
			
		//OutBox();
			
        return false;
		
    });
	
	 $('.subscribe').on('click', function(){
		  document.getElementById("register").reset();
			  $('html, body').addClass('no-scroll');
			  $('.register-form').scrollTop(0);
			  $('.subscribe').addClass('active');
			  $('.register-form, .overlay-form').addClass('show');
			  $('.require-col').children().each(function(i){
			    var box = $(this);
			     $(box).addClass('show');
		      });
			  
		     $('.show-box-pic').removeClass('showup');
			 $('.all-dot-top a, .note-facilities li').removeClass('current');
			 
			 if($('.wave-ani').hasClass('in-play')){
			    $('.stop-svg').trigger('click');
			 }
			 
			 if ($('.youtube-video iframe').length) {
                 $('.pause-button').trigger('click');
              }
			  
			  if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			   StopPlay()
		     }
        return false;
			  
	});
	
	  $('.close, .overlay-form').on('click', function(){
		  Click = 1;
		  $('html, body').removeClass('no-scroll');
		  $('.register-form').scrollTop(0);
		  $('.subscribe').removeClass('active');
		  $('.register-form,.overlay-form').removeClass('show');
		  $('.register-form .title-main, .register-form .require-col .input-text, .register-form .input-area, .register-form .input-but').removeClass('show');
		  
		   if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			   StartPlay()
		    }
			
			if($('.youtube-video iframe').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
                 $('.play-button').trigger('click');
             }
			 
			 if($('.show-text .wave-ani').length){
		          $('.play-svg').trigger('click');
	         }	
				
	    return false;
			  
	 });
	
	
	$('.overlay-menu').on("click" ,function() {
	  if($('.nav-click').hasClass('active')){
		$('.nav-click').trigger('click');
	  }
   });
   
	
}


function BoxSlide() {
	
	var groupLength= $('.group-central').length,
        groupIndex = $('.group-central').index(),
		startAni = false,
		Direction = 'down';

	 TweenLite.set($('.group-central').not($('.group-central')[groupIndex]),{y:'100%'});
	
	function Modify(){
		setTimeout(function(){
			TweenLite.set($('.group-central').not($('.group-central')[groupIndex]),{y:'100%'});
			startAni = false;
			if($('.group-central.show-text').find('.map-box').length){
				     $('.put-show').trigger('click');
			     }
		},1000);
	};
	
	

	function GoUp(){
		startAni = true;
		 TweenLite.set($('.group-central'),{zIndex:""});
		$('.footer').removeClass('end');
		$('.wheel').addClass('show');
		$('.go-top').removeClass('show');
	    $('.box-nav li').removeClass('current');
		
		
		 
			if(timer > 0){
			  clearTimeout(timer);
			  timer = 0;
		   }
		   
		   if($('.video-cover-inline').length){
			   StopPlay();
		   }
		   
		   if ($('.youtube-video iframe').length) {
			   $('.pause-button').trigger('click');
			}
			
			if($('.wave-ani').hasClass('in-play')){
			    $('.stop-svg').trigger('click');
			 }
			
		  	if ($('#about-page').length) {
			   requestAnimationFrame(SvgCollapse);
			}
		  //OutBox();

		TweenLite.fromTo($('.group-central')[groupIndex],0.8,{zIndex:2},{y:'0%',ease:Quad.easeOut, onComplete:function(){
			$('div').removeClass('sunlight lighting rotatenew');
			$('.group-central').removeClass('show-text');
			$('.group-central').eq(groupIndex).addClass('show-text');
			$('.box-nav li').eq(groupIndex).addClass('current');
			
			if($('.box-facilities, .product-home').length){
				 CancelMove();
		    }
			
				
			  if($('.show-text .wave-ani').length){
		          $('.play-svg').trigger('click');
	           }
			
			 
			  if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			        StartPlay();
				}
				
			 if($('.youtube-video iframe').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
                    $('.play-button').trigger('click');
                }
				
			 if($('.group-central[data-name="home-banner"], .group-central[data-name="home-intro"]').hasClass('show-text')){
                    $('.container').addClass('show');
                }else{
					$('.container').removeClass('show');
				}	
				
			 if($('.group-central[data-name="home-location"]').hasClass('show-text')){
                    $('.map-img').addClass('show');
                }
				
			 if($('.group-central.show-text .box-facilities, .group-central.show-text .product-home').length){
				   MoveBackground();
			   }
			if($('.scrollA').length){
				setTimeout(function(){ScrollNiceA()},500);	
			}

			   if($('.group-central:last-child').hasClass('show-text')){
				$('.wheel').removeClass('show');
				$('.go-top').addClass('show');
		     }
			 
			 
			 if ($('#home-page').length && $('.group-central[data-name="contact"]').hasClass('show-text')) {
				  setTimeout(function(){ 
				  if(Click==0){
				     $('.subscribe').trigger('click');
				  }
				  },2000);
			}
			 
			 if ($('#about-page').length && $('.group-central').hasClass('show-text')) {
				  requestAnimationFrame(SvgExpand);	 
			}
			if($('#about-page').length || $('#library-page').length || $('#contact-page').length || $('#product-page').length || $('#facilities-page').length ){
				var tmpurl = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('href');
				var tmptitle = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-title');
				var tmpkeyword = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-keyword');
				var tmpdescription = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-description');
				var tmpdataname = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-page');
				changeUrl(tmpurl,tmptitle,tmpdescription,tmpkeyword,tmpdataname,tmptitle,tmpdescription);
			 }
			  
			  Modify();
			
			}});
			
	 }
	
	
	function GoDown(){
		startAni = true;
		 TweenLite.set($('.group-central'),{zIndex:""});
		$('.footer').removeClass('end');
		$('.wheel').addClass('show');
		$('.go-top').removeClass('show');
	    $('.box-nav li').removeClass('current');
        
		
		 
			if(timer > 0){
			  clearTimeout(timer);
			  timer = 0;
		   }
		  
            if($('.video-cover-inline').length){
			   StopPlay();
		    }
			
			if ($('.youtube-video iframe').length) {
                 $('.pause-button').trigger('click');
            }
			
		    if($('.wave-ani').hasClass('in-play')){
			    $('.stop-svg').trigger('click');
			 }
			if ($('#about-page').length) {
			   requestAnimationFrame(SvgCollapse);
			}
		  //OutBox();
		  
	TweenLite.fromTo($('.group-central')[groupIndex],0.8,{y:'-100%',zIndex:2},{y:'0%',ease:Quad.easeOut, onComplete:function(){
		$('div').removeClass('sunlight lighting rotatenew');
		$('.group-central').removeClass('show-text');
		$('.group-central').eq(groupIndex).addClass('show-text');
		$('.box-nav li').eq(groupIndex).addClass('current');
				
		if($('.box-facilities, .product-home').length){
			CancelMove();
		} 

		if($('.show-text .wave-ani').length){
			$('.play-svg').trigger('click');
		}
		
		if($('.video-cover-inline').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			StartPlay();
		}
		
		if($('.youtube-video iframe').length && $('.group-central[data-name="video-home"]').hasClass('show-text')){
			$('.play-button').trigger('click');
		}
			

		if($('.scrollA').length){
			setTimeout(function(){ScrollNiceA()},500);	
		}

			
		if($('.group-central[data-name="home-banner"], .group-central[data-name="home-intro"]').hasClass('show-text')){
			$('.container').addClass('show');
		}else{
			$('.container').removeClass('show');
		}
			
		if($('.group-central[data-name="home-location"]').hasClass('show-text')){
			$('.map-img').addClass('show');
		}
		
		if($('.group-central.show-text .box-facilities, .group-central.show-text .product-home').length){
			MoveBackground();
		}
		
		if($('.group-central:last-child').hasClass('show-text')){
		$('.wheel').removeClass('show');
		$('.go-top').addClass('show');
		}
		
		 if ($('#home-page').length && $('.group-central[data-name="contact"]').hasClass('show-text')) {
				  setTimeout(function(){ 
				  if(Click==0){
				     $('.subscribe').trigger('click');
				  }
				  },2000);
		}

		if ($('#about-page').length && $('.group-central').hasClass('show-text')) {
			requestAnimationFrame(SvgExpand);	 
		}

		   
		if($('#about-page').length || $('#library-page').length || $('#contact-page').length || $('#product-page').length || $('#facilities-page').length ){
			var tmpurl = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('href');
			var tmptitle = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-title');
			var tmpkeyword = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-keyword');
			var tmpdescription = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-description');
			var tmpdataname = $('.box-nav li, .sub-nav li').eq(groupIndex).find('a').attr('data-page');
			changeUrl(tmpurl,tmptitle,tmpdescription,tmpkeyword,tmpdataname,tmptitle,tmpdescription);
		}
		   
			Modify();
			
			}});
			
	
		
	};
	


	
	var slideTimer;
	function StartTimer(){
		slideTimer = setInterval(function(){ StartSlide(); }, 10000);
		function StartSlide(){
			if ( groupIndex >= groupLength- 1 ){
				groupIndex = 0 ;
			}else{
				groupIndex++;
			}
			GoUp();
		};
	}
	
	 
	 
	
 
    if ($(window).width() > 1100  && !$('body').hasClass('fullscreen')) {
		
	 
	  $('.box-slider:not(.single)').on('mousewheel', function (e) {
		
		  var Direction;
		  if(startAni === false)Direction = (function () {
			  var delta = Math.max(-1, Math.min(1,
			  (e.wheelDelta || -e.deltaY || -e.detail)));
			  return delta;
		  }());
		//console.log(Direction);
		  
		  if ($(window).width() > 1100  && !$('body').hasClass('fullscreen')) {
		  
		  if( $('.group-central')[groupIndex] != null && parseInt(Direction) === 1 ){
			  if ( groupIndex >= groupLength- 1 ){
				  groupIndex = 0 ;
			  }else{
				  groupIndex++;
			  }
			  GoUp();
		  }else if ( $('.group-central')[groupIndex] != null && parseInt(Direction) === -1 ){
			  if ( groupIndex <= 0 ){
				  groupIndex = groupLength-1;
			  }else{
				  groupIndex--;
			  };
			  GoDown();
		  };
		  
	   }
	  
	  });
	  
	  
	   $('.box-slider:not(.single)').on('swipeup', function(e, touch) {
			if (!doTouch) {
			  return;
		   }
			 doTouch = false;
			if ($(window).width() > 1100   && !$('body').hasClass('fullscreen')) {
			  $('.box-nav li.current').next().trigger('click');
			  $('.sub-nav li.current').next().trigger('click');
			setTimeout(turnWheelTouch, 500);
			}
			 }).on('swipedown', function(e) { 
		  
			   if (!doTouch) {
				return;
			 }
			   doTouch = false;
			  if ($(window).width() > 1100   && !$('body').hasClass('fullscreen')) {
				$('.box-nav li.current').prev().trigger('click');
				$('.sub-nav li.current').prev().trigger('click');
			  
			  setTimeout(turnWheelTouch, 500);
			  }
		   });
	  
	}




      $(".box-nav li").on( 'click',function() {
		var navIndex = $(this).index();
		if (startAni){
			return false;
		}else if ( !startAni && navIndex > groupIndex ){
			groupIndex = navIndex;
			GoUp();
		}else if ( !startAni && navIndex < groupIndex ){
			groupIndex = navIndex;
			GoDown();
		};
		
		//OutBox();
		return false;
	  });
	 
     
	 setTimeout(function(){  
	  $('.group-central:first-child').addClass('show-text'); 
	  $('.box-nav li:first-child').addClass('current'); 
	  
		if($('.group-central[data-name="home-banner"], .group-central[data-name="home-intro"]').hasClass('show-text')){
			  $('.container').addClass('show');
		} 
		 
	  },500);



}



function SlidePicture() {
	
	if( $('.pic-center').length){
		$('.pic-center').each(function(index, element) {
            
	    $(element).on('initialized.btq.slidebox', function () {
			  var Length = $('.pic-center').find(".slide-item").length;

			  if ($(window).width() >= 1000) {
				  if (Length < 2) {
					  $(element).addClass('center-slidebox onlyone');
				  } else {
					  $(element).removeClass('center-slidebox');
				  }
			  
			  } else {
				  $(element).removeClass('center-slidebox');

			  }
		 
		}).BTQSlider({
		 rewind: true,
		 margin:10,
		 smartSpeed: 600,
		 nav: true,
		 dots : false,
		 dotNum:false,
         responsiveRefreshRate : 150,
         responsive:{
			0:{
			   items:1,
			   nav: false,
			   margin:0,
			   dots : true,
		 	   dotNum:true,
			},
			600:{
			   items:1,
			   nav: false,
			   margin:5,
			   dots : true,
		 	   dotNum:true,
			},
			1000:{
			   items:2,
			   nav: false,
			   margin:10,
			},
			1100:{
			   items:2,
			   nav: true,
			   margin:10,
			}
		  }
           });
		 });
	}
		
		
		
	 $('.slider-brochure').BTQSlider({
		 rewind: true,
		 margin:0,
		 smartSpeed: 600,
		 items:1,
		 nav: true,
		 dots : true,
		 dotNum:true,
		 responsiveRefreshRate : 150,
      });
	
	$('.slider-1').BTQSlider({
		 rewind: true,
		 margin:0,
		 smartSpeed: 600,
		 items:1,
		 nav: true,
		 responsiveRefreshRate : 150,
		 responsive:{
			0:{
			   nav: false,
			   dots : true,
		 	   dotNum:true
			},
			
			700:{
			   nav: false,
			   dots : true,
		 	   dotNum:true
			},
			1100:{
			   nav: true,
			   
			}
		  }
      });

	$('.detail-slider').each(function(index, element) {
		  $(element).on('initialized.btq.slidebox', function () {
		     $(this).parent().find('.thumb-slider .thumb-pic:first').addClass('current');
			 
		 }).BTQSlider({
		 rewind: true,
		 margin:10,
		 smartSpeed: 600,
		 items:1,
		 nav: true,
		 dots : false,
		 center:true,
		 responsiveRefreshRate : 150,
		 responsive:{
			0:{
			   nav: false,
			},
			
			1000:{
			   nav: false,
			},
			1100:{
			   nav: true,
			   
			}
		  }
        });
	  
	   $(element).on( 'translate.btq.slidebox', function(e) {
		 // $(this).parent().find('.thumb-slider .thumb-pic').removeClass('current');
       });
  
       $(element).on( 'translated.btq.slidebox', function(e) {
		 $(this).parent().find('.thumb-slider .thumb-pic').removeClass('current');  
		 var Index =  $(this).find('.slide-item.center').index();
		$(this).parent().find('.thumb-slider .thumb-pic[data-slide= "' + Index + '"]').addClass('current');
		
    }); 
	
	   var Thumb = $(element).parent().find('.thumb-slider .thumb-pic'); 
	      $(Thumb).on("click", function(){
			$(Thumb).removeClass('current');
			$(this).addClass('current');
		   var index = $(this).attr('data-slide');
		    $(element).data('btq.slidebox').to(index, 600, true);
	    });

        
    });
		
		
	
        

}



function VideoLoad(idx, Source) {
    $.ajax({url: idx, cache: false, success: function(data) {
            $('.allvideo').append(data);
			
         var length = $('#view-video').length;
		  if($('#view-video').length){
			 var ThisVideo = document.getElementById("view-video");
			  function playVid() {
				  ThisVideo.play();
			  }
			  function pauseVid() {
				  ThisVideo.pause();
			  }
			  
		 }
		 
		  if(Source !== undefined){
			   $('.video-wrap').append(Source)
			   $('.loadx').fadeOut(400, 'linear', function() {
                $('.loadx').remove();
              });
			}else{
			   $('.loadx').fadeOut(400, 'linear', function() {
				  if($('#view-video').length){
					playVid();
				  }
				   $('.loadx').remove();
					
			   });
				
			 }
		 

            $('.close-video').addClass('show');
			
            $('.close-video').on( 'click',function() {
                 if($('#view-video').length){
                    pauseVid();
                }
			   
                $('.allvideo').fadeOut(500, 'linear', function() {
                    $('.overlay-dark, .close-video').removeClass('show');
                    $('.allvideo .video-list').remove();
                    $('html, body').removeClass('no-scroll');
					
					if($('body').hasClass('scroll')){
					   ScrollBody();
				    }

                    if($('.to-scrollV').length) {
                        var top = $('.to-scrollV').offset().top;
                        if($(window).width() < 1100) {
                            $('html, body').scrollTop(top);
                        }
						 $('.to-scrollV').removeClass('to-scrollV');
                    }


                });

            });
        }


    });
}





function AlbumLoad(url,num) {
     $.ajax({url: url, cache: false, success: function(data) {

	 if(TouchLenght == false  || !isTouchDevice){
		  if($('.slide-slidebox').length){
		   $('.slide-slidebox').trigger('stop.btq.autoplay');
		  }
     }
	 
	  if($('.slide-video-playing').length){
		   $('.pause-button').trigger('click');
	  }
	 
	  $('.all-album').append(data);
	  
	  if($('.all-album .album-load').length >1){
		  $('.all-album .album-load').last().remove();
	  }
	  
	  $(".pic-name > h3").lettering('words').children("span").lettering().children("span").lettering();
	  
	   $('.album-center').on('initialized.btq.slidebox', function () {
		   
		$('.container-zoom').each(function(index, element) {
			  new PinchZoom.default(element, {
				  draggableUnzoomed: false,
			  });
		  });
		   
	  $('.album-center').find('.slide-item.active').addClass('selected'); 
		 addText();
			 
	    }).BTQSlider({
		items:1,
		margin:0,
	    smartSpeed:600,
	    loop:false,
	    dots: true,
		nav:true,
		responsiveRefreshRate : 150,
			
        }).on('changed.btq.slidebox', function(el) {
		     if($('.thumbs').length){
			    syncPosition(el);
			 }
		}).on( 'translate.btq.slidebox', function(el) {
		    $('.album-center').find('.slide-item').removeClass('selected');
	    }).on('translated.btq.slidebox', function(el) {
			 $('.album-center').find('.slide-item.active').addClass('selected'); 
			 addText();
	    });
		
	  
	  
	  $('.thumbs').on('initialized.btq.slidebox', function () {
		  var Length =  $('.thumbs').find(".slide-item").length	
	 
	  if($(window).width() >= 600){
	      if(Length <= 6){
			   $('.thumbs').addClass('center-slidebox');
		  }else{
			  $('.thumbs').removeClass('center-slidebox');
		  }
	  }else{
		   if(Length <= 3){
			   $('.thumbs').addClass('center-slidebox');
		  }else{
			  $('.thumbs').removeClass('center-slidebox');
		  }
	  }
		  
      $('.thumbs').find(".slide-item").eq(0).addClass("current");
			}).BTQSlider({
			margin:5,
			smartSpeed:300,
			dots: false,
			nav:false,
			responsiveRefreshRate : 100,
			responsive:{
				0:{
					items:3,
					slideBy: 3,
				},
				
				600:{
					items:6,
					slideBy: 6,
				},
			 }
       });
	  
	 
	  function syncPosition(el) {
				var Count = el.item.Count-1;
				var Current = el.item.index;
			 
				  if(Current < 0) {
					 Current = Count;
				  }
				  if(Current > Count) {
					Current = 0;
				   }    
		
		   $('.thumbs').find(".slide-item").removeClass("current").eq(Current).addClass("current");
		   var Onscreen =  $('.thumbs').find('.slide-item.active').length - 1;
		   var Start =  $('.thumbs').find('.slide-item.active').first().index();
		   var End =  $('.thumbs').find('.slide-item.active').last().index();
			//console.log(End)
			
			//console.log(Start)
			if (Current >= End -1 ) {
			   $('.thumbs').data('btq.slidebox').to(Current, 300, true);
			}
			
			if (Current <= Start) {
			   $('.thumbs').data('btq.slidebox').to(Current - Onscreen, 300, true);
			}
			
	   }
	
  
	 $('.thumbs').on("click", ".slide-item", function(e){
		e.preventDefault();
		var Num = $(this).index();
		$('.album-center').data('btq.slidebox').to(Num, 600, true);
	  });
		
	  
	  
	  $('.all-album').on('mousewheel', '.album-center', function (e) {
			if (e.deltaY>0) {
				if (!doWheel) {
			     return;
		       }
			   doWheel = false;
				 $('.album-center').trigger('prev.btq.slidebox');
				  setTimeout(turnWheelTouch, 500);
			} else {
					if (!doWheel) {
			     return;
		       }
			   doWheel = false;
				 $('.album-center').trigger('next.btq.slidebox');
				  setTimeout(turnWheelTouch, 500);
			}
			e.preventDefault();
		});
	   
	  function addText() {
			  clearTimeout(timex);
			  $('.pic-name').removeClass('move');	
			  $('.pic-name h3').children().children().removeClass('move');
			  $('.selected').find('.pic-name').addClass('move');
			  $('.move h3').children().children().each(function(i){
					  var box = $(this);
					  var timex = setTimeout(function(){$(box).addClass('move')}, (i+1) * 50);
			  });
	  
	  }
	  
	  
	  $('.album-load').animate({'opacity':1}, 100, 'linear', function() {
			  $('.loadx').fadeOut(400, 'linear', function() {
				  $('.loadx').remove();
			  });
	  });
	  

	  $('.close-album').on("click" ,function() {
			  $('.all-album').fadeOut(500, 'linear', function() {
					  $('.overlay-dark').removeClass('show');
					  $('.album-load').remove();
			  });
				
				
			  $('html, body').removeClass('no-scroll');
			  
			  return false;
			  
	   });
	  

   }});
}

function LoadProgress(url, Text) {
	  
	      if( $('.scrollB').children().length){
	         $('.scrollB').children().remove();
	     }
	   
       $.ajax({url: url, cache: false, success: function(data) {
			   
			   
			   $('.scrollB').append(data);
			   
			   $('.pic-progress').each(function(index, element) {
					var IMG  = $(element).find('img').attr('src');
					 if(IMG){
						 var SRC = IMG.replace(/(^url\()|(\)$|[\"\'])/g, '');
						 $(element).css({'background-image': 'url(' + SRC + ')'});
					 }
					
				});
			 
			  $('.progress-list').stop().animate({'opacity': 1}, 500, 'linear', function() {
                  if ($(window).width() > 1100) {
					 setTimeout(function(){ScrollNiceB()}, 800);
				  }
				  
				  Option();
				  
				   $('.box-progress').on( 'click',function(e){
				    e.preventDefault();
				     $(this).find('.view-album').trigger('click');
			       }); 
			  
				  
				 
				  $('.box-library h2').text(Text).removeClass('fadeout').addClass('fadein');
				     
				 
				  $('.box-progress').each(function(i){
		             var box = $(this);
		             setTimeout(function(){$(box).addClass('show')}, (i+1) * 100);
	              }); 
					 
				  $('.select-list').addClass('fadein');
					 
				  $('.loadx').fadeOut(400, 'linear', function() {
			         	 $('.loadx').remove();
		           });
                
			  }); 
			  

        }
		
    });
	
}

function NewsLoad(url, ShowDetails) {
	      if( $('.news-text').length){
	       $('.news-text').remove();
	   }
	   
	   $('.news-list').addClass('hide');
	   $('.scrollB').getNiceScroll().hide();
	   
       $.ajax({url: url, cache: false, success: function(data) {
			   
			   $(ShowDetails).find('.news-content').append(data);
               
			  
			    if ( $(window).width() <= 1100) {
			      $('.news-text img').addClass('zoom-pic');
				}else{
				  $('.news-text img').removeClass('zoom-pic');
				}
				
				 ZoomPic();
			  
			  $('.news-text a, .news-text p a').on('click', function (e) {
	               e.preventDefault();
	               var  url = $(this).attr('href');
	              window.open(url, '_blank');
                  return false;
               });  
			   
			  $('.subscribe, .bottom-text, .hotline').removeClass('show');
			 $(ShowDetails).find('.news-content').stop().animate({'opacity': 1}, 100, 'linear', function() {
                      
				      $(ShowDetails).addClass('show');
					  
				     if($('.dot-ani').length){
				            AddDot();
		              }
				     
					$('.click-hover').fadeIn(600, 'linear');
					
					$('.loadx').fadeOut(600, 'linear', function() {
						 $('.news-content').addClass('show');
						 if ($(window).width() > 1100) {
							 
							setTimeout(function(){ScrollNiceC();}, 500);
						}else{
							detectBut();
						}
						
			         	 $('.loadx').remove();
		             });
					 
                      
			  }); 
			 
			  
			  $('.close-news, .click-hover').on('click',function() {
				  var tmpurl = $('.nav li.current a').attr('href');
				  var tmptitle = $('.nav li.current a').attr('data-title');
				  var tmpkeyword = $('.nav li.current a').attr('data-keyword');
				  var tmpdescription = $('.nav li.current a').attr('data-description');
				  var tmpdataname = $('.nav li.current a').attr('data-name');
				  changeUrl(tmpurl,tmptitle,tmpdescription,tmpkeyword,tmpdataname,tmptitle,tmpdescription);
				 
				       $('.click-hover').fadeOut(600, 'linear');
				       $('.colum-box-news').removeClass('show');
                       $('.news-content').stop().animate({'opacity': 1}, 800, 'linear', function(){
					   $('.scrollC').scrollTop(0);
					   $('.scrollC').getNiceScroll().remove();
					   $('.news-content').children().remove();
					   $('.subscribe, .bottom-text, .hotline').addClass('show');
					   $('.box-cover').removeClass('hide');
					   $('.news-list').addClass('fadein').removeClass('hide');
					   $('div').removeClass('sunlight lighting rotatenew');
					   ScrollNiceB();
						
					//STATIC
                    //if (window.location.hash.length) {
                    //    history.pushState('', document.title, location.href.replace(/#.*/, ''));
                    //}
						
						 
						
				});
               
		    });
			

        }
		
    });
	
}



function CancelMove() {
	$('.product-home, .box-facilities').removeClass('moving');
	TweenLite.set($('.pic-product, .bg-clip, .box-img, .item-faci-home'),{x: 0,y: 0, z: 0});
}

function MoveBackground() {
	
    var Request = null;
	var Mouse = { X: 0, Y: 0 };
	var CX = $(window).width() / 2;
	var CY = $(window).height() / 2;
	
	 $('.show-text .product-home, .show-text .box-facilities').addClass('moving');
    
	function Cancel() {
		TweenLite.to('.moving  .pic-product', 1,   {x: 0,y: 0, z: 0, ease:Power0.easeOut});
		TweenLite.to('.moving  .bg-clip', 1, {x: 0,y: 0, ease:Power1.easeOut});
		TweenLite.to('.moving  .box-img', 1,   {x: 0,y: 0, z: 0, ease:Power2.easeOut});
		TweenLite.to('.moving  .item-faci-home:nth-child(1)', 1,   {x: 0,y: 0, z: 0, ease:Power0.easeOut});
		TweenLite.to('.moving  .item-faci-home:nth-child(2)', 1,   {x: 0,y: 0, z: 0, ease:Power0.easeOut});
		TweenLite.to('.moving  .item-faci-home:nth-child(3)', 1,   {x: 0,y: 0, z: 0, ease:Power0.easeOut});
	}
	 
	  $('.nav-click, .degree, .hotline, .subscribe, .box-nav').on('mouseenter',function() {
		 cancelAnimationFrame(Request);
		 Cancel();
	 })

	function Update() {
		DX = Mouse.X - CX;
		DY = Mouse.Y - CY;
		MoveX = (DY / CY);
		MoveY = - (DX / CX);
		Radius = Math.sqrt(Math.pow(MoveX,2) + Math.pow(MoveY,2));
		Degree = (Radius * 2);
		    TweenLite.to('.moving  .pic-product', 1, {x: MoveX * 50,y: MoveY * 50, z: Degree * 100, ease:Power0.easeOut});
			TweenLite.to('.moving  .bg-clip', 3, {x: MoveX * 80,y: MoveY * 80, ease:Power1.easeOut});
			TweenLite.to('.moving  .box-img', 1, {x: MoveX * 30,y: MoveY * 30, z:0, ease:Power2.easeOut});
			TweenLite.to('.moving  .item-faci-home:nth-child(1)', 2, {x: MoveX * 80,y: MoveY * 80, z: Degree * 30, ease:Power0.easeOut});
			TweenLite.to('.moving  .item-faci-home:nth-child(2)', 1, {x: MoveX * 50,y: MoveY * 50, z: Degree * 160, ease:Power1.easeOut});
			TweenLite.to('.moving  .item-faci-home:nth-child(3)', 2, {x: MoveX * 100,y: MoveY * 100, z: Degree * 120, ease:Power2.easeOut});
			
	
	}

if ($(window).width() > 1100) {
	$('.box-slider').on('mousemove',  function(event) {
		Mouse.X = event.pageX;
		Mouse.Y = event.pageY;
		cancelAnimationFrame(Request);
		Request = requestAnimationFrame(Update);	
	});
	
}else{
	$('.box-slider').on('mousemove',  function() {
		 cancelAnimationFrame(Request);
		 Cancel();
	});
	
}
  
$(window).resize(function() {
	if($(window).width() > 1100){
		CX = $(window).width() / 2;
		CY = $(window).height() / 2;
	}else{
		Cancel()
	}
});	


}



//LOAD POPUP
function popupLoad(url) {
$.ajax({url: url, cache: false, success: function(data) {
  $('.details-content').remove();
  $('body').append(data);
  if($('form').length){
    FocusText();
  }
  if($(window).width() <= 840){
	   $('.details-text img').addClass('zoom-pic');
	   ZoomPic();
	}
  
  $('.details-content').stop().animate({'opacity': 1}, 500, 'linear', function() {
		  $('.details-content').scrollTop(0);	
		  $('.details-center').addClass('fadeinup');
		  $('.loadx').fadeOut(400, 'linear', function() {
		
			$('.loadx').remove();
	     });
		  
  });
  
    
    $('.close-popup, .details-content span').on('click',function() {
		  $('.details-content').animate({'opacity': 0}, 500, 'linear', function() {
			  $('.details-content').remove();
			  $('.overlay-dark').removeClass('show');
			  $('html, body').removeClass('no-scroll');
			 
		  });
		
		  return false;
  
  });
		
}});
}



function ZoomMap() {
		 $('.viewer').addClass('desktop').addClass('fadein');
		  
		 var $viewer = $('.viewer');
		  $viewer.find('.panzoom').panzoom({
			$zoomIn: $(".pic-zoom-in"),
			$zoomOut: $(".pic-zoom-out"),
		
			  maxScale: 3,
			  minScale: 1,
			  increment: 0.3,
			  contain: 'automatic'
			  }).panzoom('zoom');
	  
	     var $panzoom = $viewer.find('.panzoom').panzoom();
          $panzoom.on('mousewheel.focal', function( e ) {
            e.preventDefault();
            var delta = e.delta || e.originalEvent.wheelDelta;
            var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
            $panzoom.panzoom('zoom', zoomOut, {
              increment: 0.1,
              animate: false,
              focal: e
            });
          });
	 
	   $('.map-img').addClass('show'); 
	   ScaleMap();
	    setTimeout(function(){ $('.apartment-pointer').addClass('show');}, 1000);
}

function ScaleMap(){
	$('.panzoom').css({'-webkit-transform':'matrix(1, 0, 0, 1, 0, 0)', 'transform':'matrix(1, 0, 0, 1, 0, 0)'});
	   var scaleMap =  $(window).height()/1100;
	   $('.map-img.show').scale(scaleMap);
}




function FocusText(){
  $('input, textarea').focus(function (e) {
	     $(this).parent().find('.holder').addClass('hide');
  }).focusout(function (e) {
	  if ($(this).val() == "") {
		  $(this).parent().find('.holder').removeClass('hide');
	  }
  });
				
}

function ScrollNiceA() {
	if($(window).width() <= 1100){
		$('.scrollA').getNiceScroll().remove();
		$('.scrollA').css({'overflow-x':'visible','overflow-y':'visible'});
	}else{
		$('.show-text .scrollA').css({'overflow-x':'hidden','overflow-y':'hidden'});
        $('.show-text .scrollA').getNiceScroll().show();
        $('.show-text .scrollA').niceScroll({touchbehavior:true, horizrailenabled: false, cursordragontouch:true,grabcursorenabled: false});
		$('.show-text .scrollA').animate({scrollTop: "0px"});
     }
	
}

function ScrollNiceB() {
   if($(window).width() <= 1100){
		$('.scrollB').getNiceScroll().remove();
		$('.scrollB').css({'overflow-x':'visible','overflow-y':'visible'});
	}else{
		$('.scrollB').css({'overflow-x':'hidden','overflow-y':'hidden'});
        $('.scrollB').getNiceScroll().show();
        $('.scrollB').niceScroll({touchbehavior:true, horizrailenabled: false, cursordragontouch:true,grabcursorenabled: false});
		 if(News == 0){
		  $('.scrollB').animate({scrollTop: '0px'});
		 }
     }
}
function ScrollNiceC() {
   if($(window).width() <= 1100){
		$('.scrollC').getNiceScroll().remove();
		$('.scrollC').css({'overflow-x':'visible','overflow-y':'visible'});
	}else{
		$('.scrollC').css({'overflow-x':'hidden','overflow-y':'hidden'});
        $('.scrollC').getNiceScroll().show();
        $('.scrollC').niceScroll({touchbehavior:true, horizrailenabled: false, cursordragontouch:true,grabcursorenabled: false});
		$('.scrollC').animate({scrollTop: "0px"});
     }
}



function ScrollNiceHide() {
    $('.scrollA, .scrollB, .scrollC').getNiceScroll().remove();
}

function LinkPage(){
	
	  $('.link-home, .link-load, .view-more, .pointer-map, .go-details, .go-page,.view-detail, .sub-news li a, .box-product').on('click',function(e){
	   e.preventDefault();
	   
	   $('.mask').removeClass('finish').addClass('show-page');
	     var linkLocation =  $(this).attr("href");
	     $('.container, .footer, .slogan, .go-top').stop().animate({'opacity':1},600 ,'linear',function(e){
		      window.location = linkLocation;
		 });
	 	return false;

	});
	
	$('.link-blank, .item-brochure').on("click", function(e) {
            e.preventDefault();
            var  url = $(this).find('a').attr('href');
            window.open(url, '_blank');
            return false;
      });


	
}

function ContentLoad(){
	ResizeWindows();
	LinkPage();
	FocusText();
	NavClick();
	Option();
	ZoomPic();

	  //SET CURRENT BUTTON
   //var IDPage = $('.container').attr('id');
	//$('.nav li a[data-name= "' + IDPage + '"]').parent().addClass('current');
	


  	
  	$('html, body').removeClass('no-scroll'); 

	if($('.section-first').length){
		$('.section-first').addClass('on-show');
	}
	
	if(!$('#home-page').length){
		 $('.logo').css({'cursor':'pointer'});
		 $('.logo').on( 'click',function() {
			 $('.link-home').trigger('click');
		});
		
	}

	$('.header, .footer').addClass('show')
	setTimeout(function(){ $('.title-page').addClass('on-show');},500);
	setTimeout(function(){$('.box-nav, .sub-news').addClass('show')},800);
	setTimeout(function(){$('.mask').addClass('finish')},1000);
	setTimeout(function(){ if(!$('#contact-page, #location-page, #news-page, #progress-page, #product-page, #facilities-page, #thankyou-page').length){$('.wheel').addClass('show')}}, 600);
    
	
  	if($('.group-central').length<=1){
		setTimeout(function(){
		$('.wheel').removeClass('show');
		},700);
		$('.box-nav').addClass('class-hidden');
	}
	
  	/* HOME PAGE */
  	if($('#home-page').length){
		$('.item-video-home').on('click', function () {
			 $(this).find('a').trigger('click');
		});
		
		setTimeout(function(){
		// $('.subscribe').trigger('click');
		},2000);
		
		if($(window).width() > 1100){
			$('.map-img').addClass('show'); 
			ScaleMap();
	       MoveBackground();
		}
		$('.bottom-link > a, .bottom-link').addClass('hidden');
		if($('.home-popup').length){
			setTimeout(function() {
				var url = $('.home-popup').attr('data-href');
				$('html, body').addClass('no-scroll');
				$('.overlay-dark').addClass('show');
				popupLoad(url); 
				return false;
			},10000);
		}
		
		
		
	}

     //ABOUT PAGE//
	if($('#about-page').length){
		if ($(window).width() > 1100) {
			if($('.box-nav li.current').length){
				setTimeout(function(){$('.box-nav li.current a').trigger('click');},1000);
			}
		}else{
			if($('.group-central.current').length){
				var Top = $('.group-central.current').offset().top - 60;
				$('html, body').stop().animate({ scrollTop: Top}, 1000, 'easeInOutExpo', function(){});
			}
		}
	 }
		 
	 
    //LOCATION PAGE//
   if($('#location-page').length){
   		$('.group-central').addClass('show-text');
	 	$('.container').addClass('show');
	 	if($(window).width() > 1100){
			ZoomMap();
	    }else{
			$('.map-mobile, .pointer-map').addClass('show');
			
			$('.map-mobile.show .map-img').addClass('pinch-zoom');
				 $('.pinch-zoom').each(function(index, element) {
				 new PinchZoom.default(element, { draggableUnzoomed: false,});
			});
		}
		$('.play-svg').trigger('click');
		$('.footer').addClass('no-wheel');
		ScrollNiceA();

	   
	           $('.dot-p').hover(function(event){
                   if($(window).width() > 1100){
						 $('.show-box').removeClass('showup');
						 var idx  = $(this).attr('data-dot');
						 var xPosition = event.clientX
					     var yPosition = event.clientY
						 if(idx=="dot-01" || idx=="dot-02" || idx=="dot-03"){
							 $(".show-box[data-box='" + idx + "']").css({'left':xPosition - 270, 'top': yPosition - 100});
						 }else{
							  $(".show-box[data-box='" + idx + "']").css({'left':xPosition + 40, 'top': yPosition - 100});
						 }
						
						 $(".show-box[data-box='" + idx + "']").addClass('showup');
					  }
				   }, function() {
                      if($(window).width() > 1100){
						  $('.show-box').removeClass('showup');
					   }
				    
		        });
		
	}
	
	//FACILITIES PAGE//
     if($('#facilities-page').length){
     	 $('.footer').addClass('no-wheel');
     	 $('.bottom-link a:first-child').addClass('hidden');
     	 $('.group-central').addClass('show-text');
     	 $('.container').addClass('show');
     	 $('.show-text .all-dot-top').children().each(function(i){
			var box = $(this);
			setTimeout(function(){$(box).addClass('show')}, (i+1) * 200);
		 });

		 $('.note-facilities li').on('mouseenter', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var idx = $(this).attr('data-text');
			var Active = $(".all-dot-top a[data-name ='" + idx + "']"); 
			$('.all-dot-top a, .note-facilities li').removeClass('current');
			$(Active).addClass('current');
			$('.show-box-pic').removeClass('showup');
			$(".all-dot-top a[data-name='" + idx + "']").trigger('mouseenter');
			
			return false;
		 });

			
		 $('.note-facilities li').on('mouseleave', function () {
			$('.all-dot-top a, .note-facilities li').removeClass('current');
		 	$('.show-box-pic').removeClass('showup');
	 	 });
		 
		  $('.all-dot-top a').on('mouseleave', function () {
			 	if ( $(window).width() > 1100) { 
					$('.all-dot-top a, .note-facilities li').removeClass('current');
		 			$('.show-box-pic').removeClass('showup');
				}
	 	 });

		$('.link-point').on('mouseenter', function (e) {
			$(this).find('h3').addClass('hide')
		});
		$('.link-point').on('mouseleave', function (e) {
			$(this).find('h3').removeClass('hide')
		});
			

		$('.all-dot-top a').on('mouseenter click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$('.all-dot-top a, .note-facilities li').removeClass('current');
				$(this).addClass('current');
				$('.show-box-pic').removeClass('showup');
				var id = $(this).attr('data-name');
				var Lx = $(this).offset().left;
				var Tx = $(this).offset().top;
			
				var show = $(this).attr('data-box');
				var Height = $(".show-box-pic[data-pic='" + show + "']").innerHeight();
				var Width = $(".show-box-pic[data-pic='" + show + "']").innerHeight();
				if($(window).width() > 1100){
					 $(".show-box-pic.no-pic[data-pic='" + show + "']").css({'left': Lx - Width/2, 'top':Tx - (Height+20)}).addClass('showup');
					 $(".show-box-pic:not(.no-pic)[data-pic='" + show + "']").css({'left': Lx + 60, 'top':Tx - (Height/2)}).addClass('showup');
					 $(".note-facilities li[data-text='" + id + "']").addClass('current');
				}else{
					$(".show-box-pic[data-pic='" + show + "']").css({'left': Lx - ((Width/2) + 10), 'top':Tx - (Height+80)}).addClass('showup');
					$(".note-facilities li[data-text='" + id + "']").addClass('current');
				}
				
				
				return false;
		
		});
		  
		$('.note-facilities li').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var idx = $(this).attr('data-text');
			$(".all-dot-top a[data-name='" + idx + "']").trigger('click');
			
		});
		
		//ZOOM PIC
		  $('.all-dot-top a:not(.no-pic)').on('click', function (e) {
			  e.preventDefault();
			  e.stopPropagation();
			   $(".show-box-pic").removeClass('current');
			  if ( $(window).width() > 1100) { 
				  var picx = $(this).attr('data-name');
				   $(".show-box-pic[data-pic='" + picx + "']").removeClass('showup').addClass('current');
				   
				  if(picx !== ""){
					  var img = $(".show-box-pic[data-pic='" + picx + "']").find('img').attr("data-src");
					  var Text = $(".show-box-pic[data-pic='" + picx + "']").find('.faci-text h3').text();
						ThumbZoom(img, Text);
						$('.all-dot-top a, .note-facilities li').removeClass('current');
					  
				  }
			  
			  }
			  
			  return false;
		  });
		
		
        $('.show-box-pic').on('click', function (e) {
			  e.preventDefault();
			  e.stopPropagation();
			   $('.all-dot-top a, .note-facilities li').removeClass('current');
			   $(".show-box-pic").removeClass('current');
			   $(this).removeClass('showup').addClass('current');
			   var img = $(this).find('img').attr("data-src");
			   var Text = $(this).find('.faci-text h3').text();
			   if(img){
			     ThumbZoom(img, Text);
			   }
			   return false;
		 });  	
		 

	}

	//PRODUCT PAGE//
	 if($('#product-page').length){
		$('.bottom-link a:last-child').addClass('hidden');
     	$('.group-central').addClass('show-text');
     	$('.container').addClass('show');
     	$('.footer').addClass('no-wheel');
		 
		 $('.product-name').on( 'click',function(e) {
			  e.preventDefault();
			 $(this).find('.zoom').trigger('click');
			 return false;
		});
     	

	 }
	 
	//LIBRARY PAGE//
    if($('#library-page').length){
		$('.container').addClass('show');	
		if ($(window).width() > 1100) {
			if($('.box-nav li.current').length){
				setTimeout(function(){$('.box-nav li.current a').trigger('click');},1000);
			}
		}else{
			if($('.group-central.current').length){
				var Top = $('.group-central.current').offset().top - 60;
				$('html, body').stop().animate({ scrollTop: Top}, 1000, 'easeInOutExpo', function(){});
			}
		}  
	}

	//NEWS PAGE//
    if($('#news-page').length){

    	$('.footer').addClass('no-wheel');
    	if ( $(window).width() > 1100) {
    		$('.group-central').addClass('show-text');
		  	if($('.show-text .wave-ani').length){
	            $('.play-svg').trigger('click');
	        }
    	}
		 $('.link-page').each(function(i){
			 var box = $(this);
			 setTimeout(function(){$(box).addClass('show')}, (i+1) * 100);
		  }); 
		  
		   $('.link-page').on('click', function (e) {
			 e.preventDefault();
			 News = 1;
			 
			 
			if(!$('.loadx').length){
			   $('body').append('<div class="loadx" style="display:block"></div>');
			}

			  $('.link-page').removeClass('current');
			  $(this).addClass('current');
			   var ShowDetails = $('.colum-box-news');
			 
			   
			   var Name = $(this).find('.head-text a').attr('data-name');
			  //STATIC
			   //window.location.hash = Name; 
			   
			   var tmpurl = $(this).find('a').attr('href');
			  var tmptitle = $(this).find('a').attr('data-title');
			  var tmpkeyword = $(this).find('a').attr('data-keyword');
			  var tmpdescription = $(this).find('a').attr('data-description');
			  var tmpdataname = $(this).find('a').attr('data-name');
			  changeUrl(tmpurl,tmptitle,tmpdescription,tmpkeyword,tmpdataname,tmptitle,tmpdescription);
			  
				var url = $(this).find('.head-text a').attr('href');
				
				 $('.news-content').removeClass('show');
				 $('.footer').removeClass('align');
				
				   $('.news-list').addClass('hide');
				   $('.scrollB').getNiceScroll().hide();
				 
				 $('.news-content').stop().animate({'opacity': 0}, 600,'linear', function () {
					NewsLoad(url, ShowDetails);
					
				});
			
			 
			return false;
		  });
		  
			 if ( $(window).width() <= 1100) {
				$('.news-list').mousewheel(function(e, delta) {
					$(this).scrollLeft(this.scrollLeft + (-delta * 40));
					e.preventDefault();
				});
			 }
		 
			 if ( $(window).width() > 1100) {
				  setTimeout(function(){ScrollNiceB();}, 300);
				  
				  setTimeout(function(){
					  if($('.news-list .nicescroll-rails').css('display') == 'block'){
					  }
				 }, 1000);
				  
				  
			  }else{
				  
				   if(!$('.colum-box-news').hasClass('show')){
					  $('.news-list').each(function(index, element) {
						if($('.link-page.current').length){
						   $(element).find('.link-page.current').trigger('click');
						}else{
						   $(element).find('.group:first-child .link-page:first-child').trigger('click');
						}
					});
				}
			  }
				
				//STATIC 
			  /*if(window.location.hash){
					LocationHash();
			  }*/
			  if($('.link-page.current').length){
				   $('.link-page.current').trigger('click');
			   }
			   
	}
	 
	/*PROGRESS*/
	  if($('#progress-page').length){
	  	$('.footer').addClass('no-wheel');
	  	if ( $(window).width() > 1100) {
    		$('.group-central').addClass('show-text');
		  	if($('.show-text .wave-ani').length){
	            $('.play-svg').trigger('click');
	        }
    	}
		    setTimeout(function(){ScrollNiceB()}, 800);
	   $('.select-header').bind("click", function() {
			if(!$('.select-header').hasClass('onclick')){
				$(this).addClass('onclick'); 
				$(this).next('.select-box').fadeIn(200, 'linear');
				$(this).closest('.select-list').on("mouseleave", function() {
				$(this).find('.select-box').fadeOut(200, 'linear');
					$('.select-header').removeClass('onclick') 
				});
				}else{
					$('.select-header').removeClass('onclick'); 
					$(this).next('.select-box').fadeOut(200, 'linear');
				}
	    });

		$('.select-box li a').on("click", function(e) {
			e.preventDefault();
			$(this).parent().parent().find('li').removeClass('selected');
			$(this).parent().parent().parent().parent().find('.select-header h3').text($(this).text());
			$(this).parent().addClass('selected');
			$(this).closest('.select-box').fadeOut(200, 'linear');
			$('.box-library h2').removeClass('fadein').addClass('fadeout');
			$('.select-header').removeClass('onclick');
			var Month =  $(this).attr('data-month');
			var url =   $(this).attr('href');
			var Text =  $(this).find('h3').text();
			
			 //STATIC
			 //window.location.hash = Month;
			 
			 var tmpurl = $(this).attr('href');
			  var tmptitle = $(this).attr('data-title');
			  var tmpkeyword = $(this).attr('data-keyword');
			  var tmpdescription = $(this).attr('data-description');
			  var tmpdataname = $(this).attr('data-month');
			  changeUrl(tmpurl,tmptitle,tmpdescription,tmpkeyword,tmpdataname,tmptitle,tmpdescription);
			 
			  $('.progress-list').stop().animate({'opacity': 0}, 500,'linear', function () {
					 LoadProgress(url, Text);
			  });
				
			return false;
		 });
		
		/*function GetMonth() {
		  var D = new Date();
	      var M = D.getMonth()+1;
		  console.log(M)
		  
		  $(".select-box li a[data-month='" + M + "']").trigger('click'); 

	   }*/
	   
	   	   function GetMonth() {
			  var D = new Date();

              var M = D.getMonth()+1;
			  //console.log(M)
			  
			  if(M < 10){
				  M = '0' + M;
			  }
			  
              var Y = D.getFullYear();
			  
			  var check_date = 0;
			  $(".select-box li a").each(function(index, element) {
				  if($(element).attr("data-month")== M + '-' + Y){
			  		check_date = 1;
				  }
			  });
			  
			  if(check_date == 1){
				  $(".select-box li a[data-month='" + M + '-' + Y + "']").trigger('click'); 
			  }else{
				  $(".select-box li:first-child a").trigger('click'); 
			  }
			  
           }
		
		      //STATIC   
		  /*if(window.location.hash){
			      LocationHash();*/
			  if($('.select-box li.selected').length){
				 $('.select-box li.selected a').trigger('click');
			  }else{
				 GetMonth();
			  }
		
	}

  
	  //CONTACT PAGE//
	if($('#contact-page').length){
	$('.group-central').addClass('show-text');
	$('.footer').addClass('no-wheel');
	$('.map-box').addClass('showup');
	
	  if($('#map-canvas').length){
	      //initialize();
		   $('.put-hide').trigger('click');
       }
	  setTimeout(function(){ $('.put-show').trigger('click');},2000);
		

	}
	
	/*$('.load360').on( 'click',function(e) {
		e.preventDefault();
		var Source  = '<iframe src="' + $(this).attr('data-embed') +'"></iframe>';
		var idx = $(this).attr('data-href');

		if(!$('.loadx').length){
			$('body').append('<div class="loadx" style="display:block"></div>');
		}

		$('html, body').addClass('no-scroll');
		$('.overlay-dark').addClass('show');

		$('.allvideo').fadeIn(300, 'linear', function() {
			VideoLoad(idx, Source);
		});
		return false;
	})*/

}

function ThumbZoom(img, Text) {

  $('html, body').addClass('no-scroll');
  $(this).parent().addClass('to-scroll');
    if(!$('.loadx').length){
		 $('body').append('<div class="loadx" style="display:block"></div>');
		 }
  $('.all-pics').addClass('show');
  $('.all-pics').append('<div class="full"  style="display:block"></div>');
  $('.overlay-dark').addClass('show');
  
  var newActive = img;

  $('.all-pics').find('.full').append('<img src ="'+(newActive)+'" alt="pic" >');
  $('.all-pics').find('.full').append('<span></span>');
  $('.close-pics, .close-pics-small').remove();
  $('body').append('<a class="close-pics" href="javascript:void(0);"></a>');
  $('.all-pics').append('<a class="close-pics-small" href="javascript:void(0);"></a>');
  $('.all-pics').prepend('<div class="text-length"><h3></h3></div>');			  
	
	$('.all-pics img').on("load", function() {
			$('.all-pics').addClass('show');
		    $('.text-length h3').text(Text);
		  
			 if(TouchLenght == false  || !isTouchDevice){ 
			   $('.full').addClass('dragscroll');
			   $('.dragscroll').draptouch();
			 }else{
			   $('.full').addClass('pinch-zoom');
				$('.pinch-zoom').each(function(index, element) {
					        new PinchZoom.default(element, {});
                         });
			 }
				   
		   
		   
		   if($('.full img').length>1){
			  $('.full img').last().remove()
		  }
		
		
		   $('.loadx').fadeOut(500, function () {
			   if(TouchLenght == false  || !isTouchDevice){ 
				 detectMargin();
			   }
			  
				$('.full img, .text-length').addClass('fadein');
				
	             $('.loadx').remove(); 
				
		   });
		  
	    });
	  
	  	if($(window).width() > 1100) {
				 $('.full span').on('click', function () {
					 $('.close-pics').trigger('click');
				 });
			}	

		$('.close-pics, .close-pics-small').on('click', function () {
		   $('.loadx').remove(); 
			$('.full').fadeOut(300, 'linear', function() {
		    $('.overlay-dark').removeClass('show');
			$('.all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container').remove();
			$('.close-pics, .close-pics-small').remove();
			$('.all-pics').removeClass('show');  
			$('html, body').removeClass('no-scroll');
				
				if($('.to-scroll').length){
					var top = $('.to-scroll').offset().top;
					if($(window).width() < 1100) {
						$('html, body').scrollTop(top - 60);
					}	
					$('.to-scroll').removeClass('to-scroll');
				}
			 });	
			
		  });
}


function ZoomPic() {

   $('img').on("click" ,function() {
					
  if($(this).hasClass('zoom-pic') && $(window).width() <= 840){
		  $('html, body').addClass('no-scroll');
		  $(this).parent().addClass('to-scrollZ');
		  
			   if(!$('.loadx').length){
				   $('body').append('<div class="loadx" style="display:block"></div>');
			     }
		  
		  $('.all-pics').addClass('show');
		  $('.all-pics').append('<div class="full"  style="display:block"></div>');
		  if(!$('.details-content').length){
		     $('.overlay-dark').addClass('show');
		  }else{
			  $('.overlay-dark').addClass('level-index-in'); 
		  }
		  var activePicLarge = $(this).attr("src");
		  
		  $('.all-pics').find('.full').append('<img src ="'+(activePicLarge)+'" alt="pic" />');
		  $('.all-pics').find('.full').append('<span></span>');
		  $('body').append('<div class="close-pics"></div>');
		  $('.all-pics').append('<div class="close-pics-small"></div>'); 
		  
		  $('.all-pics img').on( "load", function() {
				  $('.all-pics').addClass('show');
				  
				  if(TouchLenght == false  || !isTouchDevice){ 
						  $('.full').addClass('dragscroll');
						  $('.dragscroll').draptouch();
						  
				  }else{
						  $('.full').addClass('pinch-zoom');
						  $('.pinch-zoom').each(function(index, element) {
                              new PinchZoom.default(element, { draggableUnzoomed: false,});
                           });
				  }
				  
				  if($('.full img').length>1){
						  $('.full img').last().remove()
				  }
				  
				  $('.loadx').fadeOut(400, 'linear', function() {
						  
						  if(TouchLenght == false  || !isTouchDevice){ 
								  detectMargin();
						  }
						  
						  $('.full img').addClass('fadein');
						  $('.loadx').remove();
						   
						  
				  });
		  
		  });
		  
		  if($(window).width() > 1100) {
				  $('.full span').on('click', function () {
						  $('.close-pics').trigger('click');
				  });
		  }	
							
	    $('.close-pics-small, .close-pics').on("click" ,function() {
		        $('.loadx').remove();
				$('.full').fadeOut(300, 'linear', function() {
				$('.all-pics .full,  .all-pics .pinch-zoom-container').remove();
				$('.close-pics-small, .close-pics').remove();
				$('.all-pics').removeClass('show');
				
				if(!$('.details-content').length){
			  	  $('html, body').removeClass('no-scroll');
				  $('.overlay-dark').removeClass('show');
				   if($('.to-scrollZ').length) {
				    var top = $('.to-scrollZ').offset().top;
				   $('.to-scrollZ').removeClass('to-scrollZ');
				     if($(window).width() < 1100) {
						$('html, body').scrollTop(top - 60);
				    }
		         }
              }else{
				    $('.overlay-dark').removeClass('level-index-in');
			  }

            });	

         });

      }
			
	 return false;
					
    });
		
}


function Option() {
	
	  
	
	 $('.item-libra, .item-video').on( 'click',function(e){
	     e.preventDefault();
	      $(this).find('a').trigger('click')
         return false;
      });

	
	
	
	  $('.view-album:not(.link-load), .show-album').on( 'click',function(e) {
        e.preventDefault();
         var url = $(this).attr('data-href') || $(this).attr('href');
	   
	      if(!$('.loadx').length){
			 $('body').append('<div class="loadx" style="display:block"></div>');
		  }
		 $('html, body').addClass('no-scroll');
		 $('.overlay-dark').addClass('show');
         $('.all-album').fadeIn(300, 'linear', function() {
		     AlbumLoad(url,0);
			});
        return false;
      });  
	  
	  
	  
	
	 $('.zoom.album').on("click", function(e) {
			e.preventDefault();
			$(this).parent().addClass('viewalbum');
			var url = $(this).attr('href');
			var num = $(this).parent().parent().parent().index();
			
	  if(!$('.loadx').length){
		  $('body').append('<div class="loadx" style="display:block"></div>');
		 }
		   
			$('html, body').addClass('no-scroll');
			$('.overlay-dark').addClass('show');
			
			  $('.all-album').fadeIn(300, 'linear', function() {
				AlbumLoad(url, num);
			});
			return false;
		}); 


	$('.view-video, .player').on( 'click',function(e) {
        e.preventDefault();
        $(this).parent().addClass('to-scrollV');
		
         var idx = $(this).attr('data-href') || $(this).attr('href');
		 
		  var youTubeUrl = $(this).attr('data-embed');
		  var youTubeId;
		  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		  var match = youTubeUrl.match(regExp);
		  if (match && match[2].length == 11) {
			  youTubeId = match[2];
		  } else {
			  youTubeId = 'no video found';
		  }	
        
		if(youTubeUrl !== ""){
		var Source  = '<iframe id="VYT" src="https://www.youtube.com/embed/' + youTubeId + '?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist='+ youTubeId +'" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
		}
		
		//console.log(Source)

        if(!$('.loadx').length){
            $('body').append('<div class="loadx" style="display:block"></div>');
        }

        $('html, body').addClass('no-scroll');
        $('.overlay-dark').addClass('show');

        $('.allvideo').fadeIn(300, 'linear', function() {
            VideoLoad(idx, Source);
        });
        return false;
    });

	 
	
	  
	
    $('.zoom, .zoom.box-pro').on("click" ,function() {
		 
     $('html, body').addClass('no-scroll');
		
	    if(!$('.loadx').length){
		    $('body').append('<div class="loadx" style="display:block"></div>');
		 }
		  
        $('.all-pics').addClass('show');
        $('.all-pics').append('<div class="full"  style="display:block"></div>');
		$('.overlay-dark').addClass('show');
		
		var activePicLarge = $(this).parent().find('img').attr("src") || $(this).parent().find('img').attr("data-src") || $(this).attr("data-src");
	   
		if($(this).attr("data-src")){
			var newActive = $(this).attr("data-src");
		}else{
			var newActive = activePicLarge;
		}
		var Text =  $(this).parent().parent().find('h3').text() ||  $(this).parent().find('h3').text();
	   
	  
	    $('.all-pics').find('.full').append('<img src ="'+(newActive)+'" alt="pic" />');
		$('.all-pics').find('.full').append('<span></span>');
        $('body').append('<a class="close-pics" href="javascript:void(0);"><svg viewBox="0 0 100 100"><path fill="currentColor" d="M50,54 27.2,76.8 23.2,72.8 46,50 23.2,27.2 27.2,23.2 50,46 72.8,23.2 76.8,27.2 54,50 76.8,72.8 72.8,76.8z"></path></a>');
		$('.all-pics').append('<a class="close-pics-small" href="javascript:void(0);"></a>');
		
		if(Text){
		  $('.all-pics').prepend('<div class="text-length"><h3></h3></div>');	
		  $('.text-length h3').text(Text);
		}
		  
          $('.all-pics img').on("load",function() {
				  $('.all-pics').addClass('show');
				 
			    
                  if(TouchLenght == false  || !isTouchDevice){
                    $('.full').addClass('dragscroll');
                    $('.dragscroll').draptouch();
                }else{
                    $('.full img').addClass('pinch-zoom');
                    $('.pinch-zoom').each(function(index, element) {
                        new PinchZoom.default(element, { draggableUnzoomed: false,});
                    });
                }
						 
				 
				 
                 if($('.full img').length>1){
					$('.full img').last().remove()
				}
              
				 $('.loadx').fadeOut(400, 'linear', function() {
			      if(TouchLenght == false  || !isTouchDevice){ 
				    detectMargin();
			       }
			  
				   $('.full img').addClass('fadein');
				    $('.text-length').addClass('fadeinup');
				   $('.loadx').remove();
				
		        });
				
            });
			
			if($(window).width() > 1100) {
				 $('.full span').on('click', function () {
					 $('.close-pics').trigger('click');
				 });
			}	
		   

        $('.close-pics, .close-pics-small').on("click" ,function() {
			$('.loadx').remove(); 
            $('.full').fadeOut(300, 'linear', function() {
				$('.overlay-dark').removeClass('show');
                $('.all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container').remove();
                $('.close-pics, .close-pics-small').remove();
                $('.all-pics').removeClass('show');  
				$('html, body').removeClass('no-scroll');
				
            });
        });
        return false;
    });
	



}


function turnWheelTouch(){
	doWheel = true;
	doTouch = true;
}  


function detectBut() {
	
  if($('#news-page').length && $('.link-page').hasClass('current')){
	 if($(window).width() <= 1100){
		 $('.news-list').each(function(index, element) {
	 	  var Current = $(element);	 
	        var Left  = $(element).find('.grid').offset().left;
	        var XLeft = $(element).find('.link-page.current').offset().left;
	        var Center = $('.news-list').width()/2 - $('.link-page').width()/2;
	       $(Current).stop().animate({scrollLeft:  (XLeft-Center) - Left}, 'slow');
		 
	   });
	   
	 }
 }

}


function detectMargin() {
var ImgW = $('.full img').width();
var ImgH = $('.full  img').height();
var Yheight = $(window).height();
var Xwidth = $(window).width();

	if (Xwidth > ImgW) {
		  $('.full img').css({'margin-left': Xwidth / 2 - ImgW / 2});
	  } else {
		  $('.full img').css({'margin-left': 0});
	  }
	  if (Yheight > ImgH) {
		  $('.full img').css({'margin-top': Yheight / 2 - ImgH / 2});
	  } else {
		  $('.full img').css({'margin-top':  0});
	  }
}




$(document).ready(function () {
  
if($("#contact").length){
	document.getElementById("contact").reset();
}	
if($("#register").length){
	document.getElementById("register").reset();
}



$(document).bind('scroll', function() {
		var currenttop = $(document).scrollTop();
		var scrollY = $(window).scrollTop();

		  if(currenttop >= 100) {
		       $('.header').addClass('hide');
	       }else {
		       $('.header').removeClass('hide');
	       }
		  if(currenttop > $(window).height()/2) {
		       $('.go-top').addClass('show');
	       }else {
		       $('.go-top').removeClass('show');
	       }
		   
		   var Bottom = $('.group-central[data-name="contact"]').offset().top;
		   if ($('#home-page').length) {
			    if(currenttop >= Bottom && Click == 0) {
		          setTimeout(function(){ $('.subscribe').trigger('click');},500);
			   }
				  
			}  

		windscroll = currenttop;
		
 });
   

document.addEventListener( 'keydown', function(e) {
	 
	 var keyCode = e.keyCode || e.which;
	 
	   if( keyCode === 38) {
		 $('.box-nav li.current').prev().trigger('click');
	   }
	   
		if( keyCode === 40) {
		 $('.box-nav li.current').next().trigger('click');
	   }
	   
	   if( keyCode === 27) {
		   
		    if($('.full img').length){
		     $('.close-pics').trigger('click');
		   }
			
	   }
	 
});



$('.go-top').on( 'click',function(){
	if($(window).width() > 1100){
		if( $('.box-nav, .sub-product').length){
			$('.box-nav li:first-child,  .sub-product li:first-child').trigger('click')
		}else{
			$('html, body').animate({scrollTop:0},'slow');
		}
	}else{
		$('html, body').animate({scrollTop:0},'slow');
	}
});

if ($('#home-page').length) {
	setTimeout(function(){if( Loadx == 0){ Loadx = 1;  Done();}}, 1500);
}else{
	setTimeout(function(){if( Loadx == 0){ Loadx = 1;  Done();}}, 1000);
}

   
});

window.onorientationchange = ResizeWindows;
$(window).on("orientationchange",function(){
 if ($(window).width() <= 1100) {
	   if($('.colum-box-news').hasClass('show')){
			detectBut();
		}
	   
 }
 
});

$(window).resize(function () {
	 if($(window).width() > 1100){
		 if( $('.news-text img').hasClass('zoom-pic')){ 
		   $('.close-pics-small').trigger('click');
		 }
	 }

   
ResizeWindows();
	 
});	

$(window).on('resize', function() {
   ResizeWindows();
   detectMargin();
//-----------------------------			
//  DESKTOP 	

if ($(window).width() > 1100) {
		var startAni = false;
			
			if(!$('#contact-page, #location-page, #facilities-page, #product-page, #news-page, #progress-page').length){ 
			 if(!$('.group-central').hasClass('show-text')){
				 BoxSlide();
				 $('.go-top').removeClass('show');
			 }
			}
			if($('#facilities-page').length){ 
				$('.group-central').addClass('show-text')
				$('.show-text .all-dot-top').children().each(function(i){
					var box = $(this);
					setTimeout(function(){$(box).addClass('show')}, (i+1) * 200);
				});
			}

			 if($('.dragscroll').length){ 
			      detectMargin();
				  $('.dragscroll').draptouch();
				  
			 }

			  if ($('#location-page, #home-page').length) {
			      ScaleMap();
				   $('.map-mobile .map-svg').removeClass('show');
			    if (!$('.viewer').hasClass('desktop')) {
			        ZoomMap();
		       }
            
			   if(!$('.pointer-map').hasClass('show')){
				  $('.pointer-map').addClass('show');
			   }
			 
             }
			  
			  
			 
			  /* if($('#about-page, #library-page, #contact-page, #facilities-page, #product-page').length){ 
				  if (!$('.box-nav li').hasClass('current')) {
					$('.box-nav li:first-child ').trigger('click');
				  }else{
					setTimeout(function(){$('.box-nav li.current').trigger('click');},750);
				  }
				}
		*/
		      if(!$('.product-home, .box-facilities').hasClass('moving')){
				 MoveBackground();
			  }

			  if($('.apartment-map').hasClass('pinch-zoom')){
				   $('.apartment-map.pinch-zoom').css({'transform': 'scale(1, 1) translate(0px, 0px)'});
			  }
			

			  if($('div').hasClass('dragscroll')){
				 $('div').removeClass('dragscroll draptouch-active draptouch-moving-left draptouch-moving-down');
				 $('div').css({'overflow':'visible'});
			  }

		     if($('.news-list').hasClass('hide')){
				 setTimeout(function(){ ScrollNiceC();}, 250);
			  }else{
				if( $('.scrollA, .scrollB').length){
				 setTimeout(function(){ ScrollNiceA(); ScrollNiceB()}, 250);
		       }
			}
	       
	       
		   
		   
//  DESKTOP 

//-----------------------------		
 
//  MOBILE 		
    } else {
		
		
		
		///////////////
		 
		var startAni = true;

	  
		   if($('.product-home, .box-facilities').hasClass('moving')){
				 $('.product-home, .box-facilities').removeClass('moving');
				 CancelMove();
		   }


		    if($('#news-page').length){ 
		    $('.group-central').removeClass('show-text'); 
		     if(!$('.colum-box-news').hasClass('show')){
			 $('.news-list').each(function(index, element) {
				if($('.link-page.current').length){
				  $(element).find('.link-page.current').trigger('click');
			   }else{
				   $(element).find('.group:first-child .link-page:first-child').trigger('click');
			   }
		     });
		    }
	      }
		
		  

           if($('#location-page, #home-page').length){
			 if(!$('.map-mobile').hasClass('show')){
					 $('.map-mobile').addClass('show');
					 $('.map-mobile.show .map-img').addClass('pinch-zoom');
					 $('.pinch-zoom').each(function(index, element) {
					 new PinchZoom.default(element, { draggableUnzoomed: false,});
				});
			 }
			 
			   if($('.map-img').hasClass('show')){
				   $('.map-img').removeClass('show'); 
			     }
			 
			  if($('.pointer-map').hasClass('show')){
				  $('.pointer-map').removeClass('show');
			  }
		   }

			
  }
	  
		 
	
//  MOBILE 	 
//-----------------------------	



	 
   
}, 250);



function LocationHash() {
    var PageActive = window.location.hash;
    PageActive = PageActive.slice(1);
	
	$(".link-page a[data-name='" + PageActive + "']").trigger('click');
	$(".select-box li a[data-month='" + PageActive + "']").trigger('click');
	$(".box-nav li a[data-page='" + PageActive + "']").trigger('click');
	$(".sub-product li a[data-name='" + PageActive + "']").trigger('click'); 
	
	
}

$(window).bind("popstate", function(e) {
	if($(window).width() > 1100){
	  e.preventDefault();
	  LinkPage();
	}
	  var httpserver = $('.httpserver').text();
	  
	  if ( $(window).width() > 1100) {
		  
		  if (e.originalEvent.state !== null) {
			var tmp_url = e.originalEvent.state.path;
			var tmp_dataName = e.originalEvent.state.dataName;
			var tmptitle = e.originalEvent.state.title;
			var tmpurl = document.URL;
	
			changeUrl(tmp_url, tmptitle, '', '', tmp_dataName, '', '');
			
			var temp_url_1 = tmp_url.replace(httpserver, ""); 
			var tmp_1 = temp_url_1.split('/');
			
			
			if ($('#about-page, #location-page, #facilities-page, #library-page, #progress-page, #contact-page, #product-page').length) {
				if($('.close-video').length){
					$('.close-video').trigger('click');
				}
				if($('.close-album').length){
					$('.close-album').trigger('click');
				}
				if($('.close-pics').length){
					$('.close-pics').trigger('click');
				}
				if($('.close-map').length){
					$('.close-map').trigger('click');
				}
				
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});
				
				$(".sub-news li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});
				
				$(".box-nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
				$(".sub-nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
				$(".select-box li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
			}
			
			if ($('#virtual-page').length) {
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});
				
				$(".scenes li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						$(element).trigger('click');
					}
				});
				
			}
			
			if ($('#news-page').length) {
				
				if($('.news-text').length){
					$('.close-news').trigger('click');
				}else{
					$(".nav li a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							window.history.back();
						}
					});
				
					
					$(".link-page a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							$(element).trigger('click');
						}
					});
				}
			}
			
			if ($('#apartment-page').length) {
				
				if($('.close-album').length){
					$('.close-album').trigger('click');
				}//else
				{
					$(".nav li a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							window.history.back();
						}
					});
					
					$(".sub-product li a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							//$('.go-back').trigger('click');
							$(element).trigger('click');
						}
					});
					
					
					/*$(".onarea").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							$(element).trigger('click');
						}
					});*/
				}
			}
			
			
			
		  }else{
			  var tmpurl = document.URL;
			  
			  var temp_url_1 = tmpurl.replace(httpserver, ""); 
			  var tmp_1 = temp_url_1.split('/');
			  
			
			if ($('#about-page, #location-page, #facilities-page, #library-page, #progress-page, #contact-page, #product-page').length) {
				if($('.close-video').length){
					$('.close-video').trigger('click');
				}
				if($('.close-album').length){
					$('.close-album').trigger('click');
				}
				if($('.close-pics').length){
					$('.close-pics').trigger('click');
				}
				if($('.close-map').length){
					$('.close-map').trigger('click');
				}
				
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						window.history.back();
					}
				});
				
				$(".sub-news li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						window.history.back();
					}
				});
				
				$(".box-nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
				$(".sub-nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
				
				
				$(".select-box li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						//window.history.back();
						$(element).trigger('click');
					}
				});
				
			}
			
			/*if ($('#virtual-page').length) {
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						window.history.back();
					}
				});
				
				$(".scenes li a").each(function(index, element) {
					if ($(element).attr('href') == tmpurl) {
						$(element).trigger('click');
					}
				});
				
			}*/
			
			if ($('#news-page').length) {
				if($('.news-text').length){
					$('.close-news').trigger('click');
				}else{
					$(".nav li a").each(function(index, element) {
						if ($(element).attr('href') == tmpurl) {
							window.history.back();
							//window.location = tmpurl;
						}
					});
					
					
					$(".link-page a").each(function(index, element) {
						if ($(element).attr('href') == tmpurl) {
							$(element).trigger('click');
						}
					});
				}
			}
			
			
			if ($('#apartment-page').length) {
				
				if($('.close-album').length){
					$('.close-album').trigger('click');
				}//else
				{
					$(".nav li a").each(function(index, element) {
						if ($(element).attr('href') == tmpurl) {
							window.history.back();
						}
					});
					
					$(".sub-product li a").each(function(index, element) {
						if ($(element).attr('href') == tmpurl) {
							//$('.go-back').trigger('click');
							$(element).trigger('click');
						}
					});
					
					
					/*$(".onarea").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							$(element).trigger('click');
						}
					});*/
				}
			}
			
			
			
		  }
	  }else{
		  
		  if (e.originalEvent.state !== null) {
			  var tmp_url = e.originalEvent.state.path;
		  }else{
			  var tmp_url = document.URL;
		  }
		  
		  var temp_url_1 = tmp_url.replace(httpserver, ""); 
		  var tmp_1 = temp_url_1.split('/');
		  
		  if ($('#progress-page').length) {
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});
				
				/*$(".sub-news li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});*/
				
				$(".select-box li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.location = tmp_url;
						
					}
				});
				
			}
			
			
			if ($('#news-page').length) {
				
				$(".nav li a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						window.history.back();
					}
				});
			
				
				$(".link-page a").each(function(index, element) {
					if ($(element).attr('href') == tmp_url) {
						//$(element).trigger('click');
						window.location = tmp_url;
					}
				});
			}
			
			if ($('#apartment-page').length) {
				
				if($('.close-album').length){
					$('.close-album').trigger('click');
				}//else
				{
					$(".nav li a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							window.history.back();
						}
					});
					
					$(".sub-product li a").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							//$('.go-back').trigger('click');
							$(element).trigger('click');
						}
					});
					
					
					/*$(".onarea").each(function(index, element) {
						if ($(element).attr('href') == tmp_url) {
							$(element).trigger('click');
						}
					});*/
				}
			}
			
		  
	  }
	  
});

if(iOS || isFirefox) {
	$(window).bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			window.location.reload();
		}
	});
}


