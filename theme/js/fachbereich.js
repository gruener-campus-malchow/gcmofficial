// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    var galerie = document.getElementsByClassName("field--name-field-bildergalerie")[0];
    var items = galerie.childNodes[3];
    items.childNodes.forEach((node) => {
        if (node.nodeName != "#text") {
            let ratio = node.childNodes[1].offsetWidth / node.childNodes[1].offsetHeight;
            let minwidth = window.innerWidth * 0.17 * ratio;
            let maxwidth = window.innerWidth * 0.25 * ratio;
            node.style.minWidth = parseInt(minwidth) + "px";
            node.style.maxWidth = parseInt(maxwidth) + "px";
            node.childNodes[1].style.width = "100%"; // upscales low-resolution images
            node.addEventListener("click", (e) => {
                var target = e.target;
                if (target.tagName.toLowerCase() == "img") {
                    target = target.parentNode;
                }
                var clone = target.cloneNode(true);
                clone.classList.add("popup");
                clone.addEventListener("click", (e) => {
                    var target = e.target;
                    if (target.tagName.toLowerCase() == "img") {
                        target = target.parentNode;
                    }
                    document.body.removeChild(target);
                });
                document.body.prepend(clone);
            });
        }
    });
});