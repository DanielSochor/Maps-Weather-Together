$(document).ready(function () {
    
    var platform = new H.service.Platform({
        'app_id': '{wcU125hOha6uKl56A00d}',
        'app_code': '{DD3bbz78Ju_Tb88oKzx0kA}'
        });

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