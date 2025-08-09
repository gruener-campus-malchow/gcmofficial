// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    let feed = document.getElementsByClassName("feed-icon")[0];
    if (feed != undefined) {
        feed.onclick = (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(feed.href).then(
                () => {
                    // successful
                    alert("Der Link zum Feed wurde erfolgreich in die Zwischenablage kopiert!");
                },
                () => {
                    // failed
                    alert("Um den RSS-Feed zu abonieren, kopieren Sie bitte folgende Addresse und übergeben sie Ihrem RSS-Feed-Leser: " + feed.href);
                }
            );
        };
    }
});