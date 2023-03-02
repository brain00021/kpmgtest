$(function () {
  const swiper = new Swiper("#homePageBanner", {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // current project setting
  const swiper2 = new Swiper(".currentSwiper1", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
    },
  });
  const swiper3 = new Swiper(".currentSwiper2", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
    },
  });
  const swiper4 = new Swiper(".currentSwiper3", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
    },
  });

  // tabSetting
  $("#tabs li a").click(function () {
    let t = $(this).attr("id");
    currentTab = t;
    //this is the start of our condition
    $("#tabs li a").removeClass("inactive");
    $(this).addClass("inactive");

    $(".currentProjectWrapper .currentProjectPanel").hide();
    $("#" + t + "C").fadeIn("slow");
  });
  $("#tabs li a").eq(0).click();

  // header menu setting
  let status = "close";
  $("#header-toggle").on("click", function () {
    if (status === "close") {
      $(this).addClass("toggled");
      $("#navbar").addClass("toggled");
      status = "open";
    } else {
      $(this).removeClass("toggled");
      $("#navbar").removeClass("toggled");
      status = "close";
    }
  });
});
