var checkValid = function(id, value) {
  var q = _.find(data, { 'id': id });
  questions.total += 1;
  questions.correct += q.answer === value ? 1 : 0;
  questions.level += q.answer === value ? 1 : -1;
  if(questions.level < 0) questions.level = 0;
  questions.expertise = questions.total ? parseInt(questions.correct*4 / questions.total) : 0;
  if(questions.total > 10 || questions.level > 6) {
    return dialog.closeAll();
  }
  if(questions.total > 0) {
    score.show();
  } else {
    score.close();
  }
};

var pickOne = function() {
  var levelQ = _.filter(data, function(o) { 
    return  o.level === questions.level && 
      o.difficulty <= questions.expertise && 
      !o.picked;
  });
  var q = _.shuffle(levelQ)[0];
  _.find(data, { 'id': q.id }).picked = true;
  return q;
};

var questions = {
  total: 0,
  correct: 0,
  last: 0,
  level: 0,
  expertise: 0,
  pickOne: pickOne,
  checkValid: checkValid
};

