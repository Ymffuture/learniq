
(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});
	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);





const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href' ,'tel:+27634414863');
// link.innerText = ' call :+27 634 414 863'

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var message = document.getElementById('whatsappMessage').value;
    var phone = '+27790830984'; // Replace with your phone number including country code
    var url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message);
    window.open(url, '_self');
  });

 

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const wordsToCheck = [
        'Course Details', 'Teacher\'s profile', 'Download Timetable PDF', 'timetable pre-view',
        'Online-links', 'payment', 'discord - Class group', 'Privacy Policy', 'Terms and Conditions' ,'Apply now' , 'Event Details' , 'Scholarship' , 'Research' , 'Notice','Send'
    ];

    links.forEach(link => {
        if (wordsToCheck.some(word => link.textContent.includes(word))) {
            link.classList.add('customLoadLink');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
	const loadLinks = document.querySelectorAll('.customLoadLink');
	const spinnerHTML = `
		<div class="container-pre">
			<style>
				.container-pre {
					--uib-size: 40px;
					--uib-color: orange;
					--uib-speed: 1.5s;
					--uib-dot-size: calc(var(--uib-size) * 0.4);
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					height: var(--uib-dot-size);
					width: var(--uib-size);
					left:45%;
				}
				.container-pre::before,
				.container-pre::after {
					content: '';
					position: absolute;
					height: var(--uib-dot-size);
					width: var(--uib-dot-size);
					border-radius: 50%;
					background-color: var(--uib-color);
					flex-shrink: 0;
					transition: background-color 0.3s ease;
				}
				.container-pre::before {
					animation: orbit var(--uib-speed) linear infinite;
				}
				.container-pre::after {
					animation: orbit var(--uib-speed) linear calc(var(--uib-speed) / -2) infinite;
				}
				@keyframes orbit {
					0% {
						transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
						opacity: 0.65;
					}
					5% {
						transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.684208);
						opacity: 0.58;
					}
					10% {
						transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.631576);
						opacity: 0.51;
					}
					15% {
						transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.578944);
						opacity: 0.44;
					}
					20% {
						transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.526312);
						opacity: 0.37;
					}
					25% {
						transform: translateX(0%) scale(0.47368);
						opacity: 0.3;
					}
					30% {
						transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.526312);
						opacity: 0.37;
					}
					35% {
						transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.578944);
						opacity: 0.44;
					}
					40% {
						transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.631576);
						opacity: 0.51;
					}
					45% {
						transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.684208);
						opacity: 0.58;
					}
					50% {
						transform: translateX(calc(var(--uib-size) * -0.25)) scale(0.73684);
						opacity: 0.65;
					}
					55% {
						transform: translateX(calc(var(--uib-size) * -0.235)) scale(0.789472);
						opacity: 0.72;
					}
					60% {
						transform: translateX(calc(var(--uib-size) * -0.182)) scale(0.842104);
						opacity: 0.79;
					}
					65% {
						transform: translateX(calc(var(--uib-size) * -0.129)) scale(0.894736);
						opacity: 0.86;
					}
					70% {
						transform: translateX(calc(var(--uib-size) * -0.076)) scale(0.947368);
						opacity: 0.93;
					}
					75% {
						transform: translateX(0%) scale(1);
						opacity: 1;
					}
					80% {
						transform: translateX(calc(var(--uib-size) * 0.076)) scale(0.947368);
						opacity: 0.93;
					}
					85% {
						transform: translateX(calc(var(--uib-size) * 0.129)) scale(0.894736);
						opacity: 0.86;
					}
					90% {
						transform: translateX(calc(var(--uib-size) * 0.182)) scale(0.842104);
						opacity: 0.79;
					}
					95% {
						transform: translateX(calc(var(--uib-size) * 0.235)) scale(0.789472);
						opacity: 0.72;
					}
					100% {
						transform: translateX(calc(var(--uib-size) * 0.25)) scale(0.73684);
						opacity: 0.65;
					}
				}
			</style>
		</div>
	`;

	loadLinks.forEach(loadLink => {
		loadLink.addEventListener('click', (event) => {
			event.preventDefault();  // Prevent the default action of the anchor link
			loadLink.classList.add('disabled');
			loadLink.innerHTML = `${spinnerHTML}`;

			// Simulate a network request or any async operation
			setTimeout(() => {
				loadLink.classList.remove('disabled');
				loadLink.innerHTML = 'Action complete';
				const url = loadLink.getAttribute('href');
				window.open(url, "_self");
			}, 3750); // 3.75 seconds delay
		});
	});
});
  