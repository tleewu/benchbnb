(function(root) {
  'use strict';

  var _benches = [], CHANGE = "CHANGE";

  var resetBenches = function (benches) {
    _benches = benches;
    BenchStore.changed();
  };

  var BenchStore = root.BenchStore = $.extend ({}, EventEmitter.prototype, {

    all: function () {
      return _benches.slice(0);
    },

    addChangeHandler: function (handler) {
      BenchStore.on(CHANGE, handler);
    },

    removeChangeHandler: function (handler) {
      BenchStore.removeListener(CHANGE, handler);
    },

    changed: function () {
      BenchStore.emit(CHANGE);
    },

    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(action.benches);
          break;
      }
    })

  });
}(this));
