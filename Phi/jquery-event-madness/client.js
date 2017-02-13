$(document).ready(function(){

//  creating event listener     something to check if clickMe has had anything happen to it. "click activates event aka function"
$('#clickMe').on("click", function(){
  var firstName = $('#firstName').val();  // gets value from dom input
  var lastName = $('#lastName').val();
    var middleName = $('#middleName').val();
    var fullName= firstName+ ' ' +middleName+ ' ' +lastName;
  // console.log("Full Name:",fullName);
  // adds html to the bottom but still inside of # nameContainer
  // were using a class because there can be many lines created
  $('#nameContainer').append('<p>Full Name: '+fullName+"  "+  // returns info back to dom
  '<button class="deleteButton">Delete</button></p>');

  });
$('#nameContainer').append('<p>Full Name: '+fullName+"  "+
// we can only use #some class/id #.  () for things that exist on doc ready
//to select things dynamically we use event propagation

$('#nameContainer').on("click",'#employeeForm', function(){
  //this refers to the button that was just pressed not all in that class!!!
  $(this).parent().remove();


});










});
