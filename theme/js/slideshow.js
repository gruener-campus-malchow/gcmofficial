document.addEventListener("DOMContentLoaded", main());
document.getElementById('slideshow').onclick = toggle();
// Switches SLides every 5 seconds
async function autoswitch() {
    slideIndex = 1
    return setInterval(function () {
        let slides = document.getElementById("titelbild").document.getElementsByClassName("field__item");
        if (slideIndex == slides.length-1) {
            slideIndex = 0
        } else {
            slideIndex += 1;
        }
        showslide(slideIndex)
    }, 5000);
}
// imideatly switches slides
function toggle() {
    window.clearInterval(timerID);
}
// shows current slide
function showslide(slideIndex) {
    let slides = document.getElementsByClassName("field__item");
    let i = 0
    for (i in slides.length-1){slides[i].style.visibility = "hidden";}
    slides[slideIndex].style.display = "visible";
}
// executed main function on content load
function main() {
    timerID = autoswitch();
    autoswitch();
}
