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

    // menu animation
    $( ".menu-mobile-btn" ).on( "click", function() {
      $(this).toggleClass( "js-closed" );
      $('.menu').toggleClass( "js-closed" );
    });

    // content animation
    $('.js-show').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100
	   });

    // menu mobile
    if ($(window).width() < 768) {
       $('.menu').addClass('js-closed');
    } else {
       $('.menu').removeClass('js-losed');
    }

});
