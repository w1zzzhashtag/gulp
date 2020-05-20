$(".feedback__inner").slick({
    // normal options...
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });