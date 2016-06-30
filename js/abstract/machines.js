var Machine = (function() {
  'use strict';

  function Machine(state, predicates) {
    if (!(this instanceof Machine)) {
      return new Machine(state);
    }
    this.state = state;
    this.predicates = predicates;
  }

  return Machine;
}());