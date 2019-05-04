function getWeather(fromCity, toCity) {
    $.when(
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" +
                fromCity + "&units=imperial&appid=9017eb1defd779b9b948d111f75e9386",
            method: "GET"
        }),
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" +
                toCity + "&units=imperial&appid=9017eb1defd779b9b948d111f75e9386",
            method: "GET"
        }),
    ).done(function (fromCityWeather, toCityWeather) {

        if (fromCityWeather[0].main === "Rain") {
            $("#icon0").text("flash_on")
        } if (fromCityWeather[0].main === "Clear") {
            $("#icon0").text("wb_sunny")
        } if (fromCityWeather[0].main === "Clouds"){
            $("#icon0").text("cloud")
        } if(fromCityWeather[0].main === "Snow"){
            $("#icon0").text("ac_unit")
        }
        else {
            $("#icon0").text("invert_colors")
        };

        if (toCityWeather[0].main === "Rain") {
            $("#icon1").text("flash_on")
        } if (toCityWeather[0].main === "Clouds"){
            $("#icon1").text("cloud")
        } if (toCityWeather[0].main === "Clear") {
            $("#icon1").text("wb_sunny")
        } if (toCityWeather[0].main === "Snow") {
            $("#icon1").text("ac_unit")
        } 
        else{
            $("#icon1").text("invert_colors")
        };
        
        $("#maxTemp1").text("Max Temp: " + Math.round(fromCityWeather[0].main.temp_max) + " F");
        $("#minTemp1").text("Min Temp: " + Math.round(fromCityWeather[0].main.temp_min) + " F");
        $("#day1").text("Forecast: " + fromCityWeather[0].weather[0].main);
        //$("#night1").text("Night Forecast: " + fromCityWeather[0].weather[1].main);

        $("#maxTemp2").text("Max Temp: " + Math.round(toCityWeather[0].main.temp_max) + " F");
        $("#minTemp2").text("Min Temp: " + Math.round(toCityWeather[0].main.temp_min) + " F");
        $("#day2").text("Forecast: " + toCityWeather[0].weather[0].main);
        //$("#night2").text("Night Forecast: " + toCityWeather[0].weather[1].main);

    });

};