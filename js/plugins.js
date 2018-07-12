$(function () {
    'use strict';
    $(window).on('scroll', function () {
        var navbar = $('.navbar');
        navbar.filter('scrolled') && $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');

        /*        if($(window).scrollTop() >= $('.mountains').offset().top){
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
                } */

        if ($(window).scrollTop() >= 650) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });
    $('.search').on('click', function () {
        $('.search-div').slideToggle();
        $('.search-div').css({
            position: 'fixed',
            zIndex: 2
        });
    });

    $('.menu-icon').click(function () {
        $('nav li').toggleClass('hideElement').toggleClass('hide');
    });
    $('.scroll').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
    $('.menu-icon').on('click', function () {
        $('.navigation').slideToggle().animate({
            left: 0 + 'px'
        }, 800);
    });

    //Start Chat

    $('.chat-title-icon').find('a:first-child').on('click', function () {
        $('.chat-content, .chat-send').slideToggle();
    });

    function sendMessage() {
        var addMessage = $('#add-message').val();
        if (addMessage == ' ') {
            return false;
        } else {
            $('<div class="chat-forward">' + addMessage + '</div>').appendTo($('.chat-content'));
            $('#add-message').val('');
        }
    }
    $('#add-message').on('keypress', function (event) {
        var keyboardKey = event.keyCode || event.which;
        if (keyboardKey == 13) {
            sendMessage();
        }
    });
    $('.paperclip input[type="file"]').wrap('<div class="custom-field"></div>');
    $('.custom-field').prepend('<i class="fas fa-paperclip" ><i>');
    $('.paperclip input[type="file"]').change(function () {
        $('.chat-send :input[type="text"]').val($(this).val());
    });
    // Start Slider 
    var numOfThumnails = $('.thumbnails').children().length,
        marginBetween = .2,
        totalMargin = (numOfThumnails - 1) * marginBetween,
        thumbnailsImgWidth = (100 - totalMargin) / numOfThumnails;
    $('.thumbnails img').css({
        'width': thumbnailsImgWidth + '%',
        'margin-right': marginBetween + '%'
    });
    $('.thumbnails img').on('click', function () {
        $(this).addClass('select').siblings().removeClass('select');
        $('.main-img img').hide().attr('src', $(this).attr('src')).fadeIn(300);
    });
    $('.main-img .fa-chevron-right').on('click', function () {
        if ($('.thumbnails .select').is(':last-child')) {
            $('.thumbnails img').eq(0).click();
        } else {
            $('.thumbnails .select').next().click();
        }

    });
});
