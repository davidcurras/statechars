var Condition = (function() {
  'use strict';

  function Condition(conditionHandler) {
    if (!(this instanceof Condition)) {
      return new Condition(conditionHandler);
    }
  }

  Condition.prototype.evaluate = conditionHandler;

  return Condition;
}());