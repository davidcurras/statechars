var fillObjects = function (id, obj) {
  obj.element = document.getElementById(id);
  obj.width = parseInt(obj.element.clientWidth);
  obj.height = parseInt(obj.element.clientHeight);
  obj.x = parseInt(obj.element.offsetLeft);
  obj.y = parseInt(obj.element.offsetTop);
};

window.onload = function() {
  fillObjects('canvas', canvas);
  fillObjects('game', game);
  fillObjects('score', score);
  fillObjects('dialog', dialog);
  fillObjects('player', player);
  fillObjects('obstacle1', obstacle1);
  fillObjects('obstacle2', obstacle3);
  fillObjects('obstacle3', obstacle2);
  document.onkeydown = player.control;
  window.game = new Game();
};
