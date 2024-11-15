(function($) {
	'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});
	
	// Header Sticky
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.lovells-nav-style-one').addClass("is-sticky");
		}
		else{
			$('.lovells-nav-style-one').removeClass("is-sticky");
		}
	});

	// Main slider
	$('.main-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag: false,
		items:1,
		dots: false,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
		rtl: true,
		navText: [
			"<i class='flaticon-angle-pointing-to-left'></i>",
			"<i class='flaticon-angle-arrow-pointing-to-right'></i>",
		],
	});

	//Slider Text Animation
	$(".slider-area").on("translate.owl.carousel", function(){
		$(".slider-text span, .slider-text h1, .slider-text .typewrite").removeClass("animated fadeInUp").css("opacity", "0");
		$(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
		$(".slider-text a").removeClass("animated fadeInDown").css("opacity", "0");
		$(".slider-img").removeClass("animated slideInRight").css("opacity", "0");
	});
	
	$(".slider-area").on("translated.owl.carousel", function(){
		$(".slider-text span, .slider-text h1, .slider-text .typewrite").addClass("animated fadeInUp").css("opacity", "1");
		$(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
		$(".slider-text a").addClass("animated fadeInDown").css("opacity", "1");
		$(".slider-img").addClass("animated slideInRight").css("opacity", "1");
	});
	
	// Case
	$('.case-wrap').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 30,
		center: true,
		dots: true,
		smartSpeed:1500,
		rtl: true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	// Case
	$('.case-wraps').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 30,
		center: true,
		dots: false,
		smartSpeed:1500,
		rtl: true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});
	
	// Team Wrap
	$('.team-wrap').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 30,
		center: true,
		dots: false,
		smartSpeed:1500,
		rtl: true,
		navText: [
			"<i class='flaticon-angle-pointing-to-left'></i>",
			"<i class='flaticon-angle-arrow-pointing-to-right'></i>",
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	// Testimonial
	$('.testimonial-wrap').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 30,
		center: false,
		dots: true,
		rtl: true,
		smartSpeed:1500,
	});

	// Popup Video JS 
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	
	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  0);
		});
	});

	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});
	
	// Count Time 
	function makeTimer() {
		var endTime = new Date("November 30, 2027 17:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	// Odometer 
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	//animation
	new WOW().init();

	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp JS
	$(".newsletter-form").ajaxChimp({
		url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});
})(jQuery);


  