(function ($) {
    var Slider = {
        
        moveLeft: function () {
            var width = this._width;
            var sliderId = this._idSlider;
            $('.active').prev().addClass('active').next().removeClass('active');
            $(sliderId).animate({
                left: +width
            }, 800, function () {
                $(sliderId + ' li:last-child').prependTo(sliderId);
                $(sliderId).css('left', '');
            });
        },

        moveRight: function () {
            var width = this._width;
            var sliderId = this._idSlider;
            $('.active').next().addClass('active').prev().removeClass('active');
            $(sliderId).animate({
                right: +width
            }, 800, function () {
                $(sliderId + ' li:first-child').appendTo(sliderId);
                $(sliderId).css('right', '');
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