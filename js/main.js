$(function () {

  $(".hamburger").on("click", function () {

    $("header").toggleClass("open");
    $("body").toggleClass("fixed");

    // if ($("header").hasClass("open")) {
    //   $("header").removeClass("open");
    // } else {
    //   $("header").addClass("open");

    // }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("nav a").on("click", function () {

    $("header").removeClass("open");
    $("body").removeClass("fixed");
  });


  $(".slide-items").slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".liver-list").slick({
    arrows: true,
    infinite: false,
    centerMode: true,
    centerPadding: "0",
    speed: 1000,
    swipe: true,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });

  const lineBtn = document.querySelector(".floating-line-btn");
  const fv = document.querySelector(".first-view");

  window.addEventListener("scroll", () => {

    const fvBottom = fv.offsetHeight;

    if (window.scrollY > fvBottom) {
      lineBtn.classList.add("show");
    } else {
      lineBtn.classList.remove("show");
    }

  });


});