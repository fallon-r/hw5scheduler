var today = moment().format("LL");
var now = moment().format("hh:mm a");


console.log(now)



// fills times in page
$("#currentDay").text(today);
$("#nineAm").append(moment({ hour: 9, minute: 00 }).format("hh:mm A"));
$("#tenAm").text(moment({ hour: 10, minute: 00 }).format("hh:mm A"))
$("#elevenAm").text(moment({ hour: 11, minute: 00 }).format("hh:mm A"))
$("#twelvePm").text(moment({ hour: 12, minute: 00 }).format("hh:mm A"))
$("#onePm").text(moment({ hour: 13, minute: 00 }).format("hh:mm A"))
$("#twoPm").text(moment({ hour: 14, minute: 00 }).format("hh:mm A"))
$("#threePm").text(moment({ hour: 15, minute: 00 }).format("hh:mm A"))
$("#fourPm").text(moment({ hour: 16, minute: 00 }).format("hh:mm A"))
$("#fivePm").text(moment({ hour: 17, minute: 00 }).format("hh:mm A"))


// Time block reactor