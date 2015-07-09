(function ($) {
    var Slider = {

        moveLeft: function () {
            $('.active').removeClass('active').prev().addClass('active');
            $(this._idSlider).animate({
                left: +this._width
            }, 800, function () {
                $(Slider._idSlider + ' li:last-child').prependTo(Slider._idSlider);
                $(Slider._idSlider).css('left', '');
            });
        },

        moveRight: function () {
            $('.active').removeClass('active').next().addClass('active');
            $(this._idSlider).animate({
                right: +this._width
            }, 800, function () {
                $(Slider._idSlider + ' li:first-child').appendTo(Slider._idSlider);
                $(Slider._idSlider).css('right', '');
            });
        },

        init: function () {
            var self = this;
            $(this._arrowBack).on('click', function () {
                self.moveLeft();
            });
            $(this._arrowForward).on('click', function () {
                self.moveRight();
            });

        }
    };

    $.fn.slider = function (arrowBack, arrowForward, idSlider, width) {
        if (typeof arrowForward == 'string') {
            Slider._arrowForward = arrowForward;
        }
        if (typeof arrowBack == 'string') {
            Slider._arrowBack = arrowBack;
        }
        if (typeof idSlider == 'string') {
            Slider._idSlider = idSlider;
        }

        if (!isNaN(width)) {
            Slider._width = width;
        }
        Slider.init()
    };
})(jQuery);