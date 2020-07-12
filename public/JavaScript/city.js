
var api = {

    base: "http://api.openweathermap.org/data/2.5",
    key: "6436fb58623fe80bc655e87c02e3b3c7"

};

async function getWeather() {

    var form = document.forms["cityform"];
    console.log(form.city.value);
    var city = form.city.value;
    var response = await fetch(`${api.base}/weather?q=${city}&units=metric&appid=${api.key}`);
    var weather = await response.json();
    var intro = document.getElementById('intro');

    displayResult(weather);
}
function displayResult(data) {
    var months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var city = document.getElementById('city');
    var weather = document.getElementById('weather');
    var temp = document.getElementById('temp');
    var range = document.getElementById('range');
    var date = document.getElementById('date');
    var html = document.getElementsByTagName('html');

    console.log(data);

    if (data.cod == 404) {
        city.innerText = "Invalid Request, Please check the city name";
    }
    else {

        if (data.main.temp >= 35) {
            html[0].style.background = "url('../Assets/summer.jpg')";
            html[0].style.backgroundPosition = "center";
            html[0].style.backgroundRepeat = "no-repeat";
            html[0].style.backgroundSize = "cover";

        }
        else if (data.main.temp <= 0) {
            html[0].style.background = "url('../Assets/winter2.jpg')";
            html[0].style.backgroundPosition = "center";
            html[0].style.backgroundRepeat = "no-repeat";
            html[0].style.backgroundSize = "cover";

        }
        else if (data.main.temp <= 15) {
            html[0].style.background = "url('../Assets/cold.jpg')";
            html[0].style.backgroundPosition = "center";
            html[0].style.backgroundRepeat = "no-repeat";
            html[0].style.backgroundSize = "cover";

        }
        city.innerText = `${data.name}, ${data.sys.country}`;
        date.innerText = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
        temp.innerText = `${data.main.temp}℃, Feels Like ${data.main.feels_like}℃`;
        weather.innerText = ` ${data.weather[0].description}`;
        range.innerText = `Range:${data.main.temp_min}℃ - ${data.main.temp_max}℃`;


    }
}
