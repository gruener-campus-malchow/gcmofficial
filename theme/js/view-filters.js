document.addEventListener("DOMContentLoaded", () => {
    let allFilters = document.getElementsByClassName("view-filters");
    if (allFilters.length > 0) {
        let filters = allFilters[0];
        let form = filters.getElementsByTagName("form")[0];
        if (form.querySelectorAll("input, select").length > 3) {
            form.style.display = "none";
            let collapse = document.createElement("button");
            collapse.innerText = "Filter anzeigen";
            filters.prepend(collapse);
            collapse.onclick = function () {
                if (form.style.display == "none") {
                    form.style.display = "block";
                    collapse.innerText = "Filter verstecken";
                } else {
                    form.style.display = "none";
                    collapse.innerText = "Filter anzeigen";
                }
            }
        }
    }
});