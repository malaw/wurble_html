$(document).ready(function() {

//var winHeight = $(window).height();
//------------------------------------------------------
// testimonial popup
			$('.testimonial_banner').click(function(e) {
			e.preventDefault();
		//	$('.mob_pic_share').css('display', 'block');
			//$('.overlay_div').css('display', 'block');
		$('.gallery-popup-project').css({'opacity':'1','z-index':'99999'});
			$('.overlay_div').fadeIn()
});

//$('.gallery-popup-project .close').click(function(){
	//alert(12)
	//$('.gallery-popup-project').addClass('hide');
	/*	$('.gallery-popup-project').css({'opacity':'0','z-index':'-1'});
	$('.overlay_div').fadeOut()
*/	//$('.gallery-popup-project').fadeOut();
//})
//--------------------------------------------------------
// about page :: calculate equal height
var elements = $('.about_content .equal_height1');
elements.removeAttr('style');
  var maxHeight = -1;
    elements.each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
   elements.each(function() {
      $(this).height(maxHeight);
    })
$(window).resize(function(){
 elements.removeAttr('style');
 setTimeout(function(){
 var maxHeight = -1;
    elements.each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    elements.each(function() {
      $(this).height(maxHeight);
    })
 },500)
})
//------------------------------
 // homepage :: contact submit button grayed untill all required field fill up
/*$('#contact-form .required-field').keyup(function() {
   var empty1 = false;
   $('#contact-form .required-field').each(function() {
     if ($(this).val() === '') {
       empty1 = true;
     }
  });
if (empty1) {
   $('#contact-form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
 } else {
   $('#contact-form input[type="submit"]').removeClass('disable').prop("disabled", false);
 }
});*/
//--------------------------------
	
	$('.connect').click(function(e) {
		e.preventDefault();
$('body,html').animate({scrollTop:0})
		$('.connect_box').fadeIn(400, function(){
			checkRequired_connect()
		})
		$('.overlay_div').fadeIn()
		$('body').addClass('no_overlay')


//----------------------------------------
// on click for mobile
	var windowWidth = $(document).width();
	var mobWindowWidth = 767;
if(windowWidth <= mobWindowWidth){
	$('.body_wrapper').css('overflow','hidden');
	$('.overlay_div').fadeOut()
}

		});


/*	$('.share_link').click(function(e) {
		e.preventDefault();
		$('.share_box').fadeIn()
		$('.overlay_div').fadeIn()
	

		});*/

	$('.close_button,.overlay_div').click(function(e) {
		e.preventDefault();
		$('.connect_box').fadeOut()
		$('.overlay_div').fadeOut()
		$('.share_box').fadeOut()
		$('body').removeClass('no_overlay')


		});
	$('.close_box,.overlay_div').click(function(e) {
		e.preventDefault();
		$('.connect_box').fadeOut()
		$('.overlay_div').fadeOut()
		$('body').removeClass('no_overlay')
		//----------------------------------------
// on click for mobile
var windowWidth = $(document).width();
var mobWindowWidth = 767;
if(windowWidth <= mobWindowWidth){
	$('.body_wrapper').css('overflow','visible');
}
		});
		$('.close_contact,.overlay_div').click(function(e) {

			e.preventDefault();
  // $('body>.body_wrapper').removeAttr('style')
			$('.contact_box').fadeOut('fast');
			$('.overlay_div').fadeOut()
			$('body').removeClass('no_overlay')
			if($('body').hasClass('aboutpage')){
   $('body>.body_wrapper').css({'height':0,'overflow':'hidden'});
			}else{
				$('body>.body_wrapper').removeAttr('style');
			}
//----------------------------------------
// on click for mobile
var windowWidth = $(document).width();
var mobWindowWidth = 767;
if(windowWidth <= mobWindowWidth){
	$('.body_wrapper').css('overflow','visible');
}

		});
//----------------------------------------------------------------------------------------
// contact popup 
// submit button disable until required fields are filled.
$('.contact').click(function(e) {
e.preventDefault();
var contactBoxHt = $('.contact_box').height();
$('body>.body_wrapper').height(contactBoxHt).css('overflow','hidden');

$('body,html').animate({scrollTop:0})
$('.contact_box').fadeIn(400, function(){
			//check required field in contact form
	  $('#contact-form .required-field').each(function() {
     if ($(this).val() === '') {
						submitDisabled();
   }
   });
   $('#contact-form .required-field').keyup(function() {
    var empty1 = false;
   $('#contact-form .required-field').each(function() {
   if ($(this).val() === '') {
    empty1 = true;
   }
     });
if (empty1) {
   //$('#contact-form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
			submitDisabled()
 } else {
   $('#contact-form input[type="submit"]').removeClass('disable').prop("disabled", false);
 }
});


});



//------------------------------------------------------------------------------------------------
			$('.overlay_div').fadeIn();
		$('body').addClass('no_overlay')
//----------------------------------------
// on click for mobile
	var windowWidth = $(document).width();
	var mobWindowWidth = 767;
if(windowWidth <= mobWindowWidth){
	$('.body_wrapper').css('overflow','hidden');
	$('.overlay_div').fadeOut()
}
			
});
// ----------------------------------------------------------------------------------------------
// Connect message popup on connect submit button clicked and disappear at 'timeDelay' second 
// ----------------------------------------------------------------------------------------------
$('.connect_box input[type="submit"]').click(function(e) {
e.preventDefault();
var timeDelay = 3000;
var windowHt = $(window).height();
var headerHt = 62;
var calcHt = windowHt - headerHt;
$('.connect_msg_send').css('height', calcHt).fadeIn().delay(timeDelay).fadeOut('fast', function(){
$('.overlay_div').trigger('click')
});
$('.connect_box').fadeOut()
});
/*$('.connect_box input[type="submit"]').click(function(e) {
e.preventDefault();
$('.connect_msg_send').css('display', 'block').delay(3000).fadeOut('fast', function(){
$('.overlay_div').trigger('click')
});
$('.connect_box').fadeOut();
});*/

// end of Connect message popup on connect submit button clicked and disappear at 'timeDelay' second 
// -----------------------------------------------------------------------------------------------
// Contact message popup on Contact submit button clicked and disappear at 'timeDelay' second
// ------------------------------------------------------------------------------------------------
$('.contact_box input[type="submit"]').click(function(e) {
e.preventDefault();
var windowHt = $(window).height();
var headerHt = 62;
var calcHt = windowHt - headerHt;
$('.contact_msg_send').css('height', calcHt).fadeIn().delay(3000).fadeOut('fast', function(){
$('.overlay_div').trigger('click')
});
$('.contact_box').fadeOut('fast');
$('body').addClass('no_overlay')
});
/*
$('.contact_box input[type="submit"]').click(function(e) {
e.preventDefault();
$('.contact_msg_send').css('display', 'block').delay(3000).fadeOut('fast', function(){
$('.overlay_div').trigger('click')
});
$('.contact_box').css('display', 'none');
$('body').addClass('no_overlay')
});
*/

// end of Contact message popup on Contact submit button clicked and disappear at 'timeDelay' second
// ---------------------------------------------------------------------------------------------------
$('.close_box_msg,.overlay_div').click(function(e) {
e.preventDefault();
//$('body>.body_wrapper').removeAttr('style')
			$('.connect_msg_send').fadeOut()
			$('.overlay_div').fadeOut()
			$('body').removeClass('no_overlay')
});
$('.close_msg,.overlay_div').click(function(e) {
e.preventDefault();
$('.contact_msg_send').css('display', 'none');
$('.overlay_div').css('display', 'none');
$('body').removeClass('no_overlay')
});

$('.close_msg,.overlay_div').click(function(e) {
e.preventDefault();
$('.contact_msg_send').fadeOut()
$('.overlay_div').fadeOut()
$('body').removeClass('no_overlay')
});

		


		$('.gallery_close, .overlay_div, .gallery-popup').click(function(){
		$('.mob_pic_share').fadeOut()
			$('.overlay_div').fadeOut()
})


		
//----------------------------------------------
// homepage:: onclick full screen :: start
var item = $('.project_listing .project_block');
var blockitem_height = $('.project_block').height();
var closeFullscreen = $('.block-item-cnt .close'); 
var speed = 800;
//------------------------------------------
// adding index to project block 
$(item).each(function(index){
 $(this).attr('data-index',index)
})
//-------------------------------------------
	
$(item).click(function(){
	var windowWidth = $(window).width();
var winScrollTop = $(window).scrollTop();
var thisItem_offsetTop = $(this).offset().top;
var getIndex = $(this).attr('data-index');
if(windowWidth > 768){
	var winheight = $(window).height();
}else{
	var winheight = 'auto';
}
$('.project_block_bottom').fadeOut();
if(thisItem_offsetTop > winScrollTop || thisItem_offsetTop < winScrollTop){
		if(windowWidth < 600){
	//	$('body,html').animate({scrollTop:0})
	}else{
$('body,html').animate({scrollTop:thisItem_offsetTop},speed, function(){$(this).addClass('fullscreen')});
	}
$(this).animate({height:winheight},speed, function(){
	$(this).addClass('active');
	
//----------------------
//$.ajax({url: "ajax-project-detail.html", success: function(result){
//$(".ajax-result .ajax-content").html(result);
$('body').addClass('ajax-cnt-loaded');
$(window).resize(function(){
var WinHeight = $(window).height();
if($('body').hasClass('ajax-cnt-loaded')){
$('.scroll-menu li.active a').trigger('click');
}
$('.ajax-result').height(WinHeight)
})

//----------------------
setTimeout(function(){	
var WinHeight = $(window).height();
$('.ajax-result').animate({height:WinHeight})
/*$(window).resize(function(){
var WinHeight = $(window).height();
$('.ajax-result').animate({height:WinHeight})
})*/
$('.ajax-result').css({'opacity':1,'z-index':99});
$(".ajax-result").addClass('show')
calcProjectGalleryHt()
$(window).resize(function(){
	calcProjectGalleryHt()
})
if(windowWidth < 768){
	$('.homepage > .body_wrapper').css({'height':WinHeight, 'overflow':'hidden'});
	$('#section'+getIndex).fadeIn(400, function(){
		$(".ajax-result").animate({scrollTop:0},0)
	})
	
 
}else{
}


//-----------------------------------
// popup slider place holder
//-----------------------------------						
/*function countTotalitem(){
$('.slider').each(function(){
$(this).find('.item').each(function(index){
$(this).attr('data-index',index+1)
})
var totalItem =	$(this).find('.item').length
$(this).find('.total-slide-item').text(totalItem);
})
}
function currentItem(){
 $('.slider').each(function(){
 var currentIndex = $(this).find('.owl-item.active').find('.item').attr('data-index');
 $(this).find('.active-count').text(currentIndex);
})
}	*/
		},2000)
		
//---------------------------------------------------------
// append left green menu dnamically in project detail page
$('.scroll-menu li').remove();
$('#fullpages div.section').each(function(index){
  var offsetTop = $(this).offset().top ;
  var getTitle = $(this).find('h3').text();
  $(this).attr('id','section'+index);
  $('.scroll-menu').append('<li><a href="#section'+index+'" data-index="'+index+'">'+getTitle+'</a></li>');
})

//----------------------------------------------------------
 function getProjectIndex(){
		var item = $('.project_listing .project_block');
  $(item).click(function(){
  var getIndex = $(this).attr('data-index');
  })
 }
$('.scroll-menu li:first-child').addClass('active');
//-----------------------------------------------------------------------------------
// project detail scroll animation on clicking left green menu in Project-Detail-Page
$('.scroll-menu li a').on('click',function(e){
  e.preventDefault()
  var headerHt = $('.header').innerHeight();
  var blockUpperHt = $('.section_detail_upper').innerHeight();
  var checkAttr = $(this).attr('href');
  var dataindex = $(this).attr('data-index');
  var topValue = $(checkAttr).innerHeight();
// if(!$(this).parent().hasClass('active')){
  $('.scroll-menu li').removeClass('active'); 
  $('.ajax-result').stop().animate({scrollTop:topValue*dataindex},1200, function(){/*
		
			
		*/})
		//----
			$('.project_listing .project_block').stop().removeClass('active').removeAttr('style');
			$('.project_listing .project_block').stop().each(function(){
				var projectListing_dataIndex = $(this).attr('data-index');
				if(projectListing_dataIndex === dataindex){
					console.log(projectListing_dataIndex +'-'+ dataindex)
					$(this).stop().trigger('click')
				}
			})
			
		//--
  $(this).parent().addClass('active');
 //}
})

//----------------------------------------------------------------
// finding respective project detail from project listing homepage
$('.scroll-menu li').each(function(){
  var checkIndex = $(this).find('a').attr('data-index') 
  if(getIndex == checkIndex){
			 var checkAttr = $(this).find('a').attr('href');
    var topValue = $(checkAttr).innerHeight();
    $('.scroll-menu li').removeClass('active');
    $(this).addClass('active');
    setTimeout(function(){
      $('.ajax-result').animate({scrollTop:topValue*getIndex},0)
    },1000)
   }
})
// -------------------------------------------------------------------
// project detail frame close on clicking cross button
// -------------------------------------------------------------------
/*$('.project_detail_block .close-frame').click(function(e){
e.preventDefault();
$('.ajax-result').css({'opacity':0,'z-index':-1});
setTimeout(function(){
	$('.project_block.active .close').trigger('click');
},500)
setTimeout(function(){
$('.project_block_bottom').fadeIn();
$('body').removeClass('ajax-cnt-loaded');
$('body').removeClass('fullscreen');
$('.ajax-content').parent().removeClass('show')
var winheight = $(window).height();
var winScrollTop = $(window).scrollTop();
var thisItem_offsetTop = $(this).offset().top;
var getPoz = (winheight)/4;
$('body,html').animate({scrollTop:thisItem_offsetTop - getPoz},speed, function(){$(this).removeClass('fullscreen')});
$(item).each(function(){
if($(this).hasClass('active')){$(this).animate({height:blockitem_height},speed, function(){$(this).removeClass('active')})	}
})},0)})*/

//	end of project detail frame close on clicking cross button
// ---------------------------------------------------------------------	
// mobile project detail frame close on clicking arrow button
// ---------------------------------------------------------------------
	$('.right_arrrow').click(function(e){
			$('.homepage > .body_wrapper').css({'height':'auto', 'overflow-y':'srcoll'});
	$('#section'+getIndex).fadeOut(400)
		
  $('.ajax-result').css({'opacity':0,'z-index':-1});
//$('.project_block.active .close').trigger('click');
setTimeout(function(){
$('.project_block_bottom').fadeIn();
 $('body').removeClass('ajax-cnt-loaded');
 $('.ajax-content').parent().removeClass('show')
},1000)
 })
// mobile project detail frame close on clicking arrow button
//----------------------------------------------------------------------
})	
}

})

$(closeFullscreen).click(function(){
var winheight = $(window).height();
var winScrollTop = $(window).scrollTop();
var thisItem_offsetTop = $(this).offset().top;
var getPoz = (winheight)/4;
$('body,html').animate({scrollTop:thisItem_offsetTop - getPoz},speed, function(){});
$('.project_listing .project_block.active').animate({height:blockitem_height},speed, function(){
	$(this).removeClass('active');
	$('body,html').removeClass('fullscreen')
	})	
/*$(item).each(function(){
if($(this).hasClass('active')){
$(this).animate({height:blockitem_height},speed, function(){$(this).removeClass('active')})	
}
})*/
})
  
// project detail page ::  slider fit to screeen
function calcProjectGalleryHt(){
	//var WinHeight = $(window).height();

		
var winHeight = $(window).height();
var detailBlockHt = $('.project_detail_block').innerHeight();
if(winHeight > 600){

	var galleryHt = winHeight- detailBlockHt - 155;
	$('.project_detail_list .gallery').innerHeight(galleryHt);
	$('.gallery-project .bx-wrapper .bx-viewport').height(galleryHt - 50)
}else{
	//var sectionHeight = $('.section').height();
	//var headerHeight = 100 + 65;
//	console.log(sectionHeight)
	$('.project_detail_list .gallery').css('height','auto');
	//$('.ajax-result').height(sectionHeight + headerHeight)
}
}
calcProjectGalleryHt()
$(window).resize(function(){
	calcProjectGalleryHt()
})
});

var width=$(document).width();
var height=$('.bg_image img').height();
var height2=$('.bg_image img.visible-xs').height();
	
// $('.overlay_testimonial').css('width',width);
$('.overlay_testimonial').css('height',height);
// $('.project_block_top .lower').css('top',height2);

$(window).resize(function() {

	$('.overlay_testimonial').css('height',height);
	
});













$('textarea').limit('210','.label_text>span');
$('textarea').limit('210','.character>span');



// var headerHeight =$('.header').height();
// var upperSection =$('.section_detail_upper').height();
// var mapHeight=$('.map_block').height();
// var windowHeight=$(window).height();
// var newHeight =windowHeight-(headerHeight+upperSection+mapHeight);
// $('.equal_height').css('height', newHeight);






//------------------------------------------------------------------------------------------------
// check empty required field
function submitDisabled(){
if($('html').hasClass('lt-ie9')){
							$('#contact-form input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $('#contact-form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
}

function checkRequired(){
$('form.checkrequired-normal').each(function(){
	$(this).find('.required-field').each(function(){
		 if ($(this).val() === '') {
      // $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
     }
					//----------------------
					   	$(this).keyup(function() {
      var empty1 = false;
      	$(this).each(function() {
      if ($(this).val() === '') {
       empty1 = true;
     }
     });
if (empty1) {
   $('form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
 } else {
   $('form input[type="submit"]').removeClass('disable').prop("disabled", false);
 }
});
	})
})
}
//checkRequired()

function checkRequired_connect(){

$('.required-field').each(function(){
		 if ($(this).val() === '') {
      //$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						if($('html').hasClass('lt-ie9')){
							$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
     }
					//----------------------
$(this).keyup(function(e) {
   var empty1 = false;
   $(this).each(function() {
			var thisValue = $(this).val()
   // check ("input was a letter, number, hyphen, underscore or space");
if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
   $('form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
 }else{
   if (thisValue === '' || thisValue.length <= 9 ) {
    // $('form input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
				if($('html').hasClass('lt-ie9')){
							$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
   }else{
	    $('form input[type="submit"]').removeClass('disable').prop("disabled", false);
   }
	}
});

});
	})
}

function checkRequired_badges(){

	$('.checkrequired_badges form .required-field').each(function(){
		 if ($(this).val() === '') {
      if($('html').hasClass('lt-ie9')){
							$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
     }
					//----------------------
					   	$(this).keyup(function() {
      var empty1 = false;
      	$(this).each(function() {
      if ($(this).val() === ''){
       empty1 = true;
     }
     });
if (empty1) {
  if($('html').hasClass('lt-ie9')){
							$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
 } else {
		if($(this).parents('.checkrequired_badges').find('.badges_section_lower ul li a').hasClass('active')){
   $('form input[type="submit"]').removeClass('disable').prop("disabled", false);
		}else{
			if($('html').hasClass('lt-ie9')){
							$(this).parents('form').find('input[type="submit"]').addClass('disable').attr('readonly','');
						}else{
       $(this).parents('form').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
						}
		}
 }
});
	})

}
checkRequired_badges()

//-------------------------------------------------------------
// Badges active class
$('.badges_section_lower ul li a').click(function(e) {
	e.preventDefault();
var numActive = $('.badges_section_lower ul li a.active').length;
if(!$(this).hasClass('active')){
 if(numActive >= 3){
	
    }else{
					$('.badges_section_lower ul li a').removeAttr('style')
						$(this).addClass("active");
				}
	}else{
		$(this).removeClass('active')
	}
	//-----------
		if($('.badges_section_lower ul li a').hasClass('active')){
		$(this).parents('.checkrequired_badges').find('form .required-field').each(function(){
			console.log('1')
		if ($(this).val() === '') {
       $(this).parents('.checkrequired_badges').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
     }else{
						$('form input[type="submit"]').removeClass('disable').prop("disabled", false);
					}
		})
	}else{
		$(this).parents('.checkrequired_badges').find('input[type="submit"]').addClass('disable').attr('disabled', 'disabled');
	}

});

//--------------------------------------------------------
// gallery slider and popup slider
//---------------------------------------------------------
/*function testt(){
$('.gallery-slider').each(function(index){
	var sliderID = $(this).attr('id','gallery-slider'+index);
	return(sliderID)
})
}*/
 $(".popup-slider").bxSlider({
auto: false,
autoControls: false,
controls: true,
onSliderLoad:countTotalSlides,
onSlideAfter:currentSlides,
//pagerCustom: '.gallery-slider'

});

var slider = $(".gallery-slider").bxSlider({
auto: false,
controls: true,
autoControls: false,
onSliderLoad:countTotalSlides,
onSlideAfter:currentSlides,
});

function countTotalSlides(){
$('.slider').each(function(){
var totalItem = $(this).find('.bx-pager-item').length
$(this).find('.total-slide-item').text(totalItem);
})
}
function currentSlides(){
$('.slider').each(function(){
var currentIndex = parseInt($(this).find('.bx-pager-link.active').attr('data-slide-index'));
$(this).find('.active-count').text(currentIndex+1);
})
}
// end of gallery slider and popup slider
// ------------------------------------------------------------
// open popup slider on clicking image of gallery slider
// ------------------------------------------------------------
$(window).resize(function(){
		var winHt = $(window).height();
	//$('.gallery-holder .gallery-popup-project').height(winHt)
})
$('.gallery-holder .item a').click(function(e){
e.preventDefault()
})
$('.gallery-holder .item img, .testimonial_banner').click(function(){
	var winWidth = $(window).width(); 
var winHt = $(window).height();
if(winWidth > 768){
$('.gallery-popup-project').css({'height':winHt, 'overflow':'hidden'})
$('.gallery-popup-project .bx-viewport').height(winHt - 120);
$('.gallery-popup-project .bx-wrapper .item img').css('max-height',winHt-200);
}
})
$('.gallery-holder .item img, .mob_project_banner').click(function() {
/*	var winHt = $(window).height();
 $('.gallery-popup-project').css({'height':winHt, 'overflow':'hidden'})
$('.gallery-popup-project .bx-viewport').height(winHt - 120);
$('.gallery-popup-project .bx-wrapper .item img').css('max-height',winHt-200)*/
//-----------------------------------------------------------------------------------------------------------------------
$(this).parents('.section').find('.gallery-holder').find('.gallery-popup-project').css({'opacity':'1','z-index':'99999'});
if($(this).parents().hasClass('gallery-holder')){
var currentSlideIndex = $(this).parent().attr('data-slide-index');
$(this).parents('.gallery-holder').find('.gallery-popup-project .bx-pager .bx-pager-item').each(function(){
 var popupDataSlideIndex = $(this).find('a').attr('data-slide-index');
 if(popupDataSlideIndex == currentSlideIndex){
  $(this).find('a').trigger('click')
 }
})
}
});
$('.gallery-popup-project .close, .popup-slider, .popup-slider figure:before').click(function(e) {
$(this).parents('.gallery-popup-project').css({'opacity':'0','z-index':'-1'});
$('.overlay_div').fadeOut();
});
$('.popup-slider .item img, .gallery-popup-project .social_share li').click(function(e){
e.stopPropagation()
})
// end of open popup slider on clicking image of gallery slider
//--------------------------------------------------------------
//
//--------------------------------------------------------------
$('.share_link').click(function(e) {
e.preventDefault();
$('.share-box-1').css('display', 'block');
$('.overlay_div').css('display', 'block');
});
$('.mobile_share_box').click(function(e) {
e.preventDefault();
$('.share-box-2').css('display', 'block');
$('.overlay_div').css('display', 'block');
});
function badge_holder_width(){
var winWidth = $(window).width(); 
if(winWidth === 768){
var badgesWidth = $('.badges_section_lower ul li').width();
var badgesWrapWidth = badgesWidth * 3;
$('.badges_section_lower').width(badgesWrapWidth);
}
}
$(window).resize(function(){badge_holder_width()})
badge_holder_width();
function popupItemWidth(){
var winWidth = $(window).width();
$('.bx-wrapper .popup-slider .item').width(winWidth)
}
popupItemWidth()
$(window).resize(function(){popupItemWidth()})
//------------------------------------------------------------
// about page open on clicking about button
//------------------------------------------------------------
$('.about').click(function(){
	var winHt = $(window).height();
//	console.log(winHt)
//	$('.ajax-result.show.show-aboutpage').css('height',winHt+'px');
 var aboutPageHt = $('.body_wrapper.about-page').height();
 $('body').addClass('aboutpage');
 $('body>.body_wrapper').height(0).css('overflow','hidden');
 $('.fixed_scroll').css('display','none');
 $('.body_wrapper.about-page').css('display','block')
 $('body').addClass('ajax-cnt-loaded');
$('.ajax-result').css({'opacity':1,'z-index':99, 'min-height':winHt+'px'});
$(".ajax-result").addClass('show show-aboutpage')
})
var blockitem_height_gohome = $('.project_listing .project_block').height()
$('.gohome').click(function(e){

 e.preventDefault();
 $('.ajax-result').css({'opacity':0,'z-index':-1});
 setTimeout(function(){
	$('.project_block.active .close').trigger('click');
},500);
setTimeout(function(){
 //console.log('123')
 $('body,html').animate({scrollTop:thisItem_offsetTop - getPoz},400, function(){$(this).removeClass('fullscreen')});
$('.body_wrapper.about-page').fadeOut()
$('.fixed_scroll').css('display','block');
$('body>.body_wrapper').removeAttr('style');
$('.project_block_bottom').fadeIn();
$('body').removeClass('ajax-cnt-loaded');
$('body').removeClass('fullscreen');
$('body').removeClass('aboutpage');
$(".ajax-result").removeClass('show');
$(".ajax-result").removeClass('show-aboutpage')
var winheight = $(window).height();
var winScrollTop = $(window).scrollTop();
var thisItem_offsetTop = $('.project_listing .project_block.active').offset().top;
var getPoz = (winheight)/4;

/*var item = $('.project_listing .project_block');
$(item).each(function(){
if($(this).hasClass('active')){$(this).animate({height:blockitem_height},speed, function(){$(this).removeClass('active')})	}
})*/

$('.project_listing .project_block.active').animate({height:blockitem_height_gohome},400, function(){
 $(this).removeClass('active')
 })
console.log(getPoz+'-'+thisItem_offsetTop)
},0)
 //$('body').removeClass('aboutpage');
//$('body').removeClass('fullscreen');
//$('body>.body_wrapper').removeAttr('style');
//$('.fixed_scroll').css('display','block');
//$('.body_wrapper.about-page').css('display','none')
 //$('body').removeClass('ajax-cnt-loaded');

//$(".ajax-result").removeClass('show show-aboutpage')
//$('.project_block.active  .block-item-cnt .close').trigger('click')
//var getActiveProject = $('.scroll-menu li.active a').attr('href');
//$(getActiveProject).find('.project_detail_block .close-frame').trigger('click');
//console.log(getActiveProject)
//console.log(123)
})
/*
$('.project_detail_block .close-frame').click(function(e){
e.preventDefault();
$('.ajax-result').css({'opacity':0,'z-index':-1});
setTimeout(function(){
	$('.project_block.active .close').trigger('click');
},500)
setTimeout(function(){
$('.project_block_bottom').fadeIn();
$('body').removeClass('ajax-cnt-loaded');
$('body').removeClass('fullscreen');
$('.ajax-content').parent().removeClass('show')
var winheight = $(window).height();
var winScrollTop = $(window).scrollTop();
var thisItem_offsetTop = $(this).offset().top;
var getPoz = (winheight)/4;
$('body,html').animate({scrollTop:thisItem_offsetTop - getPoz},speed, function(){$(this).removeClass('fullscreen')});
$(item).each(function(){
if($(this).hasClass('active')){$(this).animate({height:blockitem_height},speed, function(){$(this).removeClass('active')})	}
})},0)})
*/


//For height Calculate for about page block

var headerHeight =$('.header').height();
var upperSection =$('.section_detail_upper').height();
var mapHeight=$('.map_block').height();
var windowHeight=$(window).height();
var newHeight =windowHeight-(headerHeight+upperSection+mapHeight);
$('.equal_height').css('height', newHeight);


// popup gallery box viewport height	
//----------------------------------------------------



// end of popup 
//------------------------------------------------------
var blockitem_height = $('.project_block').height();
$('.close-frame').click(function(e){
 console.log('close frame clicked')
 e.preventDefault();
$('.ajax-result').animate({'opacity':0},400, function(){
$(this).css({'z-index':-1})
var winheight = $(window).height();
var winScrollTop = $(window).scrollTop();
var activeProject_offsetTop = $('.project_listing .project_block.active .close').offset().top;
var getPoz = (winheight)/4;
$('body,html').animate({scrollTop:activeProject_offsetTop - getPoz},400, function(){});
$('.project_listing .project_block.active').animate({height:blockitem_height},400, function(){
$('.project_listing .project_block').removeClass('active');
$('body,html').removeClass('fullscreen');
$('.project_block_bottom').fadeIn();
$('body').removeClass('ajax-cnt-loaded');
$('body').removeClass('fullscreen');
$('.ajax-content').parent().removeClass('show');
//---------------------------------------------------------
// append left green menu dnamically in project detail page 
})	   
});})



