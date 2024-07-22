document.addEventListener("DOMContentLoaded", function () {
    // let swiper = new Swiper(".hero__slider", {
    //     loop: false,
    //     spaceBetween: 0,
    //     slidesPerView: 1,
    //     allowTouchMove: false,
    //     navigation: {
    //         nextEl: ".hero__slider-next",
    //         prevEl: ".hero__slider-prev",
    //     }
    // });
    // let blogsSwiper = new Swiper(".blogs__slider", {
    //     loop: false,
    //     spaceBetween: 30,
    //     slidesPerView: 4,
    //     breakpoints: {
    //         931: {
    //             spaceBetween: 0,
    //         },
    //     },
    // });
    // document.querySelectorAll('.catalog__item').forEach(item => {
    //     item.addEventListener('mouseover', () => {
    //         const activeImg = item.querySelector('.catalog__item-images img.active');
    //         if (activeImg) {
    //             activeImg.classList.remove('active');
    //             activeImg.classList.add('no-active');
    //         }
    //     });
    //     item.addEventListener('mouseout', () => {
    //         const noActiveImg = item.querySelector('.catalog__item-images img.no-active');
    //         if (noActiveImg) {
    //             noActiveImg.classList.remove('no-active');
    //             noActiveImg.classList.add('active');
    //         }
    //     });
    // }); 





    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const phoneMore = document.querySelector('.header__phone-more');
    const phone = document.querySelector('.header__phone');
    const phoneContent = document.querySelector('.header__phone-content');
    const headerPhone = document.querySelector('.header__phone');
    burger.addEventListener('click', () => {
        burger.classList.toggle('show');
        menu.classList.toggle('show');
    });
    phoneMore.addEventListener('click', () => {
        phone.classList.toggle('show');
        phoneContent.classList.toggle('show');
    });
    headerPhone.addEventListener('click', () => {
        if (window.innerWidth < 737) {
            phone.classList.toggle('show');
            phoneContent.classList.toggle('show');
        }
    });
    







    function animateItem(index, delay, time) {
        return new Promise(resolve => {
            setTimeout(() => {
                const item = document.querySelectorAll('.footer__animation-item')[index];
                item.classList.add('animated');
                setTimeout(() => {
                    item.classList.remove('animated');
                    resolve();
                }, time);
            }, delay);
        });
    }
    async function startAnimation() {
        await animateItem(3, 1000, 1000);
        await animateItem(7, 0, 2000);
        await animateItem(12, 0, 1000);
        await animateItem(4, 1000, 1000);
        startAnimation();
    }
    startAnimation();
    const body = document.querySelector('.body');
    const catalog = document.querySelector('.header__catalog');
    const catalogLinks = document.querySelectorAll('.header__catalog-link');
    const catalogImages = document.querySelectorAll('.header__catalog-img');
    const catalogBlocks = document.querySelectorAll('.header__catalog-block');
    catalogLinks.forEach((link, index) => {
        link.addEventListener('mouseover', () => {
            catalogImages[index].classList.add('active');
        });
        link.addEventListener('mouseout', () => {
            catalogImages[index].classList.remove('active');
        });
    });
    catalogBlocks.forEach(block => {
        block.addEventListener('click', function() {
            catalog.classList.toggle('active');
            body.classList.toggle('no-scroll')
        });
    });
    document.addEventListener('click', function(event) {
        if (!catalog.contains(event.target) && !Array.from(catalogBlocks).some(block => block.contains(event.target))) {
            catalog.classList.remove('active');
            body.classList.remove('no-scroll')
        }
        if (!burger.contains(event.target) && !menu.contains(event.target)) {
            burger.classList.remove('show');
            menu.classList.remove('show');
        }
        if (!phoneMore.contains(event.target) && !phone.contains(event.target) && !phoneContent.contains(event.target)) {
            phone.classList.remove('show');
            phoneContent.classList.remove('show');
        }
    });  
    
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 10) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });

    const catalogToggle = document.querySelectorAll('.footer__name');
    catalogToggle.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    
});
