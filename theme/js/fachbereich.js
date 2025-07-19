// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    const galerie = document.getElementsByClassName("field--name-field-bildergalerie")[0];
    const items = Array.from(galerie.querySelectorAll("img"));
    imagesReady(galerie, items);
});

function imagesReady(galerie, items) {
    if (items.every((item) => item.complete && item.naturalHeight !== 0)) {
        console.log("All images in gallery are loaded.");
        resizeGallery(galerie, items);
        enlargeImage(items);
    } else {
        setTimeout(() => imagesReady(galerie, items), 100);
    }
}

function resizeGallery(galerie, items) {
    let relativeHeightSum = 0;
    items.forEach((node) => {
        let ratio = node.naturalWidth / node.naturalHeight;
        if (ratio) {
            relativeHeightSum += 1 / ratio;
        }
    });
    /* set aspect ratio of gallery so that there are n rows of images
     * calculated by: sum of total relative height divided by number of rows and number of rows - 1
     *                divided by 2 to get the average relative height optimum
     *                divided by number of rows to get the corresponding aspect ratio
     * I can't explain the factor N(rows) / 3; it was determined by trial and error
     */
    const nRows = window.innerWidth >= window.innerHeight ? 3 : 2;
    relativeHeightSum += (items.length % nRows) * (relativeHeightSum / items.length); // guarantee that the last row is complete
    const weight = ((nRows / 3) * (1 / (nRows - 1)) + (1 / nRows)) / 2;
    const relativeHeightOptimum = relativeHeightSum * weight;
    galerie.querySelector(".field__items").style.aspectRatio = "1/" + (relativeHeightOptimum / nRows).toFixed(2);
    galerie.querySelector(".field__items").style.overflowX = "auto"; // sometimes the formula fails, e.g. if a long image is placed at an unsuitable position
}

function enlargeImage(items) {
    console.log("Add click");
    items.forEach((image) => {
        image.addEventListener("click", (e) => {
            console.log("*click*");
            var target = e.target.parentNode;
            var clone = target.cloneNode(true);
            clone.addEventListener("click", (e) => {
                var target = e.target;
                if (target.tagName.toLowerCase() == "img") {
                    target = target.parentNode;
                }
                document.body.removeChild(target);
            });
            imageDescription = document.createElement("p");
            imageDescription.innerText = clone.getElementsByTagName("img")[0].getAttribute("alt");
            clone.classList.add("popup");
            clone.appendChild(imageDescription);
            document.body.prepend(clone);
        });
    });
}
