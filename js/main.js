$(function(){
    $('#top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.menu-content').toggleClass('open');
    });

    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 150){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
    });
});