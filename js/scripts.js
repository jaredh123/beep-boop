$(document).ready(function() {
//To display correct order list-------------------
  $("#run").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("#input").val());
//-----User logic above--Business logic below-----
    var numList = [];

    for (var i = 0; i <= inputNum; i++) {
      if (i % 3 === 0 && i !== 0) {
        numList.push(" I'm sorry, Dave. I'm afraid I can't do that.");
      }
      else if (i.toString().includes("1")) {
        numList.push(" Boop!");
      }
      else if (i.toString().includes("0")) {
        numList.push(" Beep!");
      }
      else {
        numList.push(" " + i);
      }
    }

    $("#result").show().text(numList);
  });


// To display reversed order list-----------------
  $("#reverse").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("#input").val());
//-----User logic above--Business logic below-----
    var reverseList = [];

    for (var i = inputNum; i >= 0; i--) {
      if (i % 3 === 0 && i !== 0) {
        reverseList.push(" I'm sorry, Dave. I'm afraid I can't do that.");
      }
      else if (i.toString().includes("1")) {
        reverseList.push(" Boop!");
      }
      else if (i.toString().includes("0")) {
        reverseList.push(" Beep!");
      }
      else {
        reverseList.push(" " + i);
      }
    }

    $("#result").show().text(reverseList);
  });


// To clear results-------------------------------
  $("#clear").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
  });
});
