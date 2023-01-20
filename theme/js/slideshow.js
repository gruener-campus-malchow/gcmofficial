document.addEventListener('load', ontheload());

var autoswitch = null;

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
            console.log("Slides[i]: ", slides[i]);
        } else {
            slides[i].classList.remove("slideshow-hidden");
        }
    };
    console.log(slideIndex)
    console.log(slides[slideIndex]);
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
    window.fwbutton = document.createElement('button');
    window.fwbutton.innerText = '>';
    window.bwbutton = document.createElement('button');
    window.bwbutton.innerText = '<';
    window.fwbutton.onclick = fwimtog();
    window.bwbutton.onclick = bwimtog();
    document.getElementById("titelbild").appendChild(window.fwbutton);
    document.getElementById("titelbild").appendChild(window.bwbutton);
    setTimeout(main, 2000);
}
