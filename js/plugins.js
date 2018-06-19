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
        $('nav li').toggleClass('hideElement').toggleClass('hide');
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
        $('html,body').animate({scrollTop : 0}, 1500);
    });

    
    
    
    
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1140){
            var interval = setInterval(function(){
            var progress1 = $('.progress1');
            var number = parseInt(progress1.html());
                if(number !== 0){
                    progress1.html(number + 1)
                }
                 if(number == 16){
                     clearInterval(interval);
                 }
            }, 200);

            var interval2 = setInterval(function(){
            var progress2 = $('.progress2');
            var number2 = parseInt(progress2.html());
                if(number2 !== 0){
                    progress2.html(number2 + 1)
                }
                    if(number2 == 112){
                        clearInterval(interval2);
                    }
            }, 75);

            var interval3 = setInterval(function(){
            var progress3 = $('.progress3');
            var number3 = parseInt(progress3.html());
                if(number3 !== 0){
                    progress3.html(number3 + 1)
                }
                    if(number3 == 1922){
                        clearInterval(interval3);
                    }
            });

            var interval4 = setInterval(function(){
            var progress4 = $('.progress4');
            var number4 = parseInt(progress4.html());
                if(number4 !== 0){
                    progress4.html(number4 + 1)
                }
                    if(number4 == 14){
                        clearInterval(interval4);
                    }
            }, 200);
        }
    });
    
    
    
    
    
    
    $('.menu-icon').on('click', function(){
        $('.navigation').slideToggle().animate({
           left : 0 + 'px' 
        }, 800); 
    });
    $(window).scroll(function(){
        console.log($(window).scrollTop());
    });
});







