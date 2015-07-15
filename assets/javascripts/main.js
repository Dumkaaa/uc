$(document).ready(function(){

  $('select').styler()
  $('.toggle-window').magnificPopup({type: 'inline'});

  $('.m-slider-carousel').slick({
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.m-slider-control--prev'),
    nextArrow: $('.m-slider-control--next')
  });

  $('.m-news-carousel').slick({
    slidesToScroll: 1,
    speed: 0,
    prevArrow: $('.m-news-control--prev'),
    nextArrow: $('.m-news-control--next')
  });

  $.each($('.parallax'), function(i, e){
    $(e).jKit('parallax', {'strength': $(e).data('strength'), 'axis': $(e).data('axis')})
  });

  var routePlane = $('.route--1').find('.route-plane');
  var routePlane2 = $('.route--2').find('.route-plane');

  var routePlaneTL = new TimelineMax({repeat: -1});
  routePlaneTL.to(routePlane, 2.5, {
    bezier: {
      autoRotate: true,
      values: [{left: 35, top: 47}, {left: 67, top: 17}, {left: 98, top: -9}, {left: 130, top: -7}]
    }
  }).to(routePlane, 1, {opacity: 0}, '-=1');

  var routePlaneTL2 = new TimelineMax({repeat: -1});
  routePlaneTL2.to(routePlane2, 2.5, {
    bezier: {
      autoRotate: true,
      values: [{top: 115, left: 40}, {top: 110, left: 60}, {top: 90, left: 86}, {top: 78, left: 96}, {top: 60, left: 106}, {top: -10, left: 112}]
    }
  }).to(routePlane2, 1, {opacity: 0}, '-=1').delay(1);
});
