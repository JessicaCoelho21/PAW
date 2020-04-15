document.getElementById("quest").addEventListener("submit", function(e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var key = xhttp.response;
            alert("Key -> " + key);
        }
    }

    const data = new FormData(e.target); // e.target is the form element - const formElement = document.querySelector(‘form’);
    const queryString = new URLSearchParams(data).toString()

    xhttp.open("GET", `/submission?${queryString}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
});