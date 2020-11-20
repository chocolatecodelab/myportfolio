var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("scroll", function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', scrollY > 0);
})

$('.page-scroll').on('click', function(event) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 750);
    event.preventDefault();
});


$(document).ready(function () {

    let $button = $('.extra .button-group button')

    $button.click(function (e) {
        $('.extra .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.extra .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.extra .button-group #btn1').trigger('click');

    $('.extra .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    let $btns = $('.achievement .button-group button');

    $btns.click(function (e) {

        $('.achievement .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.achievement .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.achievement .button-group #btn1').trigger('click');

    $('.achievement .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    $(' .facility .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    $(' .teacher .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

});   

// init
AOS.init();
