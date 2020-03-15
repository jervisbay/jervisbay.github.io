// Define variables for navigation and manipulation
var currentTemperature = $("#current-temperature");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");


// Define variables for dates
var currentDate = moment().format("MM/DD/YY");
var day1 = moment().add(1, "days").format("MM/DD/YY");
var day2 = moment().add(2, "days").format("MM/DD/YY");
var day3 = moment().add(3, "days").format("MM/DD/YY");
var day4 = moment().add(4, "days").format("MM/DD/YY");
var day5 = moment().add(5, "days").format("MM/DD/YY");

// Define variable for the weather icon
var weatherIcon = $("#weather-icon");

// Document listener

$(document).ready(function() {

    // Insert dates for the 5 day forecast
    $("#day1").text(day1);
    $("#day2").text(day2);
    $("#day3").text(day3);
    $("#day4").text(day4);
    $("#day5").text(day5);

    // Call function to render elements that contain recent search cities
    renderRecentSearch();

    // Call function for weather in New York as placeholder
    placeholderCity();

    // Define function to show current weather for placeholder city
    function placeholderCity(event) {

        // Define placeholder city as New York
        var inputCity = "New York";

        // Define query URL for current weather api
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        // Define query URL for forecaset api
        var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=london&appid=&APPID=971a7ca92ec80b78e871903e2a5fb549";

        // Ajax call for current weather details 
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {

                // Convert temperature to fahrenheit
                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);

                // Replace text elements in placeholders created
                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed + "mph");

                // Replace image source in placeholder
                weatherIcon.attr({ alt: response.weather[0].main + " icon", src: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" });
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

        // For loop to create recent searched city element based on number of saved cities in local storage
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

        // Remove existing image source for weather icon
        weatherIcon.attr("src", "");

        // Define variable to use as key in local storage, based on current number of items in local storage
        var searchCounter = parseInt(localStorage.length);

        // Define variable to store user inputted city
        var inputCity = $("#city-search-box").val();

        // Define variable to store user inputted city with capitalized first letter
        var inputCityProper = inputCity.charAt(0).toUpperCase() + inputCity.slice(1).toLowerCase();

        // Save variable to local storage
        localStorage.setItem(searchCounter, inputCityProper);

        // Define query URL for current weather api
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        // Ajax call for current weather details (similar to ajax call earlier)
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);
                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed + "mph");
                weatherIcon.attr({ alt: response.weather[0].main + " icon", src: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" });
            })
    }

    // Define function to display weather when a recent searched city is clicked on
    function displayWeatherRecentCity(event) {

        var inputCity = event.target.textContent;
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=971a7ca92ec80b78e871903e2a5fb549";

        // Ajax call same as above
        $.ajax({
                url: queryURL,
                method: "GET",
            })
            .then(function(response) {
                var temperatureInFahrenheit = Math.round((response.main.temp - 273.15) * 9 / 5 + 32);
                $("#current-city").text(response.name + "(" + currentDate + ")");
                currentTemperature.text(temperatureInFahrenheit + "F");
                currentHumidity.text(response.main.humidity + "%");
                currentWindSpeed.text(response.wind.speed + "mph");
                weatherIcon.attr({ alt: response.weather[0].main + " icon", src: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png" });
            })
    }


    // Call functions on button clicks
    $("#search-button").on("click", displayWeather);
    $("form").on("submit", displayWeather);
    $(document).on("click", ".recent-search", displayWeatherRecentCity);



    // End of document listener
})