$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1600: {
        items: 4,
      },
    },
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".slider-nav",
    prevArrow: false,
    nextArrow: false,
    verticalSwiping: true,
    vertical: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    // slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    // centerMode: true,
    vertical: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(window).on("resize orientationchange", function () {
    if ($(window).width() > 1200) {
      $(".slider-nav").slick("unslick");
      $(".slider-nav").slick({
        slidesToShow: 5,
        asNavFor: ".slider-for",
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true,
        prevArrow: false,
        nextArrow: false,
      });
    }
  });

  // Menu Toggle
  $("#openMenu").click(function () {
    var menu = $("#menu");
    if ($(menu).is(":visible")) {
      $(menu).animate({ width: 0 }, 1000, function () {
        $(menu).hide();
      });
    } else {
      $(menu).show().animate({ width: 400 }, 500);
    }
  });
});
