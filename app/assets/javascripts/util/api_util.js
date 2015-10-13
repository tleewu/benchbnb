var ApiUtil = {
  fetchBenches: function (boundParams) {
    debugger;
    $.ajax ({
      url: "/benches",
      data: {filterParams: boundParams},
      dataType: "json",
      success: function (benches){
        debugger;
        ApiActions.receiveAll(benches);
      }
    });
  },

  createBench: function (benchParams) {
    $.ajax ({
      url: "/benches",
      method: "POST",
      data: benchParams
    });
  }
};
