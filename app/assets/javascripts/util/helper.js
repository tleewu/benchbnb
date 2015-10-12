// This method will help comparing markers so that we can remove any marker that
// is not needed from our Google Maps. Will return the array of extras.
// 'this' refers to the current array of markers. array refers to the old array
// formatMarkers will remove markers that I don't want anymore and keep markers.
// it will also add markers from 'this' that has not been accounted for.

Array.prototype.formatMarkers = function (array, map) {
  var needsToBeRemoved = [];
  var needsToBeAdded = [];
  var overlapped = [];

  var overlap = false;
  var needsRemoval = true;

  this.forEach (function (currentMarker) {
    array.forEach (function (oldMarker) {
      if (currentMarker.id === oldMarker.id){
        overlap = true;
        return;
      }
    });
    if (overlap) {
      overlapped.push(currentMarker);
    } else {
      needsToBeAdded.push(currentMarker);
    }
  });

  array.forEach (function (oldMarker) {
    overlapped.forEach (function (currentMarker) {
      if (oldMarker.id === currentMarker.id){
        needsRemoval = false;
        return;
      }
    });
    if (needsRemoval){
      needsToBeRemoved.push(oldMarker);
    }
  });
  needsToBeRemoved.forEach (function (marker) {
    marker.setMap(null);
  });

  needsToBeAdded.forEach (function (marker) {
    marker.setMap(map);
  });
};
