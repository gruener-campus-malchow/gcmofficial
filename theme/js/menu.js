// mobile clients only
if (window.innerWidth <= 500) { menuReady(); }

function menuReady() {
    if (document.getElementById("superfish-main-toggle") && document.getElementById("block-hauptnavigation") && document.getElementById("block-gcmofficial-search") && document.getElementById("superfish-main-accordion")) {
        loadMenu();
    } else {
        setTimeout(menuReady, 100);
    }
}

function loadMenu() {
    requestAnimationFrame(() => {
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
    });
}