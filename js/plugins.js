$(function(){
    'use strict';
    $(window).on('scroll', function(){
        var navbar = $('.navbar');
        navbar.filter('scrolled') && $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });
    $('.search').on('click', function(){
        $('.search-div').slideToggle();
        $('.search-div').css({
            position : 'fixed',
            zIndex : 2
        });
    });
    
    $('.menu-icon').click(function(){
        $('nav li').toggleClass('hide');
    });
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= 650){
            $('.scroll').show();
        }else{
            $('.scroll').fadeOut();
        }
    });
    $('.scroll').on('click', function(){
        $('html,body').animate({scrollTop : 0});
    });
  });















