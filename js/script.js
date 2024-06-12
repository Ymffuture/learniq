
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

// const forChange = document.querySelector('a');

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var message = document.getElementById('whatsappMessage').value;
    var phone = '+27790830984'; // Replace with your phone number including country code
    var url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(message);
    window.open(url, '_self');
  });


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loadLink = document.getElementById('customLoadLink');
    const spinner = document.getElementById('customSpinner');

    loadLink.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default action of the anchor link
        loadLink.classList.add('disabled');
        spinner.style.display = 'flex';
        loadLink.textContent = 'Loading...';

        // Simulate a network request or any async operation
        setTimeout(() => {
            spinner.style.display = 'none';
            loadLink.classList.remove('disabled');
            loadLink.textContent = 'Apply Now';
            window.open("https://qkwynvq6.forms.app/learniqform", "_blank");
        }, 3000); // 3 seconds delay
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const loadLinks = document.querySelectorAll('.customLoadLink');
    const spinner = document.getElementById('customSpinner');

    loadLinks.forEach(loadLink => {
        loadLink.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default action of the anchor link
            loadLink.classList.add('disabled');
            spinner.style.display = 'flex';
            loadLink.textContent = 'Loading...';

            // Simulate a network request or any async operation
            setTimeout(() => {
                spinner.style.display = 'none';
                loadLink.classList.remove('disabled');
                loadLink.textContent = 'Apply Now';
                const url = loadLink.getAttribute('href');
                window.open(url, "_self");
            }, 5750); // 3 seconds delay
        });
    });
});
 
  