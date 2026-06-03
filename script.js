
 const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    }
  }
});
  
const reviewSwiper = new Swiper('.reviewSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.review-next',
    prevEl: '.review-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView:3,
    },
    1440:{
      slidesPerView:4
    }, 
     1920: {
    slidesPerView: 4,
  },
  2560: {
    slidesPerView: 4,
  }
  }
});

const journalSwiper = new Swiper('.journalSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.journal-next',
    prevEl: '.journal-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 4,
    }
  }
});
