var Game = (function() {
  'use strict';

  // Constructor
  function Game(args) {
    if (!(this instanceof Game)) {
      return new Game(args);
    }

    this.gameState = new State({
      x: 0
      y: 0
      width: 0
      height: 0
      context: null
      backgroundColor: '#333'
      staticList: []
      dynamicList: []
    });

    var startCondition = function() {
      return StateBuffer.gameState === 'idle';
    };

    var startReceiver = function() {
      StateBuffer.gameState = 'playing';
      this.gameState.x = canvas.x;
      this.gameState.y = canvas.y;
      this.gameState.width = canvas.width;
      this.gameState.height = canvas.height;
      this.gameState.context = canvas.context;
      this.gameState.dynamicList.push(player);
      this.gameState.dynamicList.push(ball);
      var i, j, id, blockWidth, blockHeight, rows, columns;
      rows = 10;
      columns = 5;
      blockWidth = (this.gameState.width / rows);
      blockHeight = 30;
      for (i = 0; i < columns; i++) { //filas
        for (j = 0; j < rows; j++) { //ladrillos por fila
          id = 'block'+j+i;
          block.create(id, j * blockWidth + 5, i * blockHeight + 5, blockWidth - 10, blockHeight - 10);
          this.gameState.dynamicList.push(block.list[id]);
        }
      }
      window.onkeydown = keyboard.press;
      window.onkeyup = keyboard.release;
      setInterval(game.predicates.updateGame, 1000/60);
    };

    var updateCondition = function() {
      return StateBuffer.gameState === 'playing';
    };

    var updateReceiver = function() {
      var i;
      this.gameState.context.fillStyle = this.gameState.backgroundColor;
      this.gameState.context.fillRect(0, 0, this.gameState.width, this.gameState.height);
      for (i = 0; i < this.gameState.staticList.length; i++) {
        this.gameState.staticList[i].render();
      }
      for (i = 0; i < this.gameState.dynamicList.length; i++) {
        this.gameState.dynamicList[i].update();
        this.gameState.dynamicList[i].render();
      }
      this.gameState.context.font = '20px Arial';
      this.gameState.context.fillStyle = '#FFF';
      this.gameState.context.fillText('Puntos: '+player.score, 10, 30);
      if(!Object.keys(block.list).length) {
        game.predicates.winGame();
      }
    };

    var pauseCondition = function() {
      return StateBuffer.gameState === 'playing';
    };

    var pauseReceiver = function() {
      StateBuffer.gameState = 'pause';
    };

    var resumeCondition = function() {
      return StateBuffer.gameState === 'pause';
    };

    var resumeReceiver = function() {
      StateBuffer.gameState = 'playing';
    };

    var winCondition = function() {
      return StateBuffer.gameState === 'playing' && StateBuffer.score > 9;
    };

    var winReceiver = function() {
      this.gameState.context.font = '30px Arial';
      this.gameState.context.textAlign = 'center';
      this.gameState.context.fillText('GANASTE!', this.gameState.width/2, this.gameState.height/2);
    };

    var endCondition = function() {
      return StateBuffer.gameState === 'playing' && StateBuffer.questions > 5 && StateBuffer.score < 3;
    };

    var endReceiver = function() {
      this.gameState.context.font = '30px Arial';
      this.gameState.context.textAlign = 'center';
      this.gameState.context.fillText('GAME OVER', this.width/2, this.height/2);
    };

    var gameStartPredicate = new Predicate('startGame', startReceiver, startCondition);
    var gameUpdatePredicate = new Predicate('updateGame', updateReceiver, updateCondition);
    var gamePausePredicate = new Predicate('pauseGame', pauseReceiver, pauseCondition);
    var gameResumePredicate = new Predicate('resumeGame', resumeReceiver, resumeCondition);
    var gameWinPredicate = new Predicate('winGame', winReceiver, winCondition);
    var gameEndPredicate = new Predicate('endGame', endReceiver, endCondition);
    var gameMachine = new Machine(gameState, {
      startGame: gameStartPredicate,
      updateGame: gameUpdatePredicate,
      pauseGame: gamePausePredicate,
      resumeGame: gameResumePredicate,
      winGame: gameWinPredicate,
      endGame: gameEndPredicate
    });

    this = _.extend(this, gameMachine);
  }

  return Game;
}());
