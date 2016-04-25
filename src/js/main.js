$(document).ready(function(){

    // scroll animation
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // // elements show animation
    // tiles = $(".js-show").fadeTo(0, 0),
    // $(".js-show").hide();
    //
    // $(window).scroll(function(d,h) {
    //     tiles.each(function(i) {
    //         a = $(this).offset().top + $(this).height();
    //         b = $(window).scrollTop() + $(window).height();
    //         if (a < b) $(this).fadeTo(500,1).addClass("visible");
    //     });
    //  if (tiles.hasClass("visible"))  {
    //     var a = $(".js-show"), delayTime = 300, i = 0;
    //
    //     function animateSideBar() {
    //         if(i >= a.length) return;
    //
    //         // call fadeIn, and pass this function itself as the completion callback
    //         $(a[i]).fadeIn(delayTime, animateSideBar);
    //
    //         i++;
    //     }
    //
    //     animateSideBar(); // start it
    //
    // }
    // });

});
