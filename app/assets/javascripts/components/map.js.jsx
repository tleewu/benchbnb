(function(root) {

  var Map = root.Map = React.createClass ({
    _propagateMapMarkers: function () {
      var allBenches = BenchStore.all();
      var that = this;
      allBenches.map (function (bench){
        var marker = new google.maps.Marker ({
          position: {lat: bench.lat, lng: bench.lng },
          title: bench.description
        });
        marker.setMap(that.map);
      });

    },
    componentDidMount: function () {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      BenchStore.addChangeHandler(this._propagateMapMarkers);
      this.map.addListener('idle', function (){
        var mapBounds = this.map.getBounds()
        var neBounds = "'northEast': {'lat': '" +
          mapBounds.getNorthEast().J + "', 'lng': '" +
          mapBounds.getNorthEast().M + "'}";
        var swBounds = ", 'southWest': {'lat': '" +
          mapBounds.getSouthWest().J + "', 'lng': '" +
          mapBounds.getSouthWest().M + "'}";
        ApiUtil.fetchBenches(neBounds + swBounds);
      }.bind(this));
    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
