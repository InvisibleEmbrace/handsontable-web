//获取当前时间，格式YYYY-MM-DD
function getDateFormat(date) {
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

//获取当前月份，格式YYYY-MM
function getDateFormatMonth(date) {
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = year + seperator1 + month;
    return currentdate;
}

// 获取星期几
function getWeek(dateString) {
    var date = convertDateFromString(dateString);
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var week = date.getDay();
    return a[week];
}

// 字符串转时间
function convertDateFromString(dateString) {
    if (dateString) {
        var date = new Date(dateString.replace(/-/, "/"))
        return date;
    }
}

function getMonthDays(temp) {
    var date = convertDateFromString(temp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var monthStartDate = new Date(year, month, 1);
    var monthEndDate = new Date(year, month + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

function getEveryDay(temp) {
    var date = convertDateFromString(temp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var days = getMonthDays(temp);
    var dateArr = [];
    for (var i = 1; i <= days; i++) {
        dateArr.push(year + "-" + month + "-" + i);
    }
    return dateArr;
}