var game = {
  element: null,
  width: 0,
  height: 0,
  x: 0,
  y: 0
};

var resetGameState = function() {
  gameState.menu = false;
  gameState.playing = false;
  gameState.paused = false;
  gameState.win = false;
}

var gameState = {
  menu: false,
  playing: false,
  paused: false,
  win: false,
  reset: resetGameState
};