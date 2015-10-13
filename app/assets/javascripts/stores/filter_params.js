(function(root) {
  'use strict';
  var _filter = {bounds: null, min: null, max: null}, CHANGE = "CHANGE";
  var FilterParamsStore = root.FilterParamsStore = $.extend ({}, EventEmitter.prototype, {

    get: function () {
      return new Object (_filter);
    },

    addChangeHandler: function (handler) {
      FilterParamsStore.on(CHANGE, handler);
    },

    removeChangeHandler: function (handler) {
      FilterParamsStore.removeListener(CHANGE, handler);
    },

    changed: function () {
      FilterParamsStore.emit(CHANGE);
    },

    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case FilterConstants.FILTER_UPDATE_BOUNDS:
          _filter.bounds = action.bounds;
          FilterParamsStore.changed();
          break;
        case FilterConstants.FILTER_UPDATE_MIN:
          _filter.min = action.min;
          FilterParamsStore.changed();
          break;
        case FilterConstants.FILTER_UPDATE_MAX:
          _filter.max = action.max;
          FilterParamsStore.changed();
          break;
      }
    })

  });
}(this));
