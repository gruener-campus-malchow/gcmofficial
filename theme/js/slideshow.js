addEventListener('load',main());

function slideSwitch() {
    if (slideIndex == slidearray.length-2) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    showslide(slideIndex,slides);
}
// imideatly switches slidess
let slideIndex = 1;
function toggle() {
    let slides = document.querySelectorAll("#titelbild .field__item");
    console.log(slides);
    console.log(slideIndex);
    if (slideIndex == slides.length-1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    for (let i=0;i < slides.length;i++) {
        if (i != slideIndex) {
            slides[i].style.display = "none";
            console.log("Slides[i]: " ,slides[i]);
        } else {
            slides[i].style.display = "inline";
        }
    };
    console.log(slideIndex)
    console.log(slides[slideIndex]);
}
function main() {
    let autoswitch = setInterval(toggle, 5000);
}
