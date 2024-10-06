    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay:true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });



    var swiper = new Swiper(".saySlider", {
      
      loop:true,
      autoplay:false,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
    var swiper = new swiper(".mySwiper", {

      loop:tue,
      autoplay:tre,

      slidesPerView: 1,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



