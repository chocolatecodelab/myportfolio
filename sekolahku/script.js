var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("scroll", function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', scrollY > 0);
})


// let button = document.querySelectorAll('.achievement .button-group button');
// button.forEach(function(e) {
//     e.addEventListener('click', function() {
//         button.forEach(function(e) {
//             e.classList.remove('active');
//         })
//         e.classList.add('active');

        
//     })
// })

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
    // let selector = e.target.attr('data-filter');
    // document.querySelector('.achievement .gird').isotope({
    //     filter: selector
    // });

    // return false;
