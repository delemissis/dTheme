import "bootstrap";
var $ = require("jquery");

$("html").addClass("light-footer");

$(document).ready(function() {
  $(".navbar-nav.ml-auto li")
    .addClass("nav-item")
    .find("a")
    .addClass("nav-link");

  $(".navbar-nav.ml-auto li a").click(function() {
    $(this)
      .parent()
      .addClass("active");
    $(".navbar-nav.ml-auto li a")
      .not(this)
      .removeClass("active");
  });

  $(".footer-button").click(function() {
    var button = $(this);
    button.toggleClass("btn-dark btn-light");
    $("#index-wrapper").toggleClass("light-theme dark-theme");
    $("a#entry-title-link").toggleClass("light-theme dark-theme");
    $(".entry-meta").toggleClass("light-theme dark-theme");
    $("#wrapper-footer").toggleClass("light-footer dark-footer");
    $("html").toggleClass("light-footer dark-footer");
    if (button.hasClass("btn-light")) {
      button.text("Light Mode");
    } else {
      button.text("Dark Mode");
    }
  });
});
