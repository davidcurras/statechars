var SuperMachine = (function() {
  'use strict';

  function SuperMachine(machines) {
    if (!(this instanceof SuperMachine)) {
      return new SuperMachine(machines);
    }
    this.machines = machines;
  }

  return SuperMachine;
}());