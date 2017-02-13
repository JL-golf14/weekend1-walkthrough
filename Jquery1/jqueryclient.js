$(document).ready(function(){
  console.log("Jquery was sourced correctly");



var taco ="tacos are the coolest";
$('h1').text(taco);
//putting something to the view "DOM"
  $('h1').text('jquery is cool');

$('h1').text(taco)

//getting a hold of something from the DOM / view to Javascript

var subHeadingText = $('h2').text();
console.log(subHeadingText);


$('#firstInput').val("starting text");  //   to the dom

var inputBoxValue = $('#firstInput').val();
console.log("firstInput:", firstInput);  // from the dom
// $('input').val().on("click").console.log(inputBoxValue);

var secondInputBoxValue = $('#secondInput').val();
console.log("secondInput:", secondInput);

});



console.log("this Works");
