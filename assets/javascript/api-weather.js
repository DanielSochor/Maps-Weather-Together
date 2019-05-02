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
            $("#icon0").append("filter_drama")
        } else if (fromCityWeather[0].main === "Clear") {
            $("#icon0").append("wb_sunny")
        } else {
            $("#icon0").append("flash_on")
        };

        if (toCityWeather[0].main === "Rain") {
            $("#icon1").append("filter_drama")
        } else if (toCityWeather[0].main === "Clear") {
            $("#icon1").append("wb_sunny")
        } else {
            $("#icon1").append("flash_on")
        };

        $("#maxTemp1").append("Max Temp: " + fromCityWeather[0].main.temp_max + " F");
        $("#minTemp1").append("Min Temp: " + fromCityWeather[0].main.temp_min + " F");
        $("#day1").append("Day Forecast: " + fromCityWeather[0].weather[0].main);
        $("#night1").append("Night Forecast: " + fromCityWeather[0].weather[1].main);

        $("#maxTemp2").append("Max Temp: " + toCityWeather[0].main.temp_max + " F");
        $("#minTemp2").append("Min Temp: " + toCityWeather[0].main.temp_min + " F");
        $("#day2").append("Day Forecast: " + toCityWeather[0].weather[0].main);
        $("#night2").append("Night Forecast: " + toCityWeather[0].weather[1].main);

    });
};