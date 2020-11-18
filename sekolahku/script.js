var myCarousel = document.querySelector('#carouselExampleCaptions')
console.log(myCarousel);
var carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("scroll", function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', scrollY > 0);
})
