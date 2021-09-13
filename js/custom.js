/*
	Template Name: Digiqole - News Magazine Newspaper HTML5 Template
	Author: Tripples
	Author URI: https://themeforest.net/user/tripples
	Description: Digiqole - News Magazine Newspaper HTML5 Template
	Version: 1.1
	1. Main slideshow
	2. Site search
	3. Owl Carousel
	4. Video popup
	5. Contact form
	6. Back to top
  
*/


jQuery(function ($) {
	"use strict";

	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */
	$('.navbar-nav .menu-dropdown').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).siblings().slideToggle();
	});


	$('.nav-tabs[data-toggle="tab-hover"] > li > a').hover(function () {
		$(this).tab('show');
	});

	/**-------------------------------------------------
	 *Fixed HEader
	 *----------------------------------------------------**/

	$(window).on('scroll', function () {

		/**Fixed header**/
		if ($(window).scrollTop() >= 135.5) {
			$('.is-ts-sticky').addClass('sticky ');
		} else {
			$('.is-ts-sticky').removeClass('sticky ');
		}

	});




	/*==========================================================
					search popup
	======================================================================*/
	if ($('.xs-modal-popup').length > 0) {
		$('.xs-modal-popup').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: false,
			callbacks: {
				beforeOpen: function beforeOpen() {
					this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
				}
			}
		});
	}



	/* ----------------------------------------------------------- */
	/*  Owl Carousel
	/* ----------------------------------------------------------- */

	//Trending slide

	$(".trending-slide").owlCarousel({

		loop: true,
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		margin: 30,
		dots: false,
		mouseDrag: false,
		slideSpeed: 500,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			}
		}

	});

	$(".transing-slide-style2").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		nav: true,
		loop: true,
		margin: 10,
		dots: false,
		mouseDrag: false,
		slideSpeed: 500,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1,
				mouseDrag: true,
			}
		}

	});


	//Featured slide
	$(".featured-slider").owlCarousel({
		loop: true,
		autoplay: false,
		autoplayHoverPause: true,
		nav: false,
		margin: 0,
		loop: false,
		dots: true,
		mouseDrag: true,
		touchDrag: true,
		slideSpeed: 500,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		items: 1,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			}
		}

	});

	/*======================== 
		trending topics 
   ==========================*/
	if ($('#trending-slider,#post-block-slider').length > 0) {
		$('#trending-slider,#post-block-slider').owlCarousel({
			nav: false,
			items: 4,
			margin: 30,
			reponsiveClass: true,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 2,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
				},
				// breakpoint from 768 up
				1200: {
					items: 4,
				}
			}
		});
	}
	/*======================== 
		trending topics 
	==========================*/
	if ($('#fullbox-slider').length > 0) {
		$('#fullbox-slider').owlCarousel({
			nav: false,
			items: 4,
			margin: 0,
			reponsiveClass: true,
			dots: false,
			autoplayHoverPause: true,
			loop: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 2,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
				},
				// breakpoint from 768 up
				1200: {
					items: 4,
				}
			}
		});
	}
	//Latest news slide

	$(".latest-news-slide").owlCarousel({

		loop: false,
		animateIn: 'fadeInLeft',
		autoplay: false,
		autoplayHoverPause: true,
		nav: true,
		margin: 30,
		dots: false,
		mouseDrag: false,
		slideSpeed: 500,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		items: 3,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			}
		}

	});

	/* ----------------------------------------------------------- */
	/*  Popup
	/* ----------------------------------------------------------- */
	$(document).ready(function () {

		$(".gallery-popup").colorbox({ rel: 'gallery-popup', transition: "fade", innerHeight: "500" });

		$(".popup").colorbox({ iframe: true, innerWidth: 600, innerHeight: 400 });

	});

	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function () {

		var $form = $(this),
			$error = $form.find('.error-container'),
			action = $form.attr('action');

		$error.slideUp(750, function () {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
				name: $name.val(),
				email: $email.val(),
				subject: $subject.val(),
				message: $message.val()
			},
				function (data) {
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.backto').fadeIn();
		} else {
			$('.backto').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('.backto').on('click', function () {
		$('.backto').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.backto').tooltip('hide');

});

$('.SearchModal').on('click', () => {
	$('.SearchAreaInModal').toggle(200);
	$('.CloseSearchAreaInModal').css('display', 'flex');
})

$('.CloseSearchAreaInModal').on('click', () => {
	$('.SearchAreaInModal').toggle(200);
	$('.CloseSearchAreaInModal').css('display', 'none');
})

$('#ShowCityChoice , .ShowCityChoiceMobile ').on('click', () => {
	$('.CityChoiceModal').show("drop", { direction: "up" }, 400);
	$('.CityChoiceModal').addClass('showMe');
	$("body").addClass("modal-open");
})

$('.CloseModal').on('click', () => {
	$('.CityChoiceModal').hide("drop", { direction: "down" }, 400);

	setTimeout(() => {
		$('.CityChoiceModal').removeClass("showMe");
	}, 330);

	$("body").removeClass("modal-open");
})

$(window).click(function () {
	$('.CityChoiceModal').hide("drop", { direction: "down" }, 400);

	setTimeout(() => {
		$('.CityChoiceModal').removeClass("showMe");
	}, 330);

	$("body").removeClass("modal-open");
});

$('.ShowCityChoiceMobile').click(function (event) {
	event.stopPropagation();
});
$('#ShowCityChoice').click(function (event) {
	event.stopPropagation();
});
$('.ModalCity').click(function (event) {
	event.stopPropagation();
});



var showRate = $('#showRateUserCm');

$('.rating').on('click', () => {
	$('.RateText').show();
	var newNum = $('.jq-ry-rated-group').innerWidth() / 32;
	console.log(newNum);
	showRate.text(newNum.toFixed(2))
})

$('.ShowContactInfo').on('click', () => {
	$('.ContactInfo').toggle(400);
})


$(window).click(function () {
	$(".ContactInfo").hide(400);
});

$('.ContactInfo').click(function (event) {
	event.stopPropagation();
});
$('.ShowContactInfo').click(function (event) {
	event.stopPropagation();
});

$('.Discount').on('click', () => {
	$('.SendMessageToInMobileIndex').show("slide", { direction: "right" }, 300);
	$('.SendMessageToInMobileIndexOverllay').show("slide", { direction: "right" }, 300);
})

$('.MoneyAsk').on('click', () => {
	$('.SendMessageToInMobile').show("slide", { direction: "right" }, 300);
	$('.SendMessageToInMobileOverllay').show("slide", { direction: "right" }, 300);
})

$('.CloseBtnForMoneyAsk , .SendMessageToSendBtn ').on('click', () => {

	var mq = window.matchMedia("(max-width: 991px)");

	$('.SendMessageToSendBtn').text('پیام شما ارسال شد');


	if (mq.matches) {
		$('.SendMessageToInMobile').hide("slide", { direction: "right" }, 1200);
		$('.SendMessageToInMobileOverllay').hide("slide", { direction: "right" }, 1200);
	}

	$('.SendMessageToInMobileIndex').hide("slide", { direction: "right" }, 1200);
	$('.SendMessageToInMobileIndexOverllay').hide("slide", { direction: "right" }, 1200);

	setTimeout(() => {

		$('.SendMessageToSendBtn').text('ارسال');

	}, 1000);

})

$('.navbar-toggler').on('click', () => {
	$('.sideBarMenuMobile').show("drop", { direction: "right" }, 300);
	$('#navbarSupportedContent').show("slide", { direction: "right" }, 300);
})

$('.CloseIconForMM').on('click', () => {
	$('.sideBarMenuMobile').hide("drop", { direction: "right" }, 300);
	$('#navbarSupportedContent').hide("slide", { direction: "right" }, 300);

})


$('.CityItemInModal').on('click', () => {
	$('.ShowCityParent').hide(400);
	$('.ShowCityChild').show(400);
})

$('.BackBtnInCityList').on('click', () => {
	$('.ShowCityParent').show(400);
	$('.ShowCityChild').hide(400);

})

var previousScroll = 0;
$(window).scroll(function (event) {
	var scroll = $(this).scrollTop();
	if (scroll > previousScroll) {
		$('.SubmitOfferMobile').hide();
		$('.main-nav').css('min-height', '88px');

	} else {
		$('.SubmitOfferMobile').fadeIn();
		$('.main-nav').css('min-height', '130px');

	}
	previousScroll = scroll;
});