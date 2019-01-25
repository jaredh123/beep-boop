//  Responses:
//  "Beep!"
//  "Boop!"
//  "I'm sorry, Dave. I'm afraid I can't do that."



$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($("#input").val());
    // var a = [];
    // var b = [];
    // var c = [];


// Creates array of numbers from 0 through input
    var numList = [];
    for (var i = 0; i <= inputNum; i++) {
      numList.push(i);
      for (var j = 0; j <= inputNum; j++) {
        // if (numList[j] % 3 === 0 && numList[j] !== 0) {
        //   numList.splice(j, 1, "HAL");
        // }
        if (numList.includes(0)) {
          numList.splice(j, 1, "j");
        }
      }
    }



    // for (var j = 0; j < inputNum; j++) {
    //   if (numList[j] % 3 === 0) {
    //     list.splice(j, 1, "HAL");
    //   }
      // else if (numList[j].includes(1)) {
      //   numList.splice(j, 1, "Boop!");
      // }
      // else if (numList[j].includes(0)) {
      //   numList.splice(j, 1, "Beep!");
      // }
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
