// ensure that every element has been loaded
document.addEventListener("DOMContentLoaded", () => {
    var enlargeContainers = document.querySelectorAll(enlargeImagesContainerClasses);
    Array.from(enlargeContainers).forEach((container) => {
        Array.from(container.getElementsByTagName("IMG")).forEach((image) => {
            let enlargeBtn = document.createElement("button");
            enlargeBtn.classList.add("btn-enlarge");
            if (image.offsetWidth > parseFloat(getComputedStyle(image).fontSize) * 20) {
                enlargeBtn.innerHTML = '<span class="symbol">fit_screen</span> Bild vergrößern';
            } else {
                enlargeBtn.innerHTML = '<span class="symbol">fit_screen</span>';
            }
            image.parentNode.prepend(enlargeBtn);
            enlargeBtn.addEventListener("click", (e) => {
                var target = e.target;
                if (target.tagName.toLowerCase() == "button") {
                    target = target.parentNode;
                } else if (target.tagName.toLowerCase() == "span") {
                    target = target.parentNode.parentNode;
                }
                var clone = target.cloneNode(true);
                clone.removeChild(clone.firstChild);
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
    });
});
