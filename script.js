// Display current time
var today = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get values of the description
        var description = $(this).siblings(".description").val();
        var time = `${$(this).parent().attr("id")} h`;

        // Save description in local storage
        localStorage.setItem(time, description);
    })

    function timeTrack() {
        // Get current 
        var currHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            // To check the time and add the classes for background indicators
            if (blockTime < currHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });   
    }

    //load any saved data from LocalStorage 
    $("#9 .description").val(localStorage.getItem("9 h"));
    $("#10 .description").val(localStorage.getItem("10 h"));
    $("#11 .description").val(localStorage.getItem("11 h"));
    $("#12 .description").val(localStorage.getItem("12 h"));
    $("#13 .description").val(localStorage.getItem("13 h"));
    $("#14 .description").val(localStorage.getItem("14 h"));
    $("#15 .description").val(localStorage.getItem("15 h"));
    $("#16 .description").val(localStorage.getItem("16 h"));
    $("#17 .description").val(localStorage.getItem("17 h"));

    timeTrack();

})

    