var today = moment().format();
$("#currentDay").text(today);
$(".saveBtn").on("click", function () {
  var time = $(this).attr("id").split("-")[1];
  var userData = $("#e-" + time).val();
  console.log(time, userData);
  localStorage.setItem(time, userData);
});
var currentTime = moment().hours();
for (let i = 9; i <= 17; i++) {
  $("#e-" + i).val(localStorage.getItem(i));
  if (i < currentTime) {
    $("#e-" + i).addClass("past");
  } else if (i == currentTime) {
    $("#e-" + i).addClass("present");
  } else {
    $("#e-" + i).addClass("future");
  }
}
