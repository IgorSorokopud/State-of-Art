(function ($) {
    $(document).ready(function () {
        $('.footer-subscribe-button').click(function () {
            var valForm = $('.footer-subscribe').val();
            if (Validator.isEmail(valForm)) {
                $('.footer-subscribe').removeClass('error-Form');
                $('.text-errors').hide();
                event.preventDefault();
                window.location.reload();
            } else {
                event.preventDefault();
                $('.footer-subscribe').addClass('error-Form');
                $('.text-errors').show();
            }
        });
    });
})(jQuery);
