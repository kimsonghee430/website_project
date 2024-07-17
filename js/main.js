window.onload = function(){
  // top버튼 스크롤 기능=======================
  const topBtn = document.getElementById("bt-img");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 2777,
        behavior: "smooth",
      });
    } 
    else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // swiper
    const swiper = new Swiper(".slideshow", {
        
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },


      });


      var promotion = new Swiper(".promo-inner", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,

        navigation: {
          nextEl: ".promo-slide .swiper-button-next",
          prevEl: ".promo-slide .swiper-button-prev",
        },

        breakpoints:{
          768:{
                slidesPerView : 3,
                // spaceBetween: 10,
            },
          468:{
                slidesPerView : 2.5,
                // spaceBetween: 10,
            },
          // 320:{
          //     slidesPerView : 1,
          //     spaceBetween: 10,
          // },
          // 768:{
          //     slidesPerView : 2,
          //     spaceBetween: 10,
          // },
          // 1156:{
          //     slidesPerView : 3,
          //     spaceBetween: 20,
          // },
          // 1920:{
          //     slidesPerView : 3,
          //     spaceBetween: 20,
          // },
      },

      });

      var topRank = new Swiper(".rank-inner", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,

        navigation: {
          nextEl: ".top-rank-slide .swiper-button-next",
          prevEl: ".top-rank-slide .swiper-button-prev",
        },

        breakpoints:{
        //   1210:{
        //     slidesPerView : 3,
        //     // spaceBetween: 10,
        // },
        468:{
          slidesPerView : 3,
          // spaceBetween: 10,
      },
          768:{
            slidesPerView :3,
            // spaceBetween: 10,
        },
     

      },

      });



      let textboxUp = document.querySelector(".promo-textbox");
      textboxUp.addEventListener("click", function(){
      textboxUp.classList.toggle("active")});

      // let neviDown = document.querySelector(".head-menu");
      // let depth = document.querySelector(".depth2")
      // neviDown.addEventListener("click", function(){
      //   depth.classList.toggle("hover")});
}


$(document).ready(function(){
  $(".head-menu").mouseover(function(){
    $(this).find(".depth2").stop().slideDown(0)
  })


  $(".head-menu").mouseout(function(){
    // console.log(this);
    $(this).find(".depth2").slideUp(0)
  })
})


   
 