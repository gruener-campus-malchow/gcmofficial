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

async function toggle(slideIndex, slides,slidearray) {
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