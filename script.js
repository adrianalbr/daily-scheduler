$(document).ready(function(){
    console.log("this works somehow");

    moment(Date);
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

//DOM VARIABLES

var currentTime = moment();
currentTime = currentTime.startOf("hour");

var x2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];

x2.forEach(function (time) {

    var newTime = [];
    newTime.push(moment().hour(time).minutes("00").format('hh:mm A'));

    // AddING Elements
    var newDiv = $("<div>");
    newDiv.addClass("input-group input-group-lg pb-1");

    var addSpan = $("<span>");
    addSpan.addClass("input-group-text time-block block");

    var inputText = $('<input>').attr('type', 'text');
    inputText.addClass("form-control form");
    inputText.data("Hour");

    var inputSubmit = $('<input>').attr('type', 'submit');
    inputSubmit.addClass("btn saveBtn");

    var icon = $("<i>");
    icon.addClass("far fa-save");

    // appends here: 
    $(".container").append(newDiv);
    newDiv.append(addSpan);
    newDiv.append(inputText);
    newDiv.append(inputSubmit);
    inputSubmit.append(icon);

    addSpan.text(newTime);
    // If/Else Statement
    if (currentTime.isAfter(newTime)) {
        $(".form").addClass("past");
    }
    else if (currentTime.isBefore(newTime)) {
        $(".form").addClass("future");
    }
    else if (currentTime.isSame(newTime)) {
        $(".form").addClass("present");
    };

});

// Start local
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}

// EVENT LISTENERS

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});


});