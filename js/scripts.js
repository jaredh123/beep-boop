//  Responses:
//  "I'm sorry, Dave. I'm afraid I can't do that."
//  "Boop!"
//  "Beep!"


$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("#input").val());



// Creates array of numbers from 0 through input
    var numList = [];
    for (var i = 0; i <= inputNum; i++) {

      if (i % 3 === 0 && i !== 0) {
        numList.push("HAL");
      }
//--------------------------------------------------------------
      else if ((i.toString().includes("1"))) {
        numList.push("1");
      }
      else if ((i.toString().includes("0"))) {
        numList.push("0");
      }
      else {
        numList.push(i);
      }
//--------------------------------------------------------------
    }
//--------------------------------------------------------------










    alert(numList.length);
  //  alert(searcher.length);
    $("#result").show().text(numList);
  });

  $("#clear").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
  });
});
