$(document).ready(function () {

  $(document).on("click", "#submit-button", function () {
    var fromStreet = $("#a-street").val();
    var fromCity = $("#a-city").val();
    var fromState = $("#a-state").val();
    var fromZipCode = $("#a-zip").val();
    var toStreet = $("#b-street").val();
    var toCity = $("#b-city").val();
    var toState = $("#b-state").val();
    var toZipCode = $("#b-zip").val();
    var fromAddressString = fromStreet + " " + fromCity + " " + fromState + " " + fromZipCode;
    var toAddressString = toStreet + " " + toCity + " " + toState + " " + toZipCode;

    if (fromCity == "" || toCity == "") {
      alert("Please be sure to add a city");
    } else {
      getWeather(fromCity);
      getWeather(toCity);
      getLatAndLongForToAndFrom(fromAddressString, toAddressString);
    }
  });
});
