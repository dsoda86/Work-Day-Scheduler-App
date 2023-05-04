// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

   // Listens for click events on all elements with class ".saveBtn".
   // Selects the sibling element using 'this' with class "description" of the current element textarea. 
   // Gets the input value of that element and trims it, and stores it in a variable.
   // Selects parent element of current element that triggers the event. Gets the value of the "id" attribute 
   // of that parent element ("hour-x") and stores it in a variable.
   // Saves the "textArea" value to local storage with the timeSlot variable as the key.
   $(".saveBtn").on("click", function () {
   
     var textArea = $(this).siblings(".description").val().trim();
     var timeSlot = $(this).parent().attr("id");

     localStorage.setItem(timeSlot, textArea);
   });

   function hourTracker () {
      //Gets current hour in 24-hour time.
    var currentHour = dayjs().hour() 
    console.log(currentHour)
    $(".time-block").each(function() {
      // Uses parseInt and split on the block's id to get the number part of the string and store it in a variable.
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      // Compares blockTime of the schedule with the current hour and assigns the proper class of past, present, or future.
      if (blockTime < currentHour) {
         $(this).addClass("past");
      } else if (blockTime === currentHour) {
         $(this).removeClass("past");
         $(this).addClass("present");
      } else if (blockTime > currentHour) {
         $(this).removeClass("past");
         $(this).removeClass("present");
         $(this).addClass("future");
      } else {
         console.log("Something went wrong!");
      }
    });
   }
   // Runs hourTracker function comparing current time to the time block in the app.
   hourTracker();

   // Gets local storage items using the id of each block.
   $('#hour-09 .description').val(localStorage.getItem('hour-09'));
   $('#hour-10 .description').val(localStorage.getItem('hour-10'));
   $('#hour-11 .description').val(localStorage.getItem('hour-11'));
   $('#hour-12 .description').val(localStorage.getItem('hour-12'));
   $('#hour-13 .description').val(localStorage.getItem('hour-13'));
   $('#hour-14 .description').val(localStorage.getItem('hour-14'));
   $('#hour-15 .description').val(localStorage.getItem('hour-15'));
   $('#hour-16 .description').val(localStorage.getItem('hour-16'));
   $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Dispalys current date and time, updating every second.
  function displayTime() {
  var currentTime = dayjs().format("dddd - MM-DD-YY - hh:mm:ss a");
  $("#currentDay").text(currentTime)
  }
  displayTime()
  setInterval(displayTime, 1000)
})
