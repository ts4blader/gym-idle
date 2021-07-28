$(document).ready(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop() >= 200)
      $(".navbar").addClass("navbar-scrolled");
    else $(".navbar").removeClass("navbar-scrolled");
  });
});
