$(document).ready(function(){ //시작
 
  var mv = new Swiper(".mv", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  var d_mv = new Swiper(".d-mv", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var clinic = new Swiper(".clinic", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}); //끝