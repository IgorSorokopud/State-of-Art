(function ($) {
    $(document).ready(function () {
        $('.button-send').click(function () {
            var valForm = $('.validate').val();
            var resultValForm = Validator.isEmail(valForm);
            if (resultValForm) {
                document.location.href = "https://www.google.com.ua";
                $('.validate').removeClass('errorForm');
                $('.text-errors').hide();
            } else {
                event.preventDefault();
                $('.validate').addClass('errorForm');
                $('.text-errors').show();
            }
        });
    });
})(jQuery);
