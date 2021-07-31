function homeSlider(){
    $('.slider .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
      });
      $('.brand .slider-for').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        // fade: true,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }
  
        ]
      });
      $('.team .slider-for').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          },
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
  
        ]
      });
}
function menu(){
  var $window = $(window);
  var windowsize = $window.width();
  if (windowsize < 992) {
    $('.header .navbar .navbar-nav li.nav-item.dropdown .sub-menu').after('<div class="show"></div>');
  }
 
}
function toTop(){
  var $backToTop = $(".back-to-top");
  $backToTop.hide();


  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
  });
}
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
homeSlider();
menu();
toTop();