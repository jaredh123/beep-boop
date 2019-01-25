//  Responses:
//  "I'm sorry, Dave. I'm afraid I can't do that."
//  "Boop!"
//  "Beep!"


$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("#input").val());
    var a = [];
    // var b = [];
    // var c = [];


// Creates array of numbers from 0 through input
    var numList = [];
    for (var i = 0; i <= inputNum; i++) {
      numList.push(i);
      if (numList[i] % 3 === 0 && numList[i] !== 0) {
        numList.splice(i, 1, "HAL");
      }
    }



      //   else if (numList[j] % 3 !== 0) {
      //     a.push(j);
      //     a.toString();
      //     alert(scream);
      //     if (a.includes("0")) {
      //       numList.splice(j, 1, "Beep!");
      //       a.split(" ");
      //       a.shift();
      //       alert(scream);
      //     }
      //     else {
      //       alert(scream);
      //       a.split(" ");
      //       a.shift();
      //     }
      //   }
      // }














    alert(numList.length);
    $("#result").show().text(numList);
  });
  $("#clear").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
  });
});




// for (var j = 0; j <= inputNum; j++) {
//   for (var k = 0; k <= numList.length; k++) {
//     if (numList[k] % j === 0 && numList[k] !== j) {
//       numlist.splice(k, 1, "text");
//       k--;
//     }
//   }
// }
