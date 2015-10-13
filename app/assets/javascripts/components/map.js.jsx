(function(root) {

  var Map = root.Map = React.createClass ({

    getInitialState: function () {
      return ({ markers: [] });
    },

    _propagateMapMarkers: function () {
      var allBenches = BenchStore.all();
      var markers = [];

      allBenches.map (function (bench){
        var marker = new google.maps.Marker ({
          position: {lat: bench.lat, lng: bench.lng },
          title: bench.description,
          id: bench.id
        });

        markers.push(marker);
      });

      markers.formatMarkers(this.state.markers, this.map);
      this.setState({ markers: markers });
    },

    getBounds: function () {
      var mapBounds = this.map.getBounds()

      var bounds = {
        northEast: {"lat": mapBounds.getNorthEast().lat(),
                    "lng": mapBounds.getNorthEast().lng()},
        southWest: {"lat": mapBounds.getSouthWest().lat(),
                    "lng": mapBounds.getSouthWest().lng()}
      };
      debugger;
      this.props.updateBounds(bounds);
      // ApiUtil.fetchBenches(bounds);

    },

    handleClick: function (location){
      var loc = location.latLng;
      this.props.click({lat: loc.J, lng: loc.M});
    },

    componentDidMount: function () {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      BenchStore.addChangeHandler(this._propagateMapMarkers);

      this.map.addListener('idle', this.getBounds);
      this.map.addListener('click', this.handleClick);
    },

    componentWillUnmount: function () {
      BenchStore.removeChangeHandler(this._propagateMapMarkers);
    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
