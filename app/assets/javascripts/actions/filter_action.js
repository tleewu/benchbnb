FilterActions = {

  updateParams: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_UPDATE_PARAMS,
      params: params
    });
  }

};
