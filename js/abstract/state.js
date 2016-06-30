var State = (function() {
  'use strict';

  function State(props) {
    if (!(this instanceof State)) {
      return new State(props);
    }
    for (var key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

  return State;
}());