
const mySlider = new Swiper('.swiper-container', {
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 65,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

console.log(mySlider)