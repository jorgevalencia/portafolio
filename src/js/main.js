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
    $( ".menu-btn" ).on( "click", function() {
      $(this).toggleClass( "closed" );
      $('.menu-nav').toggleClass( "closed" );
    });

    // content animation
    $('.js-show').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100
	   });

});
