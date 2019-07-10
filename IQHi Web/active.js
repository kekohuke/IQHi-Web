(function ($) {
    'use strict';
    var $window = $(window);
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
            $('.nav-link').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
            $('.nav-link').removeClass('sticky');
        }
    });

})(jQuery);