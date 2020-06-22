$(document).ready(function() {
    // global variables, will need first
    var today = moment().format("dddd, MMMM Do YYYY");

    var now = moment().format("hh:mm:ss a");
    var currentHour = moment().hour();

    console.log(now);

    // Renders times in hour blocks
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

    $(".saveBtn").on("click", function() {
        // These variables are declared using sibling/parent to cut down on code; otherwise a line for each hour block would be required 
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in localStorage
        localStorage.setItem(time, value);
    });


    // Retrieve Stored local storage if it exists
    $("#hour-01 .description").val(localStorage.getItem("hour-01"));
    $("#hour-02 .description").val(localStorage.getItem("hour-02"));
    $("#hour-03 .description").val(localStorage.getItem("hour-03"));
    $("#hour-04 .description").val(localStorage.getItem("hour-04"));
    $("#hour-05 .description").val(localStorage.getItem("hour-05"));
    $("#hour-06 .description").val(localStorage.getItem("hour-06"));
    $("#hour-07 .description").val(localStorage.getItem("hour-07"));
    $("#hour-08 .description").val(localStorage.getItem("hour-08"));
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
    $("#hour-21 .description").val(localStorage.getItem("hour-21"));
    $("#hour-22 .description").val(localStorage.getItem("hour-22"));
    $("#hour-23 .description").val(localStorage.getItem("hour-23"));
    $("#hour-24 .description").val(localStorage.getItem("hour-24"));

    // Timeliness function: the logic of the app
    function hourLogic() {
        //Goes over each element with the timeblock class. It then parses the id to get the hour from the ID rather than looking at the content/moments therein
        $(".time-block").each(function (){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour);
            if(blockHour < currentHour){
                $(this).addClass("past");
            } else if (blockHour === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present")

            }
            
        })
    }

    hourLogic();

// Makes sure the hour logic is current; checks every 60 seconds

var interval = setInterval(hourLogic, 60000);


});