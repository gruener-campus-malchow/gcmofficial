var autoswitch = null;
var slides_out_func = document.querySelectorAll("#titelbild .field__item");
var width = screen.width;
if (slides_out_func.length>1){
    if (width>360) {
        var fwbutton = document.createElement('button');
        fwbutton.innerText = '→';
        var bwbutton = document.createElement('button');
        bwbutton.innerText = '←';
        fwbutton.onclick = fwimtog;
        bwbutton.onclick = bwimtog;
    }
    document.addEventListener("DOMContentLoaded", ontheload);
}
// immediately switches slides
var slideIndex = 0;
function toggle(fw) {
    let slides = document.querySelectorAll("#titelbild .field__item");
    if (slides.length <= 1) {
        return true
    }
    console.log(slides);
    console.log(slideIndex);
    if (fw) {
        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex += 1;
        }
    } else {
        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex -= 1;
        }
    }
    for (let i = 0; i < slides.length; i++) {
        if (i != slideIndex) {
            slides[i].classList.add("slideshow-hidden");
        } else {
            slides[i].classList.remove("slideshow-hidden");
        }
    };
    console.log("slide index: ", slideIndex);
    console.log("current slide: ", slides[slideIndex]);
}
function togglefw() {
    toggle(true);
}
function togglebw() {
    toggle(false);
}
function main() {
    autoswitch = setInterval(togglefw, 8000);
}
function fwimtog() {
    clearInterval(autoswitch);
    togglefw();
    main();
}
function bwimtog() {
    clearInterval(autoswitch);
    togglebw();
    main();
}

function ontheload() {
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(bwbutton); // first element added will appear on the left
    buttonContainer.appendChild(fwbutton); // will appear on the right
    document.getElementById("titelbild").appendChild(buttonContainer);
    main();
}
