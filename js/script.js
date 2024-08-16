$(document).ready(function () {
  // ONE PAGE NAV ACTIVE FUNCTION
  var topOffset = $(".header-area").height() + 10;
  $("nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: topOffset,
  });
  // Header sticky function
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-area").removeClass("active");
    } else {
      $(".header-area").addClass("active");
    }
  });
  // Aos Js
  AOS.init({
    offset: 120,
    duration: 1000,
  });
});
