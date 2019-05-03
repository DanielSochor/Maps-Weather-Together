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
            $("#icon0").text("filter_drama")
        } else if (fromCityWeather[0].main === "Clear") {
            $("#icon0").text("wb_sunny")
        } else {
            $("#icon0").text("flash_on")
        };

        if (toCityWeather[0].main === "Rain") {
            $("#icon1").text("filter_drama")
        } else if (toCityWeather[0].main === "Clear") {
            $("#icon1").text("wb_sunny")
        } else {
            $("#icon1").text("flash_on")
        };
        
        $("#maxTemp1").text("Max Temp: " + Math.round(fromCityWeather[0].main.temp_max) + " F");
        $("#minTemp1").text("Min Temp: " + Math.round(fromCityWeather[0].main.temp_min) + " F");
        $("#day1").text("Day Forecast: " + fromCityWeather[0].weather[0].main);
        $("#night1").text("Night Forecast: " + fromCityWeather[0].weather[1].main);

        $("#maxTemp2").text("Max Temp: " + Math.round(toCityWeather[0].main.temp_max) + " F");
        $("#minTemp2").text("Min Temp: " + Math.round(toCityWeather[0].main.temp_min) + " F");
        $("#day2").text("Day Forecast: " + toCityWeather[0].weather[0].main);
        $("#night2").text("Night Forecast: " + toCityWeather[0].weather[1].main);

    });

};