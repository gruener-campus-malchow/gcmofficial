document.addEventListener("DOMContentLoaded", function () {
    document.body.querySelector("#edit-field-jahrgang-von-value").addEventListener("input", function (e) {
        document.body.querySelector("#edit-field-jahrgang-bis-value").value = e.target.value;
    });
});