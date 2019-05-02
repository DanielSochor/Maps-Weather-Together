function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&units=imperial&appid=9017eb1defd779b9b948d111f75e9386";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        if(response.weather[0].main === "Rain"){
            $("#icon").append("filter_drama")
        }
        else if(response.weather[0].main=== "Clear"){
            $("#icon").append("wb_sunny")
        }
        else{
            $("#icon").append("flash_on")
        };
        $("#maxTemp1").append("Max Temp: " + response.main.temp_max + " F");
        $("#minTemp1").append("Min Temp: " + response.main.temp_min + " F");
        $("#day1").append("Day Forecast: " + response.weather[0].main);
        $("#night1").append("Night Forecast: " + response.weather[1].main);
        $("#maxTemp2").append("Max Temp: " + response.main.temp_max + " F");
        $("#minTemp2").append("Min Temp: " + response.main.temp_min + " F");
        $("#day2").append("Day Forecast: " + response.weather[0].main);
        $("#night2").append("Night Forecast: " + response.weather[1].main);


    })
};