//******************** Hero Slider JS ********************//
$('.hero_slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//******************** Hero Slider JS ********************//
$('.service_slider').owlCarousel({
    margin: 30,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1920: {
            items: 4
        }
    }
});




//******************** Our Products Slider JS ********************//
$('.products_slider').owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

//******************** Our clients Slider JS ********************//
$('.our_client_slider').owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 1
        },
        1000: {
            items: 5
        }
    }
});


//******************** Testimonial Slider JS ********************//

$(".testimonials_slider").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
        0: {
            items: 1,
            rtl: true
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//******************** associated_wrapper Slider JS ********************//

$(".associated_wrapper").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: false,
    items: 1,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




// AOS.init();

const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;


// Add event listener to each card header
document.querySelectorAll('.automation_service_area .accordion .accordion-button').forEach((link) => {
    link.addEventListener('click', function () {
        // Delay scrolling to allow the collapse animation to play
        setTimeout(() => {
            link.closest('.accordion-item').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Adjust delay as needed
    });
});