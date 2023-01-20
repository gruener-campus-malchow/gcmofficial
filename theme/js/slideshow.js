document.addEventListener('load', ontheload());

var autoswitch = null;
var window.fwbutton = document.createElement('button');
window.fwbutton.innerText = '>';
var window.bwbutton = document.createElement('button');
window.bwbutton.innerText = '<';
window.fwbutton.classList.add("togglebuttons");
window.bwbutton.classList.add("togglebuttons");
window.fwbutton.onclick = fwimtog();
window.bwbutton.onclick = bwimtog();


// imideatly switches slidess
var slideIndex = 1;
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
    console.log("slide index: ", slideIndex)
    console.log("current slide: ", slides[slideIndex]);
}
function togglefw() {
    toggle(true);
}
function togglebw() {
    toggle(false);
}
function main() {
    autoswitch = setInterval(togglefw, 10000);
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
    document.getElementById("titelbild").appendChild(window.fwbutton);
    document.getElementById("titelbild").appendChild(window.bwbutton);
    setTimeout(main, 2000);
}
