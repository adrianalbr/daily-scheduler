$(document).ready(function () {
  console.log("this works somehow");

  moment(Date);
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

  //DOM VARIABLES

  var currentTime = moment();
  currentTime = currentTime.hours();

  var timeOfday = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  timeOfday.forEach(function (time) {
    var newTime = [];
    newTime.push(moment().hour(time).minutes("00").format("hh:mm A"));

    // Adding elements
    var newDiv = $("<div>");
    newDiv.addClass("input-group input-group-lg pb-1");

    var addSpan = $("<span>");
    addSpan.addClass("input-group-text time-block block");

    var inputText = $("<input>").attr("type", "text");
    inputText.addClass(`form-control form ${time}`);
    inputText.data("hour");

    var inputSubmit = $("<input>").attr("type", "submit");
    inputSubmit.addClass("btn saveBtn");

    var icon = $("<i>");
    icon.addClass("far fa-save");

    // appending 
    $(".container").append(newDiv);
    newDiv.append(addSpan);
    newDiv.append(inputText);
    newDiv.append(inputSubmit);
    inputSubmit.append(icon);

    addSpan.text(newTime);

    // statement for past, present and future
    if (time < currentTime) {
      inputText.addClass("past");
    } else if (time === currentTime) {
      inputText.removeClass("past");
      inputText.addClass("present");
    } else {
      inputText.removeClass("past");
      inputText.removeClass("present");
      inputText.addClass("future");
    }

  });

//   Save button
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).siblings("input").attr("class").split(" ")[2];
    localStorage.setItem(listItem, formValue);
  });

  //Initial Functions

    // localStorage.getItem(listItem, formValue);
  $(".9").val(localStorage.getItem("9"));
  $(".10").val(localStorage.getItem("10"));
  $(".11").val(localStorage.getItem("11"));
  $(".12").val(localStorage.getItem("12"));
  $(".13").val(localStorage.getItem("13"));
  $(".14").val(localStorage.getItem("14"));
  $(".15").val(localStorage.getItem("15"));
  $(".16").val(localStorage.getItem("16"));
  $(".17").val(localStorage.getItem("17"));
});


