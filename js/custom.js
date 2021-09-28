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

	// $(window).on('scroll', function () {

	// 	/**Fixed header**/
	// 	if ($(window).scrollTop() >= 1) {
	// 		// $('.is-ts-sticky').addClass('sticky ');
	// 		// $('.is-ts-sticky2').addClass('sticky2 ');
	// 		$('body').css('margin', '29vh 0 0 0');
	// 	} else {
	// 		$('.is-ts-sticky').removeClass('sticky ');
	// 		$('.is-ts-sticky2').removeClass('sticky2 ');
	// 		$('.is-ts-sticky2').removeClass('sticky ');
	// 		$('body').css('margin', '0');
	// 	}

	// });




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

$('#ShowCityChoice , .ShowCityChoiceMobile , .ShowCityChoiceMobileInBt ').on('click', () => {
	$('.CityChoiceModal').show("fade", { direction: "up" }, 400);
	$('.CityChoiceModal').addClass('showMe');
	// $("body").addClass("modal-open");
})

$('.CloseModal , .closeIconForCityModal').on('click', () => {
	$('.CityChoiceModal').hide("fade", { direction: "down" }, 400);

	setTimeout(() => {
		$('.CityChoiceModal').removeClass("showMe");
	}, 330);

	// $("body").removeClass("modal-open");
})

$(window).click(function () {
	$('.CityChoiceModal').hide("fade", { direction: "down" }, 400);

	setTimeout(() => {
		$('.CityChoiceModal').removeClass("showMe");
	}, 330);

	// $("body").removeClass("modal-open");
});

$('.ShowCityChoiceMobile , .ShowCityChoiceMobileInBt').click(function (event) {
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

$('.Discount, .HDTopRight').on('click', () => {
	$('.SendMessageToInMobileIndex').show("fade", { direction: "up" }, 500);
	$('.SendMessageToInMobileIndexOverllay').show("fade", { direction: "right" }, 500);
})

$('.MoneyAsk ').on('click', () => {
	$('.SendMessageToInMobile').show("slide", { direction: "right" }, 300);
	$('.SendMessageToInMobileOverllay').show("slide", { direction: "right" }, 300);
})

$(".CloseBtnForMoneyAsk ").on('click', () => {

	var mq2 = window.matchMedia("(max-width: 991px)");

	if (mq2.matches) {
		$('.SendMessageToInMobile').hide("fade", { direction: "right" }, 400);
		$('.SendMessageToInMobileOverllay').hide("fade", { direction: "right" }, 400);
	}

	$('.SendMessageToInMobileIndex').hide("fade", { direction: "right" }, 400);
	$('.SendMessageToInMobileIndexOverllay').hide("fade", { direction: "right" }, 400);


})

$('.SendMessageToSendBtn ').on('click', () => {

	var firstINT = $(".firstInputName input").val();
	var firstLBL = $(".firstInputName i");

	var secondINT = $(".SecondInputNumber  input").val();
	var secondLBL = $(".SecondInputNumber i");

	if ((firstINT.length > 0) && (secondINT.length > 0)) {

		$('.SendMessageToSendBtn').removeClass("RedWarningFieldBG");

		firstLBL.removeClass("RedWarningFieldCL");

		secondLBL.removeClass("RedWarningFieldCL");

		var mq = window.matchMedia("(max-width: 991px)");


		setTimeout(() => {
			$('.SendMessageToSendBtn').text('.');

		}, 200);


		setTimeout(() => {
			$('.SendMessageToSendBtn').text('..');

		}, 500);


		setTimeout(() => {
			$('.SendMessageToSendBtn').text('...');

		}, 900);

		setTimeout(() => {
			$('.SendMessageToSendBtn').text('پیام شما ارسال شد');

		}, 1200);


		setTimeout(() => {


			if (mq.matches) {
				$('.SendMessageToInMobile').hide("fade", { direction: "right" }, 1200);
				$('.SendMessageToInMobileOverllay').hide("fade", { direction: "right" }, 1200);
			}

			$('.SendMessageToInMobileIndex').hide("fade", { direction: "right" }, 1200);
			$('.SendMessageToInMobileIndexOverllay').hide("fade", { direction: "right" }, 1200);

		}, 1400);

		setTimeout(() => {
			$('.SendMessageToSendBtn').text('ارسال');

		}, 4000);

	} else {

		$('.SendMessageToSendBtn').addClass("RedWarningFieldBG");

		$('.SendMessageToSendBtn').text('اطلاعات را درست وارد کنید');

		firstLBL.addClass("RedWarningFieldCL");

		secondLBL.addClass("RedWarningFieldCL");

	}


})

$('.navbar-toggler').on('click', () => {
	$('.sideBarMenuMobile').show("drop", { direction: "right" }, 300);
	$('#navbarSupportedContent').show("slide", { direction: "right" }, 300);
})


$('.navbartogglerMobileBt').on('click', () => {
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




var mq3 = window.matchMedia("(max-width: 991px)");
if (mq3.matches) {
	$('#main-navMObile').hide();
	$(window).scroll(function () {
		var header = $('#main-nav');
		var headerMobile = $('#main-navMObile');
		var scroll = $(window).scrollTop();
		console.log(scroll);
		if (scroll >= 100) {
			header.hide();
			headerMobile.show();
			headerMobile.addClass('stickyMobile');
		}
		else {
			header.show('fade', 200);
			headerMobile.hide();
			headerMobile.removeClass('stickyMobile');
		}

	});

	var previousScroll = 0;
	$(window).scroll(function (event) {
		var thisscroll = $(this).scrollTop();
		if (thisscroll >= 100) {
			if (thisscroll > previousScroll) {
				$('.SubmitOfferMobile').hide();
				$('.main-nav').css('min-height', '88px');

			} else {
				$('.SubmitOfferMobile').show('fade', 'up', 20);
				$('.main-nav').css('min-height', '130px');

			}
			previousScroll = thisscroll;
		}
		else {
			$('.SubmitOfferMobile').show();
		}
	});

}
else {
	$('.SubmitOfferMobile').hide();

	$(window).scroll(function () {
		var header = $('#main-nav'),
			scroll = $(window).scrollTop();
		// console.log(scroll)
		if (scroll >= 90) {
			header.addClass('sticky');
			$("body").css("padding-top", "75px");
		}
		else {
			header.removeClass('sticky');
			$("body").css("padding-top", "0px");

		};

	});

}


$('.HDTopLeft').on('click', () => {

	$('.HDTopLeft').css('background', '#F8F9FF');

	$('.HDTopRight , .HDBottomLeft').css('opacity', 0)

	$('.ContactChild').show("slide", { direction: "up" }, 200);

	$('.CLoseMeCCD').show("puff", { direction: "left" }, 200);

	$('.CCDs1').show("fade", { direction: "up" }, 300);
	$('.CCDs2').show("fade", { direction: "up" }, 300);
	$('.CCDs3').show("fade", { direction: "up" }, 300);

	setTimeout(() => {
		$('.CCDs1').css('display', "flex");
		$('.CCDs2').css('display', "flex");
		$('.CCDs3').css('display', "flex");
	}, 311);

})


$('.CLoseMeCCD').on('click', () => {

	$('.HDTopLeft').css('background', '#FFF');

	$('.HDTopRight , .HDBottomLeft').css('opacity', 1)

	$('.ContactChild').hide("slide", { direction: "down" }, 200);

	$('.CLoseMeCCD').hide("puff", { direction: "right" }, 400);

	$('.CCDs1').hide("slide", { direction: "down" }, 300);
	$('.CCDs2').hide("slide", { direction: "down" }, 500);
	$('.CCDs3').hide("slide", { direction: "down" }, 900);

})

var NavNum = 0;

$('.NavSearchPc').on('click', () => {
	if (NavNum == 0) {
		$('.SearchAreaInPc').show();
		$('.NavSearchPc i').removeClass('icon icon-search1', 0);
		$('.NavSearchPc i').addClass('fa fa-close', 0);
		$('.NavSearchPc i').css('left', '10px');
		setTimeout(() => {
			NavNum = 1;
		}, 200);
	}
	if (NavNum == 1) {
		$('.SearchAreaInPc').hide();
		$('.NavSearchPc i').addClass('icon icon-search1', 0);
		$('.NavSearchPc i').removeClass('fa fa-close', 0);
		$('.NavSearchPc i').css('left', '9px');
		setTimeout(() => {
			NavNum = 0;
		}, 200);
	}
})

var x, i, j, l, ll, selElmnt, a, b, c;


x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;

	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);

	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {


		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {


			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {


		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {


	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}


document.addEventListener("click", closeAllSelect);




$(document).ready(function () {


	$(".LeftSideItemBlog").mouseenter(function () {


		var item = this.getElementsByClassName("SubTextBlog2")[0];

		$(item).css("bottom", "-14px");
		$(item).css("z-index", "3");

	});

	$(".LeftSideItemBlog").mouseleave(function () {


		var item = this.getElementsByClassName("SubTextBlog2")[0];

		$(item).css("bottom", "-64px");
		$(item).css("z-index", "-2");

	});


});

$('.showMoreCM').on('click', () => {

	$('.showMoreCM').hide(200);

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");

	$('.post-comments-new .showCm .Dta').append("<div class='Text'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، <span class='Date'> <i class='far fa-clock'></i> 18 اردیبهشت 1399 </span> <span class='Author'> <i class='far fa-user'></i> علی احمدی </span></div>");


	$('.post-comments-new .showCm .Dta').css('overflow-y', 'auto');
})