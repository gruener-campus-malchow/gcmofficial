document.addEventListener("DOMContentLoaded", main());
document.getElementById('slideshow').onclick = toggle();

function toggle() {
    window.clearTimeout(timeoutID);
}

async function autoswitch() {
    slideIndex = 1
    while (True) {
        timeoutID = window.setTimeout(showslide(), 5000);
        let slides = document.getElementsByClassName("field__item");
        if (slideIndex == slides.length-1) {
            slideIndex = 0
        } else {
            slideIndex += 1;
        }
        showslide(slideIndex)
    }
    timeoutID = window.setTimeout(showslide(slideIndex), 2000);
};
function showslide(slideIndex) {
    let slides = document.getElementsByClassName("field__item");
    let i = 0
    for (i in slides.length-1){slides[i].style.visibility = "hidden";}
    slides[slideIndex].style.display = "visible";
}
function main() {
    autoswitch();
};
