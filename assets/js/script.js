// shows day in header
var today = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(today);

$(function() {
  // save btn event listener
  $('.saveBtn').on('click', function () {
    var time = $(this).parent().attr('id');
    var notes = $(this).siblings('.description').val();

    // save to local storage
    localStorage.setItem(time, notes);
    // console.log(localStorage); 
  })

  // get input saved in local storage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // color-code blocks past, present, future
  function colorCodeBlocks() {
    var currentTime = dayjs().hour();

    // get hour (integer) from string
    $(".time-block").each(function () {
      var plannerTime = parseInt($(this).attr("id").split("hour")[1]);

      // set past, present, future colors
      if (plannerTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (plannerTime === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    })
  }

  colorCodeBlocks();
});
