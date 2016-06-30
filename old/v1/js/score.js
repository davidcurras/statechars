var close = function() {
  score.element.style.display = 'none';
};

var show = function() {
  score.element.style.display = 'block';  
  var html = [
    '<pre>',
    '\n preguntas: '+questions.total,
    ' \n correctas: '+questions.correct,
    ' \n nivel: '+questions.level,
    ' \n experiencia: '+questions.expertise,
    ' </pre>',
  ].join('');
  score.element.innerHTML = html;
};

var score = {
  element: null,
  close: close,
  show: show
};
