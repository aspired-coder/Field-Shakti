// Responsive Nav in jQuery

$(function () {
  menu = $("nav ul");

  $("#openup").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function (e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// Smooth Scrolling in jQuery
$(".cf a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

let btn = document.getElementsByClassName("btn");
console.log(btn);

for (let i = 0; i < btn.length; i++) {
  let content = document.getElementsByClassName(`item-${i}`);

  btn[i].addEventListener("click", function () {
    if (content[0].style.display === "flex") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "flex";
    }
  });
}
