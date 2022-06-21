// ensure that every element has been loaded
window.onload = function () {
    // mobile browsers only
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
};