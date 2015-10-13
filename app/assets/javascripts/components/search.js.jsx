(function(root) {
  'use strict';

  var Search = root.Search = React.createClass ({

    getInitialState: function () {
      return {params: FilterParamsStore.get()}
    },

     _updateParams: function () {
      var updatedParams = FilterParamsStore.get();
      this.setState({params: updatedParams});
      ApiUtil.fetchBenches(updatedParams);
    },

    _updateBounds: function (bounds) {
      var updateParams = new Object (this.state.params);
      updateParams.bounds = bounds;
      this.setState({params: updateParams});
      ApiUtil.fetchBenches(updateParams);
      // FilterActions.updateParams(updateParams);
    },

    _updateMinMax: function (min, max) {
      var updateParams = new Object (this.state.params);
      updateParams.min = min;
      updateParams.max = max;
      this.setState({params: updateParams});
      FilterActions.updateParams(updateParams);
    },

    componentDidMount: function () {
      FilterParamsStore.addChangeHandler(this._updateParams);
    },

    handleMapClick: function (coords) {
      this.props.history.pushState(null, "benches/new", coords);
    },

    render: function () {
      return (
        <div>
          <Map click={this.handleMapClick} updateBounds={this._updateBounds}/>
          <FilterParams updateMinMax={this._updateMinMax}/>
          <Index />
        </div>
      );
    }
  });
}(this));
