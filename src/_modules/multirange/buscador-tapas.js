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
            monthLabelLow.css('left', (low * 100)/11 + '%');
            monthLabelHigh.css('left', (high * 100)/11 + '%');
        }

        monthInputRange.on('input', updateMonthRangeValues);
        updateMonthRangeValues();

        function updateYearRangeValues() {
            var yearInputValue = $('.js-range-year.original');
            var baseYear = 1920;

            var valueLow = yearInputValue.get(0).valueLow;
            var valueHigh = yearInputValue.get(0).valueHigh;

            yearLabelLow.html('<span>' + (baseYear + valueLow) + '</span>');
            yearLabelHigh.html('<span>' + (baseYear + valueHigh) + '</span>');

            yearInputFrom.val(baseYear + valueLow);
            yearInputTo.val(baseYear + valueHigh);

            updateYearLabelPosition(valueLow, valueHigh);
        }

        function updateYearLabelPosition(low, high) {
            yearLabelLow.css('left', (low * 100)/98 + '%');
            yearLabelHigh.css('left', (high * 100)/98 + '%');
        }

        yearInputRange.on('input', updateYearRangeValues);
        updateYearRangeValues();
    }
}

module.exports = BuscadorTapas;
