addEventListener('load',ontheload());
document.getElementById('fwbutton').onclick = fwimtog();
document.getElementById('bwbutton').onclick = bwimtog();

// imideatly switches slidess
let slideIndex = 1;
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
            for (let z=100;z > 0;z-=1) {
                slides[i].style.opacity = z;
                console.log("OpacityOfInactive: ",slides[i].style.opacity);            
            }
            console.log("Slides[i]: " ,slides[i]);
        } else {
            for (let m=0;m < 100;m-=1) {
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
    const button = document.createElement('fwbutton');
    fwbutton.innerText = '>';
    const button = document.createElement('bwbutton');
    bwbutton.innerText = '<';
    document.getElementById("titelbild").appendChild(fwbutton);
    document.getElementById("titelbild").appendChild(bwbutton);   
    setTimeout(main, 2000);
}
