function getLatAndLongForToAndFrom(from, to) {
    $.when(
        $.ajax({
            url: 'https://geocoder.api.here.com/6.2/geocode.json',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                searchtext: from,
                app_id: 'wcU125hOha6uKl56A00d',
                app_code: 'DD3bbz78Ju_Tb88oKzx0kA',
                gen: '9'
            }
        }),
        $.ajax({
            url: 'https://geocoder.api.here.com/6.2/geocode.json',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                searchtext: to,
                app_id: 'wcU125hOha6uKl56A00d',
                app_code: 'DD3bbz78Ju_Tb88oKzx0kA',
                gen: '9'
            }
        }),
    ).done(function(geocoder0, geocoder1){
        lat0 = geocoder0[0].Response.View[0].Result[0].Location.DisplayPosition.Latitude;
        long0 = geocoder0[0].Response.View[0].Result[0].Location.DisplayPosition.Longitude;
        lat1 = geocoder1[0].Response.View[0].Result[0].Location.DisplayPosition.Latitude;
        long1 = geocoder1[0].Response.View[0].Result[0].Location.DisplayPosition.Longitude;
        waypoint0 = lat0.toString() + "," + long0.toString()
        waypoint1 = lat1.toString() + "," + long1.toString()
        //runFirebase();
        calculateRouteFromAtoBPublicTransit(platform,waypoint0,waypoint1);
        //calculateRouteFromAtoBPublicDriving(platform,waypoint0,waypoint1)
    });
};
