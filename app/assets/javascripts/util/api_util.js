var ApiUtil = {
  fetchBenches: function (boundParams) {
    debugger;
    $.ajax ({
      url: "/benches",
      data: {bounds: boundParams},
      dataType: "json",
      success: function (benches){
        ApiActions.receiveAll(benches);
      }
    });
  }
};
