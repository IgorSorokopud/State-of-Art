;(function ($) {
    var Slider = {
        isClickedFlag: false,

        moveLeft: function () {
            var self = this;
            $('.active').removeClass('active').prev().addClass('active');
            $(self.hParam.idSlider).animate({
                left: +self.hParam.width
            }, 800, function () {
                $(self.hParam.idSlider + ' li:last-child').prependTo(self.hParam.idSlider);
                $(self.hParam.idSlider).css('left', '');
                Slider.isClickedFlag = false;
            });
        },

        moveRight: function () {
            var self = this;
            $('.active').removeClass('active').next().addClass('active');
            $(self.hParam.idSlider).animate({
                right: +self.hParam.width
            }, 800, function () {
                $(self.hParam.idSlider + ' li:first-child').appendTo(self.hParam.idSlider);
                $(self.hParam.idSlider).css('right', '');
                Slider.isClickedFlag = false;
            });
        },

        move: function (options) {
            if (Slider.isClickedFlag) {
                return;
            }
            Slider.isClickedFlag = true;
            if (options === 'next') {
                Slider.moveRight();
            } else {
                Slider.moveLeft();
            }
        },

        init: function (options) {
            var self = this;

            Slider.hParam = $.extend({
                arrow: ".arrow",
                idSlider: "#slider",
                width: 500
            }, options);

            $(self.hParam.arrow).on('click', function () {
                Slider.move($(this).attr('id'));
            });
        }
    };

    $.fn.slider = function (methodOrOptions) {
        if (Slider[methodOrOptions]) {
            return Slider[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            var prototypeSlider = Object.create(Slider);
            return prototypeSlider.init.apply(prototypeSlider, arguments);
        }
    };
})(jQuery);