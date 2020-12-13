const sounds = ['sound.mp3', 'sound2.mp3', 'sound3.mp3'];
const soundBtns = document.querySelectorAll('.reviews__item-sound');

const mySlider = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
    breakpoints: {
        1600: {
            spaceBetween: 65,
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 45,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    }
});

const playSound = (evt) => {
    const audio = new Audio();
    const n = Math.floor(Math.random() * 3);
    audio.src = sounds[n];
    audio.addEventListener('ended', () => evt.target.classList.remove('reviews__item-sound_active'));
    audio.play();
    evt.target.classList.add('reviews__item-sound_active');
}

soundBtns.forEach(item => item.addEventListener('click', (evt) => playSound(evt)));
