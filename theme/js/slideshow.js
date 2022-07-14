let slideIndex = 1;
const slides = document.getElementsByClassName("field__item");
const slidearray = Array.from(slides);
let i = 0;
let autoswitch = setInterval(slideSwitch, 5000);

document.getElementsByClassName('field__item').onclick = toggle();

function showslide() {
    i = 0;
    while (i < slidearray.length-1) {
        slidearray[i].style.display = "none";
        console.log("Slidearray[i]: " ,slidearray[i]);
        i++;
    };
    slidearray[slideIndex].style.display = "inline";
    console.log(slidearray[slideIndex]);
}
function slideSwitch() {
    if (slideIndex == slidearray.length-2) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    showslide();
}
// imideatly switches slides

async function toggle(slideIndex = 1) {
    window.clearInterval(autoswitch);
    console.log(document.getElementsByClassName("field__item"));
    let slides = document.getElementsByClassName("field__item");
    console.log(slides)
    if (slideIndex == slides.length-1) {
        slideIndex = 0
    } else {
        slideIndex += 1;
    }
    showslide(slideIndex)
}