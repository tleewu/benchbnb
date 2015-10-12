var ApiUtil = {
  fetchBenches: function (boundParams) {
    $.ajax ({
      url: "/benches",
      data: {bounds: boundParams},
      dataType: "json",
      success: function (benches){
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
