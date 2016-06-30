var showEndDialog = function() {
  dialog.element.style.display = 'block';
  dialog.element.innerHTML = '<span>Ha respondido todas las preguntas. Puede cerrar el juego, o seguir jugando para modificarlas</span>';
};

var closeAll = function() {
  if(questions.total > 10 || questions.level > 6) {
    showEndDialog();
  } else {
    dialog.element.style.display = 'none';
  }
};

var show = function(text, optA, optB, optC, optD, id) {
  dialog.element.style.display = 'block';
  var html = [
    '<span>'+text+'</span>',
    '<div></div>',
    '<button onclick="questions.checkValid(\''+id+'\', \'A\')">'+optA+'</button>',
    '<button onclick="questions.checkValid(\''+id+'\', \'B\')">'+optB+'</button>',
    '<button onclick="questions.checkValid(\''+id+'\', \'C\')">'+optC+'</button>',
    '<button onclick="questions.checkValid(\''+id+'\', \'D\')">'+optD+'</button>'
  ].join('');
  dialog.element.innerHTML = html;
};

var dialog = {
  element: null,
  closeAll: closeAll,
  show: show
};
