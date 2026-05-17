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
     autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 3,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,
    responsive: [
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
    centerPadding: "0px",
    speed: 1000,
    swipe: true,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
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