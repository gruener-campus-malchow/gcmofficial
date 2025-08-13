// ensure that every element has been loaded
window.addEventListener("load", () => {
    const galerie = document.getElementsByClassName("field--name-field-bildergalerie")[0];
    let items = Array.from(galerie.querySelectorAll("img"));
    imagesReady(galerie, items);
});

function imagesReady(galerie, items) {
    if (items.every((item) => item.complete && item.naturalHeight !== 0)) {
        console.log("All images in gallery are loaded.");
        resizeGallery(galerie, items);
        setEnlargeImage(items);
    } else {
        setTimeout(() => imagesReady(galerie, items), 100);
    }
}

function resizeGallery(galerie, items) {
    requestAnimationFrame(() => {
        const nCols = window.innerWidth >= window.innerHeight ? 3 : 2;
        let virtualColumns = new Array(nCols).fill(0); // cumulative relative height sum
        let virtualColumnsCollector = []; // objects, for determining position of last image
        // fill virtual columns *naively*
        // better algorithms could include a restriction of placement before/after already placed images or use Bayesian Optimization
        while (items.length > 1) {
            // just add image to smallest column
            const smallest = virtualColumns.indexOf(Math.min(...virtualColumns));
            // get the image to add -> when add to 1st column, use 1st image in items; when add to last column, use last image, etc.
            let smallestIndex = smallest / (nCols - 1) * (items.length - 1);
            let iterations = 1;
            if (smallestIndex - Math.floor(smallestIndex) == 0.5) { // take 2 images instead if exactly half
                smallestIndex -= 0.01; // guarantee Math.floor so that one image above and below is taken consecutively
                iterations = 2;
            }
            smallestIndex = Math.round(smallestIndex);
            for (let i = 0; i < iterations; i++) {
                nextImage = items[smallestIndex];
                // somehow the ratio naturalHeight/naturalWidth differs from offsetHeight/offsetWidth which the browser will finally use
                // +0.01 -> offsetHeight/offsetWidth internal error (?)
                virtualColumns[smallest] += nextImage.offsetHeight / nextImage.offsetWidth + 0.01;
                virtualColumnsCollector.push([smallest, items[smallestIndex - 1], items[smallestIndex + 1]]);
                items.splice(smallestIndex, 1)
            }
        }
        // get neighboring columns of remaining image
        const colBeforeAfter = [0, nCols - 1];
        const colBeforeAfterSet = [false, false];
        for (let im in virtualColumnsCollector) {
            if (colBeforeAfterSet[0] && colBeforeAfterSet[1]) { break; }
            im = virtualColumnsCollector[im];
            for (let i = 0; i < 2; i++) {
                if (colBeforeAfterSet[i]) { continue; }
                if (im[i + 1] != undefined) {
                    if (im[i + 1].src == items[0].src) {
                        colBeforeAfter[i] = im[0];
                        colBeforeAfterSet[i] = true;
                    }
                }
            }
        }
        // add to smallest neighboring column
        var smallest = null;
        if (colBeforeAfter[0] == colBeforeAfter[1]) {
            smallest = colBeforeAfter[0]
        } else {
            const selected = [virtualColumns[colBeforeAfter[0]]]
            selected.push(virtualColumns[colBeforeAfter[1]]);
            smallest = virtualColumns.indexOf(Math.min(...selected));
        }
        virtualColumns[smallest] += items[0].offsetHeight / items[0].offsetWidth + 0.01; // see above for +0.01

        // determine height of container
        const relativeHeightOptimum = Math.max(...virtualColumns);
        galerie.querySelector(".field__items").style.aspectRatio = nCols + "/" + relativeHeightOptimum.toFixed(2);
        // sometimes the algorithm fails, e.g. if a long image is placed at an unsuitable position
        // can't be set beforehand via CSS as images won't fully load
        galerie.querySelector(".field__items").style.overflowX = "auto";
    });
}

function setEnlargeImage(items) {
    items.forEach((image) => {
        image.addEventListener("click", (e) => {
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
