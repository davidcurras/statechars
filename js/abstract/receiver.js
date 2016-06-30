var Receiver = (function() {
  'use strict';

  function Receiver(evtName, evtHandler, conditionHandler) {
    if (!(this instanceof Receiver)) {
      return new Receiver(evtName, evtHandler, conditionHandler);
    }
    this.condition = new Condition(conditionHandler);

    var evtHandlerWrapped = function() {
      if(this.condition.evaluate()) {
        evtHandler();
      }
    }

    document.addEventListener(evtName, evtHandlerWrapped, false);
  }

  return Receiver;
}());