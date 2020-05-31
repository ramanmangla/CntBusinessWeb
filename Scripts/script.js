// Starting from the top whenever page is refreshed
// 20ms delay is used because browsers tend to go
// back to last scroll position after the page is loaded
// Not after the dom is ready
// Hiding/Removing CSS loader from DOM using
// callback after a long delay

$(document).ready(function () {
  // $("html,body").animate(
  //   {
  //     scrollTop: 0
  //   },
  //   "fast",
  //   function() {
  //     setTimeout(function() {
  //       $(".loader").fadeOut(800, function() {
  //         $("body").css("overflow", "visible");
  //       });
  //     }, 2000);
  //   }
  // );

  var lastScroll = 0;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 90) {
      $("header").addClass("shadowHeader");

      if ($(window).scrollTop() < lastScroll) {
        $("header").removeClass("hideHeader");
      } else {
        $("header").addClass("hideHeader");
      }
    } else {
      $("header").removeClass("shadowHeader");
      $("header").removeClass("hideHeader");
    }

    lastScroll = $(window).scrollTop();
  });
});

// Smooth transition to next page
// when navigation link is clicked
$("header nav a").on("click", function (e) {
  var targetHref = $(this).attr("href");
  // var offset = 0;
  // offset = targetHref == '#Projects' ? -40 : 0;

  $("html, body").animate(
    {
      scrollTop: $(targetHref).offset().top - 25,
    },
    1000
  );

  e.preventDefault();
});

// Current active experience
var expTargetID = $("a[href='#Publicis']");

// Experiences carousel
$(".experiences nav a").on("click", function (e) {
  e.preventDefault();

  $(expTargetID).removeClass("activeExperience");

  expTargetID = $(this);

  $(expTargetID).addClass("activeExperience");

  $(".experiences > div").animate(
    {
      scrollLeft:
        $(".experiences > div").scrollLeft() +
        $(expTargetID.attr("href")).position().left,
    },
    600
  );
});

$(window).resize(function () {
  var container = $(".experiences > div");

  container.scrollLeft(
    container.scrollLeft() + $(expTargetID.attr("href")).position().left
  );
});

// $('#AboutLink').click(function() {
//     $('html,body').animate({
//         scrollTop: $("#About").offset().top
//     }, 1000);
// });

// Responsive navigation
$("#navIcon").on("click", function () {
  $(".navLinks").css("right", "-3px");

  $(".navLinks a").on("click", function () {
    $(".navLinks").css("right", "-200px");
  });

  $(window).resize(function () {
    $(".navLinks").css("right", "-200px");
  });

  $(document).mouseup(function (e) {
    var menu = $(".navLinks");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.css("right", "-200px");
    }
  });
});

$("#closeNav").on("click", function () {
  $(".navLinks").css("right", "-200px");
});

$(".carousel-container").slick({
  infinite: true,
  // speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1700,
  arrows: false,
  draggable: false,
  swipe: false,
  // cssEase: "ease-out",
  speed: 1200,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// $(".about-carousel-awards").slick({
//   infinite: true,
//   // speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1700,
//   arrows: false,
//   draggable: false,
//   swipe: false,
//   // cssEase: "ease-out",
//   speed: 1200,
//   pauseOnFocus: false,
//   dots: true,
// });
