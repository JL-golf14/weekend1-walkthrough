$(document).ready(function(){

$('#main-title').text('jquery is awesome!');

 $('h1').css('background-color','yellow');
 $('h1').css('color','blue');
 $('li').css('color','purple');
 $('.inner-list > li').css('color', 'green');
//$('.inner-list > li').first().css("color",'pink');
$('.inner-list > li:last').css('color', 'red');
$('#example > li').first().next().text('this is the second example');
//$('#example :nth-child(3)').text('this is the 3rd example');
// $('#example').children().first().next().children().fist().text('f2nnnnd Child');
$('#specialParagraph').parent().prev().prev().css('color', 'lime');






});
