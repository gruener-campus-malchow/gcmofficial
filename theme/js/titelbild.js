document.addEventListener("DOMContentLoaded", () => {
    var titelbild = document.getElementById("titelbild");
    var titelbildImage = titelbild.getElementsByTagName("img")[0]; // images of slideshows should have the same aspect ratio

    function imageFitWindow() {
        if (titelbildImage.offsetHeight < titelbild.offsetHeight) {
            titelbild.classList.add("fit-vertical");
        } else {
            titelbild.classList.remove("fit-vertical");
        }
    }

    imageFitWindow();
    window.addEventListener("resize", imageFitWindow);
});