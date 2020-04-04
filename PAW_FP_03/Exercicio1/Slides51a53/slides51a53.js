var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var resp = JSON.parse(this.responseText);
        processRequest(resp);
    }
}

xhttp.open("GET", "https://api.openchargermap.io/v3/poi/?output=json&countrycode=US&maxresults=10", true);
xhttp.send();

function processRequest(resp) {
    var i, country, lat, lon, address;
    var tbody = document.getElementById('tbody');

    for (let i = 0; i < resp.length; i++) {
        country = resp[i]["AddressInfo"]["Country"]["ISOCode"];
        lat = resp[i]["AddressInfo"]["Latitude"];
        lon = resp[i]["AddressInfo"]["Longitude"];
        address = resp[i]["AddressInfo"]["AddressLine1"];

        addLine(tbody, country, lat, lon, address);
    }
}

function addLine(tableBody, country, lat, lon, address) {
    var row = tableBody.insertRow(0);

    row.insertCell(0).innerHTML = country;
    row.insertCell(1).innerHTML = lat;
    row.insertCell(2).innerHTML = lon;
    row.insertCell(3).innerHTML = address;
    //alert(address);
}