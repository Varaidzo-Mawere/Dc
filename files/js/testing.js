// $('.slick_slide').slick({
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     Infinity: false,
//     Arrow:true,
   
//     nextArrow:'<i class="fas fa-chevron-circle-right right-arrow">',
//     prevArrow:'<i class="fas fa-chevron-circle-left   left-arrow">',

    
   
    
//   });






$('.slick_slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    nextArrow:'<i class="fas fa-arrow-right right-arrow">',
    prevArrow:'<i class="fas fa-arrow-left   left-arrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
   
  });
  