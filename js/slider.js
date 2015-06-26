(function ($) {
    var Slider = {
        _arrowForward: '.forward-arrow',
        _arrowBack: '.back-arrow',
        _width: 500,
        _height: 350,
        _idSlider: '#slider',

        setIdSlider: function () {
            var idSlider = this._idSlider;
            var setWidth = this._width;
            var setHeight = this._height;
            var allLi = idSlider + ' li';
            var wrapperSlider = "#" + $(idSlider).parent().closest('div').attr('id');
            jQuery(wrapperSlider + ' ,' + allLi).css({
                'height': setHeight
            });
            var numberLi = jQuery(allLi).length;
            var lengthAllSliders = setWidth * numberLi;
            jQuery(idSlider).css({
                'width': lengthAllSliders,
                'height': setHeight
            });
        },

        moveLeft: function () {
            var width = this._width;
            var sliderId = this._idSlider;
            $('.active').prev().addClass('active').next().removeClass('active');
            jQuery(sliderId).animate({
                left: +width
            }, 800, function () {
                jQuery(sliderId + ' li:last-child').prependTo(sliderId);
                jQuery(sliderId).css('left', '');
            });
        },

        moveRight: function () {
            var width = this._width;
            var sliderId = this._idSlider;
            $('.active').next().addClass('active').prev().removeClass('active');
            jQuery(sliderId).animate({
                right: +width
            }, 800, function () {
                jQuery(sliderId + ' li:first-child').appendTo(sliderId);
                jQuery(sliderId).css('right', '');
            });
        },

        events: function () {
            var self = this;
            $(this._arrowBack).on('click', function () {
                self.moveLeft();
            });
            $(this._arrowForward).on('click', function () {
                self.moveRight();
            });
        },
        init: function () {
            this.events();
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