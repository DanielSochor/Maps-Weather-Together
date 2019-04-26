$(document).ready(function () {

    var city = "Chicago";

    getWeather();

    function getWeather() {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&appid=9017eb1defd779b9b948d111f75e9386";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //results = response.data;
            console.log(response);
            lat = parseFloat(response.coord.lat);
            lon = parseFloat(response.coord.lon);

            var coordinates = {
                lat:lat, lng:lon
            }

            moveMapTo(map,coordinates);
        })
    };

    function moveMapTo(map,coordinates){

        map.setCenter(coordinates)
        map.setZoom(14);
      }
      
      /**
       * Boilerplate map initialization code starts below:
       */
      
      //Step 1: initialize communication with the platform
      var platform = new H.service.Platform({
        app_id: 'devportal-demo-20180625',
        app_code: '9v2BkviRwi9Ot26kp2IysQ',
        useHTTPS: true
      });
      var pixelRatio = window.devicePixelRatio || 1;
      var defaultLayers = platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320
      });
      
      //Step 2: initialize a map  - not specificing a location will give a whole world view.
      var map = new H.Map(document.getElementById('map'),
        defaultLayers.normal.map, {pixelRatio: pixelRatio});
      
      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      
      // Create the default UI components
      var ui = H.ui.UI.createDefault(map, defaultLayers);
      
      // Now use the map as required...
     

      //$('head').append('<link rel="stylesheet" href="https://js.api.here.com/v3/3.0/mapsjs-ui.css" type="text/css" />');










    // function getMap() {
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //         textToSearchFor + "&api_key=AlyafWwXDhMSFvBu5VaS8eH3vslwmZ3z&limit=" + numberOfGifsToDisplay;
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         results = response.data;
    //         console.log(response);
    //         //     for (var i = 0; i < results.length; i++) {
    //         //         var gifDiv = $("<div>");
    //         //         var rating = results[i].rating;
    //         //         var p = $("<p>").text("The GIF above has a rating of: " + rating);
    //         //         var gifImage = $("<img>");
    //         //         gifImage.attr("class", "gif");
    //         //         gifImage.attr("data-state", "still");
    //         //         gifImage.attr("data-to-do", i);
    //         //         gifImage.attr("src", results[i].images.fixed_height_still.url);
    //         //         gifDiv.prepend(p);
    //         //         gifDiv.prepend(gifImage);
    //         //         $("#gifs-appear-here").prepend(gifDiv);
    //         // }
    //     });
    // }



})