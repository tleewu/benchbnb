(function(root) {
  'use strict';

  var BenchForm = root.BenchForm = React.createClass ({

    getInitialState: function () {
      return ({lat: this.props.location.query.lat,
               lng: this.props.location.query.lng,
               description: '', seating: ''});
    },

    updateLat: function (e){
      this.setState({lat: e.currentTarget.value});
    },

    updateLng: function (e){
      this.setState({lng: e.currentTarget.value});
    },

    updateDescription: function (e){
      this.setState({description: e.currentTarget.value});
    },

    updateSeating: function (e){
      this.setState({seating: e.currentTarget.value});
    },

    handleSubmit: function (e) {
      e.preventDefault();
      var lat = parseFloat(this.state.lat);
      var lng = parseFloat(this.state.lng);
      var seating = parseInt(this.state.seating);
      var description = this.state.description;

      var createBenchParams = {
        lat: lat,
        lng: lng,
        seating: seating,
        description: description
      };
      ApiUtil.createBench(createBenchParams);

    },

    render: function () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Latitude' ref='lat' value={this.state.lat} onChange={this.updateLat}/> <br/>
          <input type='text' placeholder='Longitude' ref='lng' value={this.state.lng} onChange={this.updateLng}/><br/>

          <input type='text' placeholder='Description' ref='description' onChange={this.updateDescription}/><br/>
          <input type='text' placeholder='Seating' ref ='seating' onChange={this.updateSeating}/><br/><br/>

          <input type="submit" value= "Create Bench"/>
        </form>
      );
    }
  });
}(this));
