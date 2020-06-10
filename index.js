$(document).ready(function() {

    var today = moment().format("dddd, MMMM Do YYYY");

    var now = moment().format("hh:mm a");

    console.log(now);

    $("#currentDay").text(today);
    $("#hour-01 div:first-child").append(moment({ hour: 1, minute: 00 }).format("hh:mm A"));
    $("#hour-02 div:first-child").append(moment({ hour: 2, minute: 00 }).format("hh:mm A"));
    $("#hour-03 div:first-child").append(moment({ hour: 3, minute: 00 }).format("hh:mm A"));
    $("#hour-04 div:first-child").append(moment({ hour: 4, minute: 00 }).format("hh:mm A"));
    $("#hour-05 div:first-child").append(moment({ hour: 5, minute: 00 }).format("hh:mm A"));
    $("#hour-06 div:first-child").append(moment({ hour: 6, minute: 00 }).format("hh:mm A"));
    $("#hour-07 div:first-child").append(moment({ hour: 7, minute: 00 }).format("hh:mm A"));
    $("#hour-08 div:first-child").append(moment({ hour: 8, minute: 00 }).format("hh:mm A"));
    $("#hour-09 div:first-child").append(moment({ hour: 9, minute: 00 }).format("hh:mm A"));
    $("#hour-10 div:first-child").append(moment({ hour: 10, minute: 00 }).format("hh:mm A"));
    $("#hour-11 div:first-child").append(moment({ hour: 11, minute: 00 }).format("hh:mm A"));
    $("#hour-12 div:first-child").append(moment({ hour: 12, minute: 00 }).format("hh:mm A"));
    $("#hour-13 div:first-child").append(moment({ hour: 13, minute: 00 }).format("hh:mm A"));
    $("#hour-14 div:first-child").append(moment({ hour: 14, minute: 00 }).format("hh:mm A"));
    $("#hour-15 div:first-child").append(moment({ hour: 15, minute: 00 }).format("hh:mm A"));
    $("#hour-16 div:first-child").append(moment({ hour: 16, minute: 00 }).format("hh:mm A"));
    $("#hour-17 div:first-child").append(moment({ hour: 17, minute: 00 }).format("hh:mm A"));
    $("#hour-18 div:first-child").append(moment({ hour: 18, minute: 00 }).format("hh:mm A"));
    $("#hour-19 div:first-child").append(moment({ hour: 19, minute: 00 }).format("hh:mm A"));
    $("#hour-20 div:first-child").append(moment({ hour: 20, minute: 00 }).format("hh:mm A"));
    $("#hour-21 div:first-child").append(moment({ hour: 21, minute: 00 }).format("hh:mm A"));
    $("#hour-22 div:first-child").append(moment({ hour: 22, minute: 00 }).format("hh:mm A"));
    $("#hour-23 div:first-child").append(moment({ hour: 23, minute: 00 }).format("hh:mm A"));
    $("#hour-24 div:first-child").append(moment({ hour: 24, minute: 00 }).format("hh:mm A"));







});