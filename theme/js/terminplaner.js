if (window.innerWidth < window.innerHeight) {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            let today = document.getElementsByClassName("today")[0];
            today.scrollIntoView();
        }, 1000);
    });
}