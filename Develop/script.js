$(document).ready(function () 
{
  // listen save button
  $(".saveBtn").on("click", function () 
  {
    // Get nearby (sibiling) values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // localStorage
    localStorage.setItem(time, value);

    // Remove 'show' class after 5000 miliseconds
    setTimeout(function () 
    {
      $(".notification").removeClass("show");
    }, 5000);
  });

  function hourUpdater() 
  {
    // Get current # of hours
    var currentHour = moment().hours();

    // loop over time
    $(".time-block").each(function () 
    {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) 
      {
        $(this).addClass("past");
      } else if (blockHour === currentHour) 
      {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else 
      {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourUpdater();

  // Check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
