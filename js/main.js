$(document).ready(function() {    var autoplaySlider = $('#lightSlider').lightSlider({        auto:true,        loop:true,        pauseOnHover: true,        });    });	$("#owl-demo").owlCarousel({        navigation : true,		navigationText: ["",""],		items : 3    });$(document).ready(function(){		$("#tab-wrap > li > a").on("click", function(e){    if($(this).parent().has("ul")) {      e.preventDefault();  }    $('#tab-wrap > li > a').removeClass('focus');    $(this).addClass('focus');  	var activeTab = $(this).parent().find(".active-tab");		$(activeTab).removeClass("active-tab");        if(!$(this).hasClass("open")) {      // hide any open menus and remove all other classes      $("#tab-wrap li ul").slideUp(350);      $("#tab-wrap li a").removeClass("open");	              // open our new menu and add the open class      $(this).next("ul").slideDown(350);      $(this).addClass("open");	      }        else if($(this).hasClass("open")) {      $(this).removeClass("open");      $(this).next("ul").slideUp(350);    }  });		//--niceScroll--------//	$("html").niceScroll();		$(".other-products a.view-other-products").click( function(){		$(".popup").fadeIn('slow');		});				$(".closed, .pop li a, .popup").click( function(){		$(".popup").fadeOut('slow');	});			$(".menu-icon").click(function(){		$(".mobile-menu-list").slideToggle("slow");	});			$('[placeholder]').focus(function() {		var input = $(this);		if (input.val() == input.attr('placeholder')) {		input.val('');		input.removeClass('placeholder');		}		}).blur(function() {		var input = $(this);		if (input.val() == '' || input.val() == input.attr('placeholder')) {		input.addClass('placeholder');		input.val(input.attr('placeholder'));		}	}).blur();			$('nav li').hover(		function() {		$('ul', this).stop().slideDown(200);			},		function() {		$('ul', this).stop().slideUp(200);			}	);			$(function(){		$(".item img").hover(function(){		$(this).next("h5").fadeIn();	}		,function(){		$(this).next("h5").fadeOut();	}		);        	});		$('.fancybox').fancybox();		$('.fancybox-media')			.attr('rel', 'media-gallery')			.fancybox({				openEffect : 'none',				closeEffect : 'none',				prevEffect : 'none',				nextEffect : 'none',				arrows : false,				helpers : {				media : {},				buttons : {}				}	});		//------------------tab----------		$('#show').click(function(){				$('#media-wrapper').css("display","block");		$('#advertisement-wrapper').css("display","none");	});		$('#hide').click(function(){		$('#advertisement-wrapper').css("display","block");		$('#media-wrapper').css("display","none");	});			$("#advertisement-wrapper").hide();		$('#show, #hide').click(function(e) {		$('#show, #hide').removeClass('active-link');		$(this).addClass('active-link');	});			/*--- FAQs ---*/	$(".faqs .question").bind('click', function(e){		if(!$(this).parent("li").hasClass("content-visible")){			$(".faqs li").removeClass("content-visible");			$(".faqs .desc").slideUp(200);		}		$(this).next('.desc').slideToggle(200).end().parent('li').toggleClass('content-visible');		e.preventDefault();	});//------------------inner slider----------			 $("#single-csr-slider").responsiveSlides({        auto: true,        pager: false,        nav: true,        speed: 500,		 timeout: 4000,        namespace: "callbacks",        before: function () {          $('.events').append("<li>before event fired.</li>");        },        after: function () {          $('.events').append("<li>after event fired.</li>");        }      });	  //------------------Home mobile slider----------		  $("#home-mobile-slider").responsiveSlides({        auto: false,        pager: false,        nav: true,        speed: 500,		 timeout: 4000,        namespace: "callbacks",        before: function () {          $('.events').append("<li>before event fired.</li>");        },        after: function () {          $('.events').append("<li>after event fired.</li>");        }      });	  	  //-----------------CARRERS----------------	(function($) {    $.fn.checkFileType = function(options) {        var defaults = {            allowedExtensions: [],            success: function() {},            error: function() {}        };        options = $.extend(defaults, options);        return this.each(function() {            $(this).on('change', function() {                var value = $(this).val(),                    file = value.toLowerCase(),                    extension = file.substring(file.lastIndexOf('.') + 1);                if ($.inArray(extension, options.allowedExtensions) == -1) {                    options.error();                    $(this).focus();                } else {                    options.success();                }            });        });    };})(jQuery);$(function() {    $('#curriculum-vitae').checkFileType({        allowedExtensions: ['jpg', 'jpeg'],        success: function() {            alert('Success');        },        error: function() {            alert('Error');        }    });});});