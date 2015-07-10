;(function ($) {
    var Slider = {
        flag: false,

        moveLeft: function () {
            var self = this;
            $('.active').removeClass('active').prev().addClass('active');
            $(self.hParam._idSlider).animate({
                left: +self.hParam._width
            }, 800, function () {
                $(self.hParam._idSlider + ' li:last-child').prependTo(self.hParam._idSlider);
                $(self.hParam._idSlider).css('left', '');
                Slider.flag = false;
            });
        },

        moveRight: function () {
            var self = this;
            $('.active').removeClass('active').next().addClass('active');
            $(self.hParam._idSlider).animate({
                right: +self.hParam._width
            }, 800, function () {
                $(self.hParam._idSlider + ' li:first-child').appendTo(self.hParam._idSlider);
                $(self.hParam._idSlider).css('right', '');
                Slider.flag = false;
            });
        },

        init: function (options) {
            var self = this;

            var settings = $.extend({
                _arrow: ".arrow",
                _idSlider: "#slider",
                _width: 500
            }, options);
            Slider.hParam = settings;

            $(self.hParam._arrow).on('click', function () {
                if (Slider.flag) return false;
                Slider.flag = true;
                if ($(options).attr('id') === 'next') {
                    Slider.moveRight();
                } else {
                    Slider.moveLeft();
                }
            });
        }
    };

    $.fn.slider = function (methodOrOptions) {
        if (Slider[methodOrOptions]) {
            return Slider[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            var prototypeSlider = Object.create(Slider);
            return prototypeSlider.init.apply(prototypeSlider, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);