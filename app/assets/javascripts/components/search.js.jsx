(function(root) {
  'use strict';

  var Search = root.Search = React.createClass ({
    render: function () {
      return (
        <div>
          <Map />
          <Index />
        </div>
      );
    }
  });
}(this));
