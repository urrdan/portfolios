$(document).ready(function () {
  //initial setting
  $(".text-hid").slideUp(0);
  $(".see-moreOrHide:last").fadeOut(0);
  $(".proj").addClass("projsudoclassbefore");
  $(".small-sidebar").css("display", "none");
  $(".dimensions").fadeOut(0);

  //adding menu to small screens
  cloned = $(".welcomePage").children(".logoo,ul");
  cloned2 = $(".side-contact");
  $(".sidebars").prepend(cloned.clone());
  $(".sidebar").prepend($("#img").clone());
  $(".sidebars>ul").prepend("<a href='#welcomePage'><li>HOME</li></a>");
  $(".small-sidebar").append(cloned2.clone());

  //functions

  function scrollanime(ele, classtoadd) {
    //for animating element on scroll
    if (
      $(window).scrollTop() >
      $(ele).offset().top - $(window).innerHeight() + $(ele).outerHeight() / 2
    ) {
      $(ele).addClass(classtoadd);
    }
  }

  //for the lines on either side of headings
  $(".heading-cont").append("<div><div>").prepend("<div>");
  $(".heading-cont").children("div").addClass("heading-div");

  $(".menu-icon").click(function () {
    $(this).toggleClass("fa-bars fa-times");
    $(".small-sidebar").slideToggle();
  });

  $(".small-sidebar").click(function () {
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    $(".small-sidebar").css("display", "none");
  });

  //nothing important (just for dimensions)
  $(".comment:last >i").click(function () {
    $(".dimensions").fadeToggle();
  });

  //windowscroll

  $(window).scroll(function () {
    $(".sidebars").height($(window).height() - $(".smll-scrn-menu").height());

    if ($(window).scrollTop() < $(".welcomePage").outerHeight()) {
      //$('.menu-bar').css('display','none')//delete
      $(".sidebar-cont").css("opacity", "0");
    } else {
      $(".sidebar-cont").css({ opacity: "1" });
    }

    scrollanime(".proj:eq(0)", "projsudoclassafter");
    scrollanime(".proj:eq(1)", "projsudoclassafter");
    scrollanime(".proj:eq(2)", "projsudoclassafter");
    scrollanime(".proj:eq(3)", "projsudoclassafter");
  });

  //about paragraph toggle
  $(".see-moreOrHide").click(function () {
    $(".text-hid").slideToggle();
    $(this).fadeOut(0);
    $(this).siblings(".see-moreOrHide").fadeIn();
  });

  $(".sidebars").height($(window).height() - $(".smll-scrn-menu").height());

  //dimension
  $(".dimensions>span:first").text("Width:  " + $(window).width());
  $(".dimensions>span:last").text("Height:  " + $(window).height());

  //solution for knows width breaking the page in IE and SAFARI-- need better solution.
  a = $("#sub-wrappa").css("width");
  $("#knows").css("width", a);
  $(window).resize(() => {
    a = "0";
    $("#knows").css("width", a);
    a = $("#sub-wrappa").css("width");
    $("#knows").css("width", a);
  });
});
