var dates = document.querySelectorAll("section time.hidden");
var i = 1;
Array.prototype.forEach.call(dates, function (caldate) {
    setTimeout(function () { caldate.classList.remove("hidden") }, 250 * i)
    i++;
})