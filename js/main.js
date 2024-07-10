window.onload =function(){
    const swiper = new Swiper(".slideshow", {
        
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      });


      var promotion = new Swiper(".promo-inner", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
          320:{
              slidesPerView : 1,
              spaceBetween: 10,
          },
          768:{
              slidesPerView : 2,
              spaceBetween: 10,
          },
          1156:{
              slidesPerView : 3,
              spaceBetween: 20,
          },
          1920:{
              slidesPerView : 3,
              spaceBetween: 20,
          },
      },

      });


}