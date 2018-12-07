'use strict';

var BuscadorTapas = function() {
    if ($('input[type="range"]').length > 0) {
        var monthInputRange = $('.js-range-month');
        var yearInputRange = $('.js-range-year');
        var monthLabelLow = $('.js-range-month-low');
        var monthLabelHigh = $('.js-range-month-high');
        var yearLabelLow = $('.js-range-year-low');
        var yearLabelHigh = $('.js-range-year-high');
        var monthInputFrom = $('#inputMonthFrom');
        var monthInputTo = $('#inputMonthTo');
        var yearInputFrom = $('#inputYearFrom');
        var yearInputTo = $('#inputYearTo');
        var monthLabels = [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dic'
        ]

        function updateMonthRangeValues() {
            var monthInputValue = $('.js-range-month.original');

            var valueLow = monthInputValue.get(0).valueLow;
            var valueHigh = monthInputValue.get(0).valueHigh;

            monthLabelLow.html('<span>' + monthLabels[valueLow] + '</span>');
            monthLabelHigh.html('<span>' + monthLabels[valueHigh] + '</span>');

            monthInputFrom.val(valueLow);
            monthInputTo.val(valueHigh);

            updateMonthLabelPosition(valueLow, valueHigh);
        }

        function updateMonthLabelPosition(low, high) {
            monthLabelLow.css('left', ((low-1) * 100)/11 + '%');
            monthLabelHigh.css('left', ((high-1) * 100)/11 + '%');
        }

        monthInputRange.on('input', updateMonthRangeValues);
        updateMonthRangeValues();

        function updateYearRangeValues() {
            var yearInputValue = $('.js-range-year.original');

            var valueLow = yearInputValue.get(0).valueLow;
            var valueHigh = yearInputValue.get(0).valueHigh;
            
            var min = yearInputValue.get(0).min;
            var max = yearInputValue.get(0).max;
            
            yearLabelLow.html('<span>' + (valueLow) + '</span>');
            yearLabelHigh.html('<span>' + (valueHigh) + '</span>');

            yearInputFrom.val(valueLow);
            yearInputTo.val(valueHigh);

            updateYearLabelPosition(min, max, valueLow, valueHigh);
        }

        function updateYearLabelPosition(min, max, low, high) {
            var qty=max-min;
            yearLabelLow.css('left', ((low-min) * 100)/qty + '%');
            yearLabelHigh.css('left', ((high-min) * 100)/qty + '%');
        }

        yearInputRange.on('input', updateYearRangeValues);
        updateYearRangeValues();
    }
}

module.exports = BuscadorTapas;
