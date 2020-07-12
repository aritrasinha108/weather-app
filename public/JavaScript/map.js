const api = {
    base: "http://api.openweathermap.org/data/2.5",
    key: "6436fb58623fe80bc655e87c02e3b3c7"

}

async function getWeather(long, lat) {
    var response = await fetch(`${api.base}/weather?lat=${lat}&lon=${long}&units=metric&appid=${api.key}`);
    var weather = await response.json();
    console.log(weather);
    return weather;

}
var months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = new Date();

