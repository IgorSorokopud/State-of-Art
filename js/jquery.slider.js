;(function ($) {
    var Slider = {
        isClickedFlag: false,

        moveLeft: function () {
            var self = this;

            self.sliderContainer.children('.active').removeClass('active').prev().addClass('active');
            self.sliderContainer.animate({
                left: +self.hParam.width
            }, self.hParam.speed , function () {
                self.sliderContainer.children('li:last-child').prependTo(self.sliderContainer);
                self.sliderContainer.css('left', '');
                self.isClickedFlag = false;
            });
        },

        moveRight: function () {
            var self = this;
            self.sliderContainer.children('.active').removeClass('active').next().addClass('active');
            self.sliderContainer.animate({
                right: +self.hParam.width
            }, self.hParam.speed , function () {
                self.sliderContainer.children('li:first-child').appendTo(self.sliderContainer);
                self.sliderContainer.css('right', '');
                self.isClickedFlag = false;
            });
        },

        move: function () {
            var self = this;

            self.forwardArrow.on('click', function () {
                if (self.isClickedFlag) {
                    return;
                }
                self.moveRight();
                self.isClickedFlag = true;
            });

            self.backArrow.on('click', function () {
                if (self.isClickedFlag) {
                    return;
                }
                self.moveLeft();
                self.isClickedFlag = true;
            });
        },

        init: function (options) {
            var self = this;

            self.hParam = $.extend({
                forwardArrow: $(".forward-arrow"),
                backArrow: $(".back-arrow"),
                sliderContainer: $(".slider"),
                width: 530,
                speed: 800
            }, options);

            self.forwardArrow = self.wrapperSlider.children(self.hParam.forwardArrow);
            self.backArrow = self.wrapperSlider.children(self.hParam.backArrow);
            self.sliderContainer = self.wrapperSlider.children(self.hParam.sliderContainer);

            self.move();
        }
    };

    $.fn.slider = function (methodOrOptions) {
        if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            var prototypeSlider = Object.create(Slider);
            prototypeSlider.wrapperSlider = this;
            prototypeSlider.init.apply(prototypeSlider, arguments);
        }
    };
})(jQuery);
