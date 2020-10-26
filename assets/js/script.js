// 
var today = moment().format("LL");
// Display current date onto scheduler
$("#currentDay").text(today);
​
// Buttons will save user inputs to local store.  Additionally if there is saved inputs, they will display in the text area.
$(".b9").on("click", function () {
  var inputText = $(".e9").val();
  localStorage.setItem("9:00", inputText);
});
​
$(".e9").val(localStorage.getItem("9:00"));
​
$(".b10").on("click", function () {
  var inputText = $(".e10").val();
  localStorage.setItem("10:00", inputText);
});
​
$(".e10").val(localStorage.getItem("10:00"));
​
$(".b11").on("click", function () {
  var inputText = $(".e11").val();
  localStorage.setItem("11:00", inputText);
});
​
$(".e11").val(localStorage.getItem("11:00"));
​
$(".b12").on("click", function () {
  var inputText = $(".e12").val();
  localStorage.setItem("12:00", inputText);
});
​
$(".e12").val(localStorage.getItem("12:00"));
​
$(".b1").on("click", function () {
  var inputText = $(".e1").val();
  localStorage.setItem("1:00", inputText);
});
​
$(".e1").val(localStorage.getItem("1:00"));
​
$(".b2").on("click", function () {
  var inputText = $(".e2").val();
  localStorage.setItem("2:00", inputText);
});
​
$(".e2").val(localStorage.getItem("2:00"));
​
$(".b3").on("click", function () {
  var inputText = $(".e3").val();
  localStorage.setItem("3:00", inputText);
});
​
$(".e3").val(localStorage.getItem("3:00"));
​
$(".b4").on("click", function () {
  var inputText = $(".e4").val();
  localStorage.setItem("4:00", inputText);
});
​
$(".e4").val(localStorage.getItem("4:00"));
​
$(".b5").on("click", function () {
  var inputText = $(".e5").val();
  localStorage.setItem("5:00", inputText);
});
​
// $("e.5").val(localStorage.getItem("5:00"));
// ​
// $(".row").each(function(){
//   // we are taking each rows 1st container text content and saving it to a variable 
//   var rowTimeValue = $(this).children()[0].textContent
//   // we are taking the same format from the Moment librabry and saving it to a variable
//   var momentTimeFormatted = moment().format("h:mm A")
//   console.log("This is coming off the row " + rowTimeValue)
//   console.log("This is coming out of the moment library " + momentTimeFormatted)
//   //compare the values and apply the classes (if/else if/else)
// });