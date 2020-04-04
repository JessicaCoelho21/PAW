const openweathermaps_key = "85ac8bb43b6886c27b768172c2cab870"

/**
 * obter a latitude e a longitude
 */
function searchWeather() {
    const lat = document.getElementById('paw-form-lat').value || 0;
    const lon = document.getElementById('paw-form-lon').value || 0;

    response(lat, lon);
}

/**
 * Obtem o tempo a partir das coordenadas dadas
 * @param {*} lat 
 * @param {*} lon 
 */
function response(lat, lon) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            console.log(weatherObject);
            var currentWeather = weatherObject["weather"][0]["description"];
            document.getElementById("paw-results-row").style.display = "block";
            document.getElementById("Results").innerHTML = "<i class=\"fas fa-cloud\"></i> " + currentWeather;
        }
    }

    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}

/**
 * Obtem a localização do utilizador
 */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates, showError);
    } else {
        let errorline = document.getElementById("Results");
        document.getElementById("paw-results-row").style.display = "block";
        errorline.innerHTML = "O browser não suporta o pedido de localização.";
    }
}

/**
 * Obtem as coordenadas da localização do utilizador
 * @param {*} position 
 */
function getCoordinates(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    response(lat, lon);
}

/**
 * Lista de erros que podem surgir durante a autorização para aceder às coordenadas
 * @param {*} error 
 */
function showError(error) {
    let x = document.getElementById("Results");
    document.getElementById("paw-results-row").style.display = "block";

    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "O utilizador não permitiu aceder à sua localização."
            break;

        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "A localização não é válida."
            break;

        case error.TIMEOUT:
            x.innerHTML = "O pedido de autorização para a localização expirou."
            break;

        case error.UNKNOWN_ERROR:
            x.innerHTML = "Ocorreu um erro."
            break;
    }
}

/**
 * Obtem a localização para fazer a previsão de 5 dias
 */
function getForecastLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getForecastCoordinates, showError);
    } else {
        let errorline = document.getElementById("Results");

        document.getElementById("paw-results-row").style.display = "block";
        errorline.innerHTML = "O browser não suporta o pedido de localização.";
    }
}

/**
 * Obtém a latitude e a longitude
 * @param {*} position 
 */
function getForecastCoordinates(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    forecast(lat, lon);
}

/**
 * Obtem o tempo para dos 5 dias, dadas as coordenadas
 * @param {*} lat 
 * @param {*} lon 
 */
function forecast(lat, lon) {
    lat = lat || 0;
    lon = lon || 0;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);

            console.log(xhttp.response);
            document.getElementById("paw-results-row").style.display = "block";

            for (let i = 0; i < 5; i++) {
                let dailyWeather = "Day " + (i + 1) + ": " + "<i class=\"fas fa-cloud\"></i> " + weatherObject["list"][i]["weather"][0]["description"];
                document.getElementById("Results").innerHTML += dailyWeather + "<br>";
            }
        }
    }

    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}