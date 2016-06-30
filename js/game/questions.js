var Question = (function() {
  'use strict';

  function Question() {
    if (!(this instanceof Question)) {
      return new Question();
    }

    this.questionState = new State({
      total: 0,
      correct: 0,
      last: 0,
      valid: false
    });

    var checkValidCondition = function() {
      return player.action === 'answer' && this.questionState.collide && StateBuffer.gameState === 'playing';
    };

    var checkValidReceiver = function() {
      this.questionState.valid === true;
      var q = _.find(data, { 'id': id });
      this.questionState.total += 1;
      this.questionState.correct += q.answer === value ? 1 : 0;
      this.questionState.level += q.answer === value ? 1 : -1;
      if(StateBuffer.level < 0) StateBuffer.level = 0;
      StateBuffer.expertise = this.questionState.total ? parseInt(this.questionState.correct*4 / this.questionState.total) : 0;
      if(this.questionState.total > 10 || this.questionState.level > 6) {
        return dialog.closeAll();
      }
      if(this.questionState.total > 0) {
        score.show();
      } else {
        score.close();
      }
    };

    var pickOneCondition = function() {
      return this.questionState.valid === true && StateBuffer.gameState === 'playing' && StateBuffer.level < 6;
    };

    var pickOneReceiver = function() {
      var levelQ = _.filter(data, function(o) { 
        return  o.level === StateBuffer.level && 
          o.difficulty <= StateBuffer.expertise && 
          !o.picked;
      });
      var q = _.shuffle(levelQ)[0];
      _.find(data, { 'id': q.id }).picked = true;
      return q;
    };

    var checkValidPredicate = new Predicate('checkValid', checkValidReceiver, checkValidCondition);
    var pickOnePredicate = new Predicate('pickOne', pickOneReceiver, pickOneCondition);
    var questionMachine = new Machine(questionState, {
      checkValid: checkValidPredicate,
      pickOne: pickOnePredicate
    });

    this = _.extend(this, questionMachine);

  return Question;
}());
