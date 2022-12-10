// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    // mobile clients only
    if (window.innerWidth <= 500) {
        var toggle = document.getElementById("superfish-main-toggle");
        var menu = document.getElementById("block-hauptnavigation");

        toggle.addEventListener("click", () => {
            // the class can be found in the css breaks/mobile.css
            menu.classList.toggle("mobile-extentmenu");
        });

        var search = document.getElementById("block-gcmofficial-search");
        var menulist = document.getElementById("superfish-main-accordion");

        search.parentNode.removeChild(search);
        listitem = document.createElement("li");
        listitem.classList.add("sf-depth-1", "sf-no-children");
        listitem.appendChild(search);
        menulist.prepend(listitem);
    }
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