window.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("map");
    // [top left (x), top left (y), bottom right (x), bottom right (y)]
    const mapDim = [mapContainer.offsetLeft, mapContainer.offsetTop, mapContainer.offsetLeft + mapContainer.offsetWidth, mapContainer.offsetTop + mapContainer.offsetHeight];

    const map = L.map('map');

    // map is 'deactivated' by default to prevent the mousepointer getting stuck on the map in an attempt to scroll the page
    function activateMap() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        mapContainer.classList.remove("deactivated");
        document.body.removeEventListener("mousedown", checkActivateMap); // event listener not needed anymor
        map.setView([52.571, 13.488], 16); // center, zoom
    }

    function checkActivateMap(e) {
        scrollY, scrollX = document.body.scrollTop, document.body.scrollLeft;
        // checks if user clicked on map (pointer events are disabled by css, so the position is checked)
        if (e.clientX >= mapDim[0] - scrollX && e.clientX <= mapDim[2] - scrollX && e.clientY >= mapDim[1] - scrollY && e.clientY <= mapDim[3] - scrollY) {
            activateMap();
        }
    }

    document.body.addEventListener("mousedown", checkActivateMap);

    // https://leafletjs.com/reference.html

    const gebaeude_divs = document.querySelectorAll(".site");

    function autoId(sitesBook, index, identifier = "btn") {
        return identifier + (sitesBook[index].latitude * 10000).toString() + (sitesBook[index].longitude * 10000).toString();
    }

    let x = sitesBook.length - 1;
    // array 'sitesBook' built with Twig, inspect via browser console
    var allMarkers = {};
    function myFunc(evt) {
        console.log(evt.currentTarget.myParam);
        markSite(allMarkers[autoId([evt.currentTarget.myParam], 0, "marker")], evt.currentTarget.myParam);
    }
    while (x >= 0) {
        var marker = L.marker([sitesBook[x].latitude, sitesBook[x].longitude]).addTo(map);
        marker.on("mousedown", markSite.bind(null, marker, sitesBook[x], false));
        allMarkers[autoId(sitesBook, x, "marker")] = marker;
        var node = gebaeude_divs[x].getElementsByClassName("field--name-field-adresse")[0];
        var btnCont = document.createElement("div");
        btnCont.style = "flex-direction: row; flex-wrap: wrap; justify-content: left; column-gap: 0.5em;"
        node.appendChild(btnCont);


        var buttonel = document.createElement('button');
        buttonel.setAttribute("id", autoId(sitesBook, x));
        buttonel.innerText = "Auf Karte markieren";
        btnCont.appendChild(buttonel);
        document.getElementById(autoId(sitesBook, x)).addEventListener('click', myFunc, false);;
        document.getElementById(autoId(sitesBook, x)).myParam = sitesBook[x];


        if (navigator.clipboard) {
            var buttoncop = document.createElement('button');
            buttoncop.setAttribute("id", autoId(sitesBook, x, "btncop"));
            buttoncop.innerText = "Adresse kopieren";
            btnCont.appendChild(buttoncop);
            document.getElementById(autoId(sitesBook, x, "btncop")).addEventListener('click', diehard, false);;
            document.getElementById(autoId(sitesBook, x, "btncop")).dieParam = sitesBook[x];
            function diehard(evt) {
                passonto = evt.currentTarget.dieParam;
                console.log(passonto);
                docopy(passonto);
            }
        }
        x--;
    }

    function markSite(marker, site, scrollToMap = true) {
        if (scrollToMap) {
            activateMap();
            document.getElementById("map").scrollIntoView();
        }
        let popupText = "<b>" + site.title +
            "</b><br><p>Route: <a href=https://www.openstreetmap.org/directions?from=&to=" +
            site.latitude + "%2C" + site.longitude + "&route=%3B#map=16/" + site.latitude + "/" +
            site.longitude + ">OSM</a> / <a href='https://www.google.com/maps/dir//" +
            site.latitude + "," + site.longitude + "'>Google Maps</a></p>";
        map.setView([site.latitude, site.longitude], 17); // center, zoom
        const popup = marker.bindPopup(popupText);
        if (scrollToMap) {
            popup.openPopup();
        }
    }

    function docopy(gebaeude_forcop) {
        console.log(gebaeude_forcop);
        var copyText = gebaeude_forcop["address"];
        navigator.clipboard.writeText(copyText).then(
            () => {
                // successful
                alert("Adresse " + copyText + " kopiert.");
            },
            () => {
                // failed
                alert("Die Adresse konnte nicht kopiert werden.");
            }
        );
    }

});
