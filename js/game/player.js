var Player = (function() {
  'use strict';

  function Player() {
    if (!(this instanceof Player)) {
      return new Player();
    }

    this.playerState = new State({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      action: 'idle',
      collide: false
    });

    var moveCondition = function() {
      return this.playerState.action === 'idle' && !this.playerState.collide && StateBuffer.gameState === 'playing';
    };

    var moveReceiver = function() {
      this.playerState.action === 'move';
      var gameHeight = game.width - player.width;
      switch(evt.which) {
        case 37: //left
          if(player.x > 0) {
            player.x -= 10;
            game.x += 10;
          }
          break;
        case 39: //right
          if(player.x < gameHeight) {
            player.x += 10;
            game.x -= 10;
          }
          break;
      }
      player.element.style.left = player.x+'px';
      game.element.style.left = game.x+'px';
    };

    var checkCollitionCondition = function() {
      return this.playerState.action === 'move';
    };

    var checkCollitionReceiver = function() {
      if(collision(player, obstacle1) || collision(player, obstacle2) || collision(player, obstacle3)) {
        this.playerState.collide = true;
      } else {
        this.playerState.collide = false;
      }
    };

    var talkCondition = function() {
      return this.playerState.action === 'move' && this.playerState.collide;
    };

    var talkReceiver = function() {
      this.playerState.obstacle.talk();
    };

    var movePlayerPredicate = new Predicate('movePlayer', moveReceiver, moveCondition);
    var checkCollisionPredicate = new Predicate('checkCollision', checkCollisionReceiver, checkCollisionCondition);
    var talkPredicate = new Predicate('talk', talkReceiver, talkCondition);
    var playerMachine = new Machine(playerState, {
      movePlayer: movePlayerPredicate,
      checkCollision: checkCollisionPredicate,
      talk: talkPredicate
    });

    this = _.extend(this, playerMachine);
  }

  return Player;
}());
