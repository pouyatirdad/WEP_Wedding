//a simple persian datepicker by Hadi Aghandeh 
// versian 1.0
$(function () {
    $(".ReserveDatePickerItemsLeft").datepickerFa();
});

//defining global variables
var today;
var year;
var month;
var day;

$.fn.datepickerFa = function (y = 0, m = 0) {
    today = new moment(); // tarikh miladi
    year = today.jYear(); //13xx 14xx
    month = today.jMonth(); //0-11
    day = today.jDate(); //1-31 

    if (y !== 0) {
        year = y;
    }

    if (m !== 0) {
        month = m; //0-11
    }

    var tempMonth = month + 1; //1-12
    var firstDay = moment("" + year + "/" + tempMonth + "/1", "jYYYY/jM/jD");
    firstDay = firstDay.day(); // 0-6
    var jFirstDay = jalali_day_number(firstDay);
    var daysInMonth = moment.jDaysInMonth(year, month);


    var mos = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند"
    ];
    var days = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];





    this.each(function () {
        var randnum = Math.floor((Math.random() * 999999) + 1);
        // var table = '<div class="row d-flex justify-content-between" id="datepicker" style="display:block">' +
        //     '<input class="btn btn-outline-secondary mx-3" type="button" name="prev-y" value="ماه بعد" id="prev-y' + randnum + '" onclick="nextMonth(this)">' +
        //     '<div class="d-flex flex-column">' +
        //     '<h4 id="month-title' + randnum + '">مهر</h4>' +
        //     '<span id="year-title' + randnum + '">۱۳۹۷</span>' +
        //     '</div>' +
        //     '<input class="btn btn-outline-secondary mx-3" type="button" name="next-y' + randnum + '" value="ماه قبل" id="next-y" onclick="preMonth(this)"></div>' +
        //     '<div class="row">' +
        //     '<div class="col-md-12">' +
        //     '<table class="table table-sm table-borderless table-light" id="dt-table' + randnum + '" style="direction: rtl;">' +
        //     '<td class="day_val"> </td>' +
        //     '</table>' +
        //     '</div>';

        var table = '<div class="ReserveDatePickerItemsLeftUpper">'
            +
            '<span class="fas fa-angle-left" id="prev-y' + randnum + '" onclick="nextMonth(this)"> </span>'
            +
            '<h6 id="month-title' + randnum + '"> مهر </h6>'
            +
            '<span class="fas fa-angle-right" id="next-y' + randnum + '" onclick="preMonth(this)"> </span>'
            +
            '</div>'
            +
            '<div class="ReserveDatePickerItemsLeftDatas" id="dt-table' + randnum + '">'
            +
            '</div>'
        // '<table class="table table-sm table-borderless table-light" id="dt-table' + randnum + '" style="direction: rtl;">' +
        //     '<td class="day_val"> </td>' +;



        $(this).empty();
        $(this).append(table);
        $("#month-title" + randnum).html(mos[month]);
        $("#year-title" + randnum).html(ep(year));
        $("#dt-table" + randnum).empty();
        // $("#dt-table" + randnum).append("<thead><tr>");
        // for (let i = 0; i < 7; i++) {
        //     $("#dt-table" + randnum).append('<div class="ReserveDatePickerItemsLeftData OpenDay">'
        //         +
        //         '<div class="DPILDNum">'
        //         +
        //         '<h6>' + days[i] + '</h6>'
        //         +
        //         '</div>'
        //         +
        //         '<div class="DPILText">'
        //         +
        //         '<h6>' + mos[i] + '</h6>'
        //         +
        //         '</div>'
        //         +
        //         '</div>');
        // }
        // $("#dt-table" + randnum).append("</tr></thead><tbody>");
        var dayCount = 0;
        for (let j = 0; j < 6; j++) {
            // $("#dt-table" + randnum).append("<tr id='dt-days-row-" + j + randnum + "'>");
            for (let wd = 0; wd < 7; wd++) {
                if ((jFirstDay <= wd || dayCount >= 1) && dayCount < daysInMonth) {
                    dayCount++;
                    $("#dt-table" + randnum).append(
                        // "<td><input class='btn btn-sm' type='button' value='" +
                        // ep(dayCount) +
                        // "' onclick='getVal(this)' id='dt-days-num-" +
                        // dayCount +
                        // "-wd-" +
                        // wd +
                        // "'></td>"
                        // + 
                        '<div class="ReserveDatePickerItemsLeftData OpenDay" onclick="getVal(this)" id="dt-days-num-'
                        +
                        dayCount
                        +
                        "-wd-"
                        +
                        wd
                        +
                        '">'
                        +
                        '<div class="DPILDNum">'
                        +
                        '<h6>' + ep(dayCount) + '</h6>'
                        +
                        '</div>'
                        +
                        '<div class="DPILText">'
                        +
                        '<h6>' + days[wd] + '</h6>'
                        +
                        '</div>'
                        +
                        '</div>'
                    );
                } else {
                    // $("#dt-days-row-" + j + randnum).append("<td></td>");
                }
            }
            // $("#dt-days-row-" + j).append("</tr>");
        }

        //Rang kardane rozha
        $("input[id$='wd-6']").addClass("btn-warning");

        if (month == today.jMonth() && year == today.jYear())
            $(".ReserveDatePickerItemsLeftData[id^='dt-days-num-" + day + "']").addClass("Today");
    });
};


function jalali_day_number(input) {
    switch (input) {
        case 0:
            return 1;
            break;
        case 1:
            return 2;
            break;
        case 2:
            return 3;
            break;
        case 3:
            return 5;
            break;
        case 4:
            return 5;
            break;
        case 5:
            return 6;
            break;
        case 6:
            return 0;
            break;
    }
}

function persianToEnglish(value) {
    var newValue = "";
    for (var i = 0; i < value.length; i++) {
        var ch = value.charCodeAt(i);
        if (ch >= 1776 && ch <= 1785) {
            // For Persian digits.
            var newChar = ch - 1728;
            newValue = newValue + String.fromCharCode(newChar);
        } else if (ch >= 1632 && ch <= 1641) {
            // For Arabic & Unix digits.
            var newChar = ch - 1584;
            newValue = newValue + String.fromCharCode(newChar);
        } else newValue = newValue + String.fromCharCode(ch);
    }
    return newValue;
}

function ep(en) {
    var pn = "";
    en = en.toString();
    for (var i = 0; i < en.length; i++) {
        switch (en.charAt(i)) {
            case "0":
                pn = pn + "۰";
                break;
            case "1":
                pn = pn + "۱";
                break;
            case "2":
                pn = pn + "۲";
                break;
            case "3":
                pn = pn + "۳";
                break;
            case "4":
                pn = pn + "۴";
                break;
            case "5":
                pn = pn + "۵";
                break;
            case "6":
                pn = pn + "۶";
                break;
            case "7":
                pn = pn + "۷";
                break;
            case "8":
                pn = pn + "۸";
                break;
            case "9":
                pn = pn + "۹";
                break;
            case ",":
                pn = pn + "٫";
                break;
            case ".":
                pn = pn + "/";
                break;
            default:
                pn = pn + en.charAt(i);
                break;
        }
    }
    return pn;
}

function getVal(e) {
    alert(year + "/" + (month + 1) + "/" + $(e).find('.DPILDNum h6').text());
    // console.log($(e).find('.DPILDNum h6').text());
}

function nextMonth(e) {
    if (month == 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    $(e).parent().parent().datepickerFa(year, month);
}

function preMonth(e) {
    if (month == 0) {
        month = 11;
        year--;
    } else {
        month--;
    }
    $(e).parent().parent().datepickerFa(year, month);
}