function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: 46.469391,
      lng: 30.740883
    }
  });

  var odessaCenterMap = new google.maps.Polygon({
    paths: odessaCenterCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'purple',
    fillOpacity: 0.35
  });
  odessaCenterMap.setMap(map);

  var odessaFontanMap = new google.maps.Polygon({
    paths: odessaFontanCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'red',
    fillOpacity: 0.35
  });
  odessaFontanMap.setMap(map);

  var odessaTairovoMap = new google.maps.Polygon({
    paths: odessaTairovoCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'orange',
    fillOpacity: 0.35
  });
  odessaTairovoMap.setMap(map);

  var odessaKotovskogoMap = new google.maps.Polygon({
    paths: odessaKotovskogoCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.35
  });
  odessaKotovskogoMap.setMap(map);

  var odessaFarMap = new google.maps.Polygon({
    paths: odessaFarCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'yellow',
    fillOpacity: 0.35
  });
  odessaFarMap.setMap(map);

  var odessaKrijanovkaMap = new google.maps.Polygon({
    paths: odessaKrijanovkaCoords,
    strokeColor: 'black',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'blue',
    fillOpacity: 0.35
  });
  odessaKrijanovkaMap.setMap(map);

  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {

  var odessaCenter = new google.maps.Polygon({
    paths: odessaCenterCoords
  });

  var odessaFontan = new google.maps.Polygon({
    paths: odessaFontanCoords
  });

  var odessaTairovo = new google.maps.Polygon({
    paths: odessaTairovoCoords
  });

  var odessaKotovskogo = new google.maps.Polygon({
    paths: odessaKotovskogoCoords
  });

  var odessaFar = new google.maps.Polygon({
    paths: odessaFarCoords
  });

  var odessaKrijanovka = new google.maps.Polygon({
    paths: odessaKrijanovkaCoords
  });

  var address = document.getElementById('address').value;
  // var floatPanel = document.getElementById('floating-panel');
  var input = document.getElementById('address');
  // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(floatPanel);
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);


  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaCenter)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 150 грн');
      } else if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaFontan)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 250 грн');
      } else if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaTairovo)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 350 грн');
      } else if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaKotovskogo)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 450 грн');
      } else if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaFar)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 400 грн');
      } else if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, odessaKrijanovka)) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        alert('Доставка от 500 грн');
      }
    } else {
      alert('Заказ не принят по причине: неверно введен адрес' );
    }
  });
}
