var closeTalk = function() {
  dialog.closeAll();
};

var checkCollision = function() {
  if(collision(player1, obstacle1)) {
    obstacle1.talk();
  } else if(collision(player1, obstacle2)) {
    obstacle2.talk();
  } else if(collision(player1, obstacle3)) {
    obstacle3.talk();
  } else {
    closeTalk();
  }
};

var move = function(evt) {
  var gameHeight = game.width - player1.width;
  switch(evt.which) {
    case 37: //left
      if(player1.x > 0) {
        player1.x -= 10;
        game.x += 10;
      }
      break;
    case 39: //right
      if(player1.x < gameHeight) {
        player1.x += 10;
        game.x -= 10;
      }
      break;
  }
  player1.element.style.left = player1.x+'px';
  game.element.style.left = game.x+'px';
  checkCollision();
};

var player1 = {
  element: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  control: move
};

var resetPlayerState = function() {
  playerState.movingRight = false;
  playerState.movingLeft = false;
  playerState.answeringQuestion = false;
  playerState.level = 0;
}

var playerState = {
  movingRight: false,
  movingLeft: false,
  answeringQuestion: false,
  level: 0,
  reset: resetPlayerState
};
