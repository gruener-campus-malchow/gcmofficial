addEventListener('load',main());
function showslide(slideIndex,slides) {
    for (let i=0;i < slides.length;i++) {
        slides[i].style.display = "none";
        console.log("Slides[i]: " ,slides[i]);
    };
    slides[slideIndex].style.display = "inline";
    console.log(slideIndex)
    console.log(slides[slideIndex]);
}
//function slideSwitch() {
//    if (slideIndex == slidearray.length-2) {
//        slideIndex = 0;
//    } else {
//        slideIndex += 1;
//    }
//    showslide(slideIndex,slides);
//}
// imideatly switches slides

function toggle(slideIndex) {
    if (slideIndex == undefined) {
        console.log("defined slideindex");
        let slideIndex = 0;
    };
    let slides = document.querySelectorAll("#titelbild .field__item");
    console.log(slides)
    if (slideIndex == slides.length-1) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    showslide(slideIndex,slides)
}
function main() {
    let autoswitch = setInterval(toggle, 5000);

}