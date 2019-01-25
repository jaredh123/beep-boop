$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#input").val());
    var b = [];
    var c = [];



//  "Beep!"
//  "Boop!"
//  "I'm sorry, Dave. I'm afraid I can't do that."


    alert("submit");



  
    $("#result").show().text(number);
  });






  $("#clear").submit(function(event) {
    event.preventDefault();

    alert("clear");
    $("#result").hide();
  });
});
