// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(changeImageLayout, 50);
});

function changeImageLayout() {
    var galerie = document.getElementsByClassName("field--name-field-bildergalerie")[0];
    var items = galerie.childNodes[3];
    items.childNodes.forEach((node) => {
        if (node.nodeName != "#text") {
            let ratio = node.childNodes[2].naturalWidth / node.childNodes[2].naturalHeight;
            let minwidth = window.innerWidth * 0.17 * ratio;
            let maxwidth = window.innerWidth * 0.25 * ratio;
            node.style.minWidth = parseInt(minwidth) + "px";
            node.style.maxWidth = parseInt(maxwidth) + "px";
            node.childNodes[2].style.width = "100%"; // upscales low-resolution images
        }
    });
}
