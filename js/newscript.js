jQuery(document).ready(function ($) {
  "use strict";

  // Time Picker HIGHLIGHT

  $("#timepicker").timepicker({
    timeFormat: "h:mm p",
    interval: 60,
    minTime: "7",
    maxTime: "10:00pm",
    defaultTime: "Time to Call",
    startTime: "07:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  // Slick Slider HIGHLIGHT
  $(".similarPostBox-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    buttons: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
