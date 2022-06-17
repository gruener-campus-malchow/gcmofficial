// ensure that every element has been loaded
window.onload = function () {
    var toggle = document.getElementById("superfish-main-toggle");
    var menu = document.getElementById("block-hauptnavigation");

    toggle.addEventListener("click", () => {
        // the class only exists in the css breaks/mobile.css
        menu.classList.toggle("mobile-extentmenu");
    });
};