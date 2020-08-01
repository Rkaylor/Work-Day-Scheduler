$(document).ready(function(){


//Current Day Code

$("#date").text("Today is " + (moment().format('dddd, MMMM Do YYYY')));
$("#current-time").text((moment().format('h:mm:ss a')));
var update = setInterval( function(){
    date = moment(new Date());
    $("#current-time").text((moment().format('h:mm:ss a')));
}, 1000)
  setInterval(update, 1000);

//Today's Date:
  $("#currentDay").text(moment().format('MMMM Do YYYY'));
});

//Rows 
$(function () {
    $('#datetimepicker5').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ]
    });
});

//create a function to create the planner
 // set var for how many time blocks in the day
 var timeBlockCount = 9;
 //create a function to create the planner
 function createPlanner(){
     // var containing planner div location
     var plannerLocation = $(".planner-container");
     // create row for col's
     var plannerRow = $("<div class=row>");
     // dynamic time col
     var timeCol = $("<div class='col-sm-1 text-center' id=time>")
     // dyanmic content col
     var contentCol = $("<div class='col-sm-10 text-center' id=content>")
     // dynamic save col
     var saveCol = $("<div class='col-sm-1 text-center' id=save>")
     // put row div in the planner div
     $(plannerLocation).append(plannerRow);
     // append col's to row 
     $(plannerRow).append(timeCol, contentCol, saveCol);
     // place holders for col's
     $(timeCol).text("This is where TIME goes.");
     $(contentCol).text("This is where CONTENT goes.");
     $(saveCol).text("This is where SAVE goes.");
     console.log(timeCol)
 }
 for (var i=0; i < timeBlockCount; i++){
     createPlanner();
 }

 // Array for Times
