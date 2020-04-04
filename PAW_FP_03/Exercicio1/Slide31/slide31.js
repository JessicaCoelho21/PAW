var email = document.getElementById('email');

email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValitidy('I expected a valid email');
    } else {
        email.setCustomValitidy('');
    }
});