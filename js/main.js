$(function(){
  $('.reviews__inner').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, 
    arrows: false
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('active-header');
    } else {
      $('.header').removeClass('active-header');
    }
  });

  $(document).on('click','.process__video-link',function(e){
    e.preventDefault();
    $(this).addClass('process__video-active');
  });

  $('a.menu__list-link').on('click',function(){
    let id = $(this).attr('href');
    let top = $(id).offset().top - 82;
    $('body, html').animate({scrollTop: top}, 1500);
    document.getElementById('menu').classList.remove('menu-active');
  });

  $('.burger').on('click','a', function (e) {
    e.preventDefault();
    document.getElementById('menu').classList.toggle('menu-active');
  });

});