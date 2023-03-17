var dates = document.querySelectorAll("section time.hidden");
var i = 1;
Array.prototype.forEach.call(dates, function (caldate) {
    setTimeout(function () { caldate.classList.remove("hidden") }, 250 * i)
    i++;
})

$(function () {

    var targetDate = new Date(Date.UTC(2023, 03, 01));
    var now = new Date();

    window.days = daysBetween(now, targetDate);
    var secondsLeft = secondsDifference(now, targetDate);
    window.hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft = secondsLeft - (window.hours * 60 * 60);
    window.minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft - (window.minutes * 60);
    console.log(secondsLeft);
    window.seconds = Math.floor(secondsLeft);

    startCountdown();
});
var interval;

function daysBetween(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);
}

function secondsDifference(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    var difference = difference_ms / one_day;
    var offset = difference - Math.floor(difference);
    return offset * (60 * 60 * 24);
}



function startCountdown() {
    $('#input-container').hide();
    $('#countdown-container').show();

    displayValue('#js-days', window.days);
    displayValue('#js-hours', window.hours);
    displayValue('#js-minutes', window.minutes);
    displayValue('#js-seconds', window.seconds);

    interval = setInterval(function () {
        if (window.seconds > 0) {
            window.seconds--;
            displayValue('#js-seconds', window.seconds);
        } else {
            // Seconds is zero - check the minutes
            if (window.minutes > 0) {
                window.minutes--;
                window.seconds = 59;
                updateValues('minutes');
            } else {
                // Minutes is zero, check the hours
                if (window.hours > 0) {
                    window.hours--;
                    window.minutes = 59;
                    window.seconds = 59;
                    updateValues('hours');
                } else {
                    // Hours is zero
                    window.days--;
                    window.hours = 23;
                    window.minutes = 59;
                    window.seconds = 59;
                    updateValues('days');
                }
                // $('#js-countdown').addClass('remove');
                // $('#js-next-container').addClass('bigger');
            }
        }
    }, 1000);
}


function updateValues(context) {
    if (context === 'days') {
        displayValue('#js-days', window.days);
        displayValue('#js-hours', window.hours);
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    } else if (context === 'hours') {
        displayValue('#js-hours', window.hours);
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    } else if (context === 'minutes') {
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    }
}

function displayValue(target, value) {
    var newDigit = $('<span></span>');
    $(newDigit).text(pad(value))
        .addClass('new');
    $(target).prepend(newDigit);
    $(target).find('.current').addClass('old').removeClass('current');
    setTimeout(function () {
        $(target).find('.old').remove();
        $(target).find('.new').addClass('current').removeClass('new');
    }, 900);
}

function pad(number) {
    return ("0" + number).slice(-2);
}