(function(root) {
  'use strict';

  var Index = root.Index = React.createClass ({

    getInitialState: function () {
      return ({benches: BenchStore.all()});
    },

    componentDidMount: function () {
      BenchStore.addChangeHandler(this._resetBenches);
    },

    componentWillUnmount: function () {
      BenchStore.removeChangeHandler(this._resetBenches)
    },

    _resetBenches: function () {
      this.setState({benches: BenchStore.all()});
    },

    render : function () {
      return (
        <div>
          {this.state.benches}
        </div>
      );
    }
  });
}(this));
