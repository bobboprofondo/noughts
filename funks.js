var clear = require("cli-clear");

module.exports = {
  displayState: function (state) {
    //Iteratively outputs current game state to console
    var str = "|";
    //Clear down CLI to start from fresh
    clear();

    //Output top row
    console.log("");
    console.log("|---+---+---|");
    console.log("|   |   |   |");
    for (i = 6; i < 9; i++) {
      str += cellDecode(state[i], i) + "|";
    };
    console.log(str);
    console.log("|   |   |   |");

    console.log("|---+---+---|");
    str = "|";

    //Output middle row
    console.log("|   |   |   |");
    for (i = 3; i < 6; i++) {
      str += cellDecode(state[i], i) + "|";
    };
    console.log(str);
    console.log("|   |   |   |");

    console.log("|---+---+---|");
    str = "|";

    //Output bottom row
    console.log("|   |   |   |");
    for (i = 0; i < 3; i++) {
      str += cellDecode(state[i], i) + "|";
    };
    console.log(str);
    console.log("|   |   |   |");
    console.log("|---+---+---|");
    console.log("");
  },

  createArray: function (length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
  }

};

function cellDecode(valueIn) {
  //Converts array of game state to output characters
  var ret = ""
  //console.log(valueIn);
  if (valueIn == 0) {ret = " " + (i + 1) + " "}
  else if (valueIn == 1) {ret = " O "}
  else if (valueIn == 2) {ret = " X "}
  return ret;
};
