(function(root) {
  'use strict';

  var FilterParams = root.FilterParams = React.createClass ({
    getInitialState: function () {
      return {minSeat: 0, maxSeat: 10}
    },

    componentDidMount: function () {
      this.props.updateMinMax(this.state.minSeat, this.state.maxSeat);
    },

    updateMin: function (e) {
      e.preventDefault();
      var min = e.currentTarget.value;
      this.setState({minSeat: min});
      FilterActions.updateMin(min);
    },

    updateMax: function (e) {
      e.preventDefault();
      var max = e.currentTarget.value;
      this.setState({maxSeat: max});
      FilterActions.updateMax(max);
    },

    render: function () {
      return (
        <form>
          <input type="number" placeholder="Min Seat" value={this.state.minSeat} onChange={this.updateMin}/>
          <input type="number" placeholder="Max Seat" value={this.state.maxSeat} onChange={this.updateMax}/>
        </form>
      )
    }
  });

}(this));
