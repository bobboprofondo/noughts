//Test JS working out of noughts and crosses ML algorithm
var funks = require('./funks');
var prompt = require('prompt');

var state = funks.createArray(9);

prompt.start();

prompt.get(['nextMove'], function(err, result) {
  if (err) {return onErr(err); }
  console.log('nextMove is ' + result.nextMove);
});


//Initialise game state
for (i = 0; i < 9; i++) {
  state[i] = 0;
};

//displayState(state);
//state[0] = 1;
//state[1] = 1;
//state[2] = 1;
//state[4] = 1;

funks.displayState(state);
//nextMove = funks.getUserInput();
