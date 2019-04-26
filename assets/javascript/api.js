$(document).ready(function () {

    var city = "Chicago";
    console.log(city);

    function getWeather() {
        var queryURL = "api.openweathermap.org/data/2.5/weather?q=" +
            city + "&appid=wcU125hOha6uKl56A00d";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                results = response.data;
                console.log(response);
            })
        };


//Open Weather API
//key: 9017eb1defd779b9b948d111f75e9386

var platform = new H.service.Platform({
    'app_id': '{wcU125hOha6uKl56A00d}',
    'app_code': '{DD3bbz78Ju_Tb88oKzx0kA}'
});

var maptypes = platform.createDefaultLayers();

var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map, {
        zoom: 10,
        center: {
            lng: 13.4,
            lat: 52.51
        }
    });

//https://developer.here.com/documentation/maps/topics/quick-start.html


function getMap() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        textToSearchFor + "&api_key=AlyafWwXDhMSFvBu5VaS8eH3vslwmZ3z&limit=" + numberOfGifsToDisplay;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        results = response.data;
        console.log(response);
        //     for (var i = 0; i < results.length; i++) {
        //         var gifDiv = $("<div>");
        //         var rating = results[i].rating;
        //         var p = $("<p>").text("The GIF above has a rating of: " + rating);
        //         var gifImage = $("<img>");
        //         gifImage.attr("class", "gif");
        //         gifImage.attr("data-state", "still");
        //         gifImage.attr("data-to-do", i);
        //         gifImage.attr("src", results[i].images.fixed_height_still.url);
        //         gifDiv.prepend(p);
        //         gifDiv.prepend(gifImage);
        //         $("#gifs-appear-here").prepend(gifDiv);
        // }
    });
}



})