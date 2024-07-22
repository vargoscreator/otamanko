let sharesSwiper = new Swiper(".shares__slider", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
        931: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".shares__btn-next",
        prevEl: ".shares__btn-prev",
    }
});