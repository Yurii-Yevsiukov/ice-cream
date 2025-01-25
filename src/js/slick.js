
$('.gallery-slick').slick({
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000
});
