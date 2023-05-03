// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Listens for click events on all elements with class ".saveBtn".
   $(".saveBtn").on("click", function () {

  // Selects the sibling element using 'this' with class "description" of the current element textarea. 
  // Gets the input value of that element and trims it, and stores it in a variable.
     var textArea = $(this).siblings(".description").val().trim();

  // Selects parent element of current element that triggers the event. Gets the value of the "id" attribute 
  // of that parent element ("hour-x") and stores it in a variable.
     var timeSlot = $(this).parent().attr("id");

  // Saves the "textArea" value to local storage with the timeSlot variable as the key.
     localStorage.setItem(timeSlot, textArea);
   });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // need a function to track hours using dayjs so the app knows what time-block is current, past, and future.
  // need to loop over each time-block comparing the current hour to that slots hour.
  // gets current hour. Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
   function hourTracker () {
    var currentHour = dayjs().hour() 

   }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // need 

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
  var currentTime = dayjs().format("dddd, MM-DD-YY hh:mm:ss a");
  $("#currentDay").text(currentTime)
  }
  displayTime()
  setInterval(displayTime, 1000)
})
