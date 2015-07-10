;(function ($) {
    $(document).ready(function () {
        var menuMobile = $('.header-nav ul');
        $('.button').toggle(function () {
            menuMobile.slideDown();
            menuMobile.addClass('active');
        }, function () {
            menuMobile.slideUp();
            menuMobile.removeClass('active');
        });

        $(window).resize(function () {
            var theClass = menuMobile.attr('class');
            if ($(window).width() >= '1050') {
                menuMobile.show();
            } else if (theClass != 'active' && $(window).width() <= '1050') {
                menuMobile.hide();
            }
        });
    });
})(jQuery);