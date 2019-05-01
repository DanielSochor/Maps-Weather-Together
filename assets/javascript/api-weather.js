function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&units=imperial&appid=9017eb1defd779b9b948d111f75e9386";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
};