var Emitter = (function() {
  'use strict';

  function Emitter(evt) {
    if (!(this instanceof Emitter)) {
      return new Emitter(args);
    }
    document.dispatchEvent(evt);
  }

  return Emitter;
}());