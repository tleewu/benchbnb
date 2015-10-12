(function(root) {
  'use strict';

  var Search = root.Search = React.createClass ({

    handleMapClick: function (coords) {
      this.props.history.pushState(null, "benches/new", coords);
    },
    
    render: function () {
      return (
        <div>
          <Map click={this.handleMapClick}/>
          <Index />
        </div>
      );
    }
  });
}(this));
