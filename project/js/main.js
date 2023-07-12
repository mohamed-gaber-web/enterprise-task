$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
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

  // menu
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

// Menu
// const menuToggle = document.getElementById("menu-toggle");

// function buttonclick() {
//   var menuList = document.getElementById("menu-mobile");
//   if (menuList.className == "menuOff") {
//     menuList.className = "menu-mobilemenuOn";
//   } else {
//     menuList.className = "menuOff";
//   }
// }
