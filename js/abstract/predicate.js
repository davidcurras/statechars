var Predicate = (function() {
  'use strict';

  function Predicate(evtName, evtHandler, conditionHandler) {
    if (!(this instanceof Predicate)) {
      return new Predicate(evtName, evtHandler);
    }
    this.receiver = new Receiver(evtName, evtHandler, conditionHandler);
    this.emitter = new Emitter(new Event(evtName));
  }

  return Predicate;
}());