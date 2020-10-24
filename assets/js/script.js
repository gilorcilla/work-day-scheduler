var today = moment().format("LL");
// Display current date onto scheduler

$("#currentDay").text(today);

// Buttons will save user inputs to local store.  Additionally if there is saved inputs, they will display in the text area.
$(".b9").on("click", function () {
  var inputText = $(".e9").val();
  localStorage.setItem("9:00", inputText);
});
