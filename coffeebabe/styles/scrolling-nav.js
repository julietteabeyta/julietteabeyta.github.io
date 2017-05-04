//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    var windowHeight = $(window).height();
    if ( !isMobile ) {
       $('section').each(function() {
        var container = $(this).children();

        $(this).height(windowHeight).addClass('centeredShit');
        $(container).css('margin-top', -(container.height() / 2));
    }) 
    }
    
    
    $(document).on('click', 'a.page-scroll', function(event) {
        var anchor = $(this);
    //     var anchorTarget = $(anchor.attr('href'));
    //     var anchorChild = anchorTarget.children(".container");
    //     var anchorChildHeight = anchorChild.height();

    //     anchorChild.css('margin-top', -(anchorChildHeight / 2));
    //     anchorTarget.addClass('centeredShit');

        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top,
        }, 1500, 'easeInOutExpo');
    //     anchorTarget.height(windowHeight);
        event.preventDefault();
    });
});