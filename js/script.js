$(document).ready(function(){

  /*$(this).scrollTop(0);*/

  $(window).on('load scroll resize click', function(){
    var headerHeight = $('#forest2').height();
    var menuHeight = $('.menu').height();
    $('#header').css('height', headerHeight+'px')
    $('header').css('min-height', headerHeight+'px')
    $('.border-top').css('top', menuHeight+'px')
  });

  $(window).on('scroll load', function(){

    var wScroll = $(this).scrollTop();

    if (wScroll < $('header').height()){
      $('#forest0').css('top', Math.floor(wScroll) +'px')
      $('#forest1').css('top', Math.floor(wScroll * 0.99) +'px')
      $('#forest2').css('top', Math.floor(wScroll * 0.98) +'px')
      $('#forest3').css('top', Math.floor(wScroll * 0.95) +'px')
      $('#forest4').css('top', Math.floor(wScroll * 0.89) +'px')
      $('#forest5').css('top', Math.floor(wScroll * 0.84) +'px')
      $('#forest6').css('top', Math.floor(wScroll * 0.74) +'px')
      $('#forest7').css('top', Math.floor(wScroll * 0.64) +'px')
      $('#forest8').css('top', Math.floor(wScroll * 0.51) +'px')
      $('#forest9').css('top', Math.floor(wScroll * 0.31) +'px')
      $('#maintitle').css('top', 'calc(5% + '+ Math.floor(wScroll * 0.84) +'px)')
    }

    if (wScroll > $('#section-about').offset().top - ($(window).height() * 0.8)){
      $('#about-head, #about').addClass('is-showing');
      $('#about p, #about img').each(function(i){
        setTimeout(function(){
          $('#about p, #about img').eq(i).addClass('fadein');
        }, 750 + (250 * i));
      });
    }

    if (wScroll > $('#section-skills').offset().top - ($(window).height() * 0.8)){
      $('#skills-head, #skills').addClass('is-showing');
      $('.skill').each(function(i){
        setTimeout(function(){
          $('.skill').eq(i).addClass('fadein');
        }, 875 + (125 * i));
      });
    }

    if (wScroll > $('#section-portfolio').offset().top - ($(window).height() * 0.8)){
      $('#portfolio-head, #portfolio').addClass('is-showing');
      $('.port-item').each(function(i){
        setTimeout(function(){
          $('.port-item').eq(i).addClass('fadein');
        }, 750 + (250 * i));
      });
    }


    if (wScroll > $('#section-goals').offset().top - ($(window).height() * 0.8)){
      $('#goals-head, #goals').addClass('is-showing');
      $('#goals ul li').each(function(i){
        setTimeout(function(){
          $('#goals ul li').eq(i).addClass('fadein');
        }, 750 + (250 * i));
      });
    }

    if (wScroll > $('#section-contact').offset().top - ($(window).height() * 0.8)){
      $('#contact-head, #contact').addClass('is-showing');
      $('#contact p, #contact-form input, #contact-form textarea, #contact-form button').each(function(i){
        setTimeout(function(){
          $('#contact p, #contact-form input, #contact-form textarea, #contact-form button').eq(i).addClass('fadein');
        }, 750 + (250 * i));
      });
    }

  });

  $('.closed').click(function(){
    $('html, body').animate({
        scrollTop: $('.menu').offset().top
    }, 500);
    $('.alt-menu').toggle();
    $(this).toggleClass('closed open');
  });

  $('.open').click(function(){
    $('.alt-menu').toggle();
    $(this).toggleClass('closed open');
  });

  $('.menu-about').click(function(){
    $('html, body').animate({
        scrollTop: $("#section-about").offset().top - 80
    }, 500);
  });

  $('.menu-skills').click(function(){
    $('html, body').animate({
        scrollTop: $("#section-skills").offset().top - 80
    }, 500);
  });

  $('.menu-portfolio').click(function(){
    $('html, body').animate({
        scrollTop: $("#section-portfolio").offset().top - 80
    }, 500);
  });

  $('.menu-goals').click(function(){
    $('html, body').animate({
        scrollTop: $("#section-goals").offset().top - 80
    }, 500);
  });

  $('.menu-contact').click(function(){
    $('html, body').animate({
        scrollTop: $("#section-contact").offset().top - 80
    }, 500);
  });

  $('.alt-menu-about').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.alt-menu').toggle();
    $('html, body').animate({
        scrollTop: $("#section-about").offset().top - 64
    }, 500);
  });

  $('.alt-menu-skills').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.alt-menu').toggle();
    $('html, body').animate({
        scrollTop: $("#section-skills").offset().top - 64
    }, 500);
  });

  $('.alt-menu-portfolio').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.alt-menu').toggle();
    $('html, body').animate({
        scrollTop: $("#section-portfolio").offset().top - 64
    }, 500);
  });

  $('.alt-menu-goals').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.alt-menu').toggle();
    $('html, body').animate({
        scrollTop: $("#section-goals").offset().top - 64
    }, 500);
  });

  $('.alt-menu-contact').click(function(){
    $('.burger-menu').toggleClass('open');
    $('.alt-menu').toggle();
    $('html, body').animate({
        scrollTop: $("#section-contact").offset().top - 64
    }, 500);
  });

  $('#arrow').click(function(){
    $('html, body').animate({
      scrollTop: 0}, 1000);
  });

  $(window).on('load click keyup scroll', function(){
    if (
        $('#input-name').val().length > 0 &&
        $('#input-company').val().length > 0 &&
        $('#input-email').val().length > 0 &&
        $('#input-message').val().length > 0
      ){
        $('.input-submit').attr('disabled', false);
        $('.input-submit').addClass('submit-active');
      } else {
        $('.input-submit').attr('disabled', true);
        $('.input-submit').removeClass('submit-active');
      };
    });

});
