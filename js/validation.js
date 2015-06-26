(function ($) {
    $(document).ready(function () {
        $('.validate').on('input', function () {
            validate();
        });
        function validate() {
            var borderError = $('.validate');
            var buttonSend = $('.button-send');
            var textError = $('.text-errors');
            var valForm = borderError.val();
            if (valid(valForm)) {
                borderError.removeClass('errorForm');
                buttonSend.removeAttr('disabled');
                textError.hide();
            } else {
                borderError.addClass('errorForm');
                buttonSend.attr('disabled', 'disabled');
                textError.show();
            }
            function valid(value) {
                var regexp = /^[a-zA-Z]+$/;
                return regexp.test(value);
            }
        }
    });
})(jQuery);