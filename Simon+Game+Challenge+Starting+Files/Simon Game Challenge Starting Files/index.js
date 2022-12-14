var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() { }
var randomNumber = Math.floor(Math.random() * 4) + 1;

var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#randomChosenColor").fadeOut(100).fadeIn(100);