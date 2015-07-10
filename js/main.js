;(function ($) {
    $(document).ready(function () {
        $('.footer-subscribe-button').click(function () {
            event.preventDefault();
            var valForm = $('.footer-subscribe').val();
            if (Validator.isEmail(valForm)) {
                $('.footer-subscribe').removeClass('error-Form');
                $('.text-errors').hide();
                window.location.reload();
            } else {
                $('.footer-subscribe').addClass('error-Form');
                $('.text-errors').show();
            }
        });
    });
})(jQuery);
