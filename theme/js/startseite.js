var slideimages = document.querySelectorAll("#titelbild .field__item img");
window.addEventListener('scroll', () => {
    let { scrollY } = window;
    slideimages.forEach((slideimage) => {
        slideimage.style.top = 0.5 * scrollY + 'px';
    });
});
