addEventListener('load',main());
//function slideSwitch() {
//    if (slideIndex == slidearray.length-2) {
//        slideIndex = 0;
//    } else {
//        slideIndex += 1;
//    }
//    showslide(slideIndex,slides);
//}
// imideatly switches slides
let slideIndex = 0;

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
        slides[i].style.display = "none";
        console.log("Slides[i]: " ,slides[i]);
    };
    slides[slideIndex].style.display = "inline";
    console.log(slideIndex)
    console.log(slides[slideIndex]);
}
function main() {
    let autoswitch = setInterval(toggle, 5000);
}