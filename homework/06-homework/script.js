// api call for forecast --> api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}



// Define variables
var currentTemperature = $("#current-temperature");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");

var currentDate = moment().format("MM/DD/YY");


// Document listener

$(document).ready(function() {



    renderRecentSearch();
    placeholderCity();


    // Define function to show current weather for placeholder city
    function placeholderCity(event) {


        var inputCity = "New York";
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=london&appid=&APPID=971a7ca92ec80b78e871903e2a5fb549";



        // Ajax call for current weather details today
        $.ajax({
                url: queryURL,
                method: "GET"

            })
            .then(function(response) {
                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);

                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed);

                var weatherIcon = $("<img>").attr({ alt: response.weather[0].main + " icon", src: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png", height: "75px", width: "75px", });

                $(".main-row").append(weatherIcon);

            })

        // Ajax call for 5 day forecast
        // $.ajax({
        //         url: forecastURL,
        //         method: "GET"

        //     })
        //     .then(function(response) {
        //         console.log(response);




        //     })

    }


    // Define function to show recent search items as elements to be clicked on later
    function renderRecentSearch() {
        var i;
        for (i = 0; i < localStorage.length; i++) {
            var recentCity = localStorage.getItem(i);
            var recentCityElement = $("<p>").text(recentCity);
            recentCityElement.addClass("recent-search");
            $(".recent-search-container").append(recentCityElement);

        }

    }

    // Define function to display weather for new cities seached for the input field
    function displayWeather(event) {
        event.preventDefault();

        weatherIcon.attr("src", "");
        var searchCounter = parseInt(localStorage.length);
        var inputCity = $("#city-search-box").val();

        localStorage.setItem(searchCounter, inputCity);



        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        $.ajax({
                url: queryURL,
                method: "GET"

            })
            .then(function(response) {


                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);

                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed);

                var weatherIcon = $("<img>").attr({ alt: response.weather[0].main + " icon", src: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png", height: "75px", width: "75px", });

                $(".main-row").append(weatherIcon);

            })
    }

    // Define function to display weather when a recent searched city is clicked on
    function displayWeatherRecentCity(event) {

        var inputCity = event.target.textContent;

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        $.ajax({
                url: queryURL,
                method: "GET",


            })
            .then(function(response) {


                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);

                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed);


            })
    }


    // Call functions on button clicks
    $("#search-button").on("click", displayWeather);

    $(document).on("click", ".recent-search", displayWeatherRecentCity);



    // End of document listener
})