addEventListener('load',ontheload());
document.getElementById('fwbutton').onclick = fwimtog();
document.getElementById('bwbutton').onclick = bwimtog();

// imideatly switches slidess
var slideIndex = 1;
function toggle(fw) {
    let slides = document.querySelectorAll("#titelbild .field__item");
    if (slides.length<=1){
        return true
    }
    console.log(slides);
    console.log(slideIndex);
    if(fw){
        if (slideIndex == slides.length-1) {
            slideIndex = 0;
        } else {
            slideIndex += 1;
        }
    } else {
        if (slideIndex == 0) {
            slideIndex = slides.length-1;
        } else {
            slideIndex -= 1;
        }
    }
    for (let i=0;i < slides.length;i++) {
        if (i != slideIndex) {
            for (let z=0;z < 100;z++) {
                slides[i].style.opacity = 100-z;
                console.log("OpacityOfInactive: ",slides[i].style.opacity);            
            }
            console.log("Slides[i]: " ,slides[i]);
        } else {
            for (let m=0;m < 100;m++) {
                slides[i].style.opacity = m;
                console.log("OpacityOfActive: ",slides[i].style.opacity);
            }
        }
    };
    console.log(slideIndex)
    console.log(slides[slideIndex]);
}
function togglefw(){
    toggle(true);
}
function togglebw(){
    toggle(false);
}
function main() {
    let autoswitch = setInterval(togglefw, 5000);
}
function fwimtog(){
    clearInterval(autoswitch);
    togglefw();
    main();
}
function bwimtog(){
    clearInterval(autoswitch);
    togglebw();
    main();
}
function ontheload(){
    window.fwbutton = document.createElement('fwbutton');
    window.fwbutton.innerText = '>';
    window.bwbutton = document.createElement('bwbutton');
    window.bwbutton.innerText = '<';
    document.getElementById("titelbild").appendChild(winow.fwbutton);
    document.getElementById("titelbild").appendChild(window.bwbutton);   
    setTimeout(main, 2000);
}
