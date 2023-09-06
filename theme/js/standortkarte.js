window.onload = () => {
    const mapContainer = document.getElementById("map");
    // [top left (x), top left (y), bottom right (x), bottom right (y)]
    const mapDim = [mapContainer.offsetLeft, mapContainer.offsetTop, mapContainer.offsetLeft + mapContainer.offsetWidth, mapContainer.offsetTop + mapContainer.offsetHeight];

    // map is 'deactivated' by default to prevent the mousepointer getting stuck on the map in an attempt to scroll the page
    function activateMap() {
        mapContainer.classList.remove("deactivated");
        document.body.removeEventListener("mousedown", checkActivateMap); // event listener not needed anymore
    }

    function checkActivateMap(e) {
        scrollY, scrollX = document.body.scrollTop, document.body.scrollLeft;
        // checks if user clicked on map (pointer events are disabled by css, so the position is checked)
        if (e.clientX >= mapDim[0] - scrollX && e.clientX <= mapDim[2] - scrollX && e.clientY >= mapDim[1] - scrollY && e.clientY <= mapDim[3] - scrollY) {
            activateMap();
        }
    }

    document.body.addEventListener("mousedown", checkActivateMap);

    const map = L.map('map').setView([52.5670, 13.4950], 14);

    // https://leafletjs.com/reference.html
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const gebaeude_divs = document.querySelectorAll(".site");

    function autoId(sitesBook, index, identifier = "btn") {
        return identifier + (sitesBook[index].latitude * 10000).toString() + (sitesBook[index].longitude * 10000).toString();
    }

    let x = 0;
    // array 'sitesBook' built with Twig, inspect via browser console
    var allMarkers = {};
    while (x < sitesBook.length) {
        var marker = L.marker([sitesBook[x].latitude, sitesBook[x].longitude]).addTo(map);
        marker.on("mousedown", markSite(marker, sitesBook[x], false));
        allMarkers[autoId(sitesBook, x, "marker")] = marker;
        var node = gebaeude_divs[x].getElementsByClassName("field--name-field-adresse")[0];


        var buttonel = document.createElement('button');
        buttonel.setAttribute("id", autoId(sitesBook, x));
        buttonel.innerText = "Auf Karte markieren";
        node.appendChild(buttonel);
        document.getElementById(autoId(sitesBook, x)).addEventListener('click', myFunc, false);;
        document.getElementById(autoId(sitesBook, x)).myParam = sitesBook[x];
        function myFunc(evt) {
            console.log(evt.currentTarget.myParam);
            markSite(allMarkers[autoId([evt.currentTarget.myParam], 0, "marker")], evt.currentTarget.myParam);
        }


        if (navigator.clipboard) {
            var buttoncop = document.createElement('button');
            buttoncop.setAttribute("id", autoId(sitesBook, x, "btncop"));
            buttoncop.innerText = "Adresse kopieren";
            node.appendChild(buttoncop);
            document.getElementById(autoId(sitesBook, x, "btncop")).addEventListener('click', diehard, false);;
            document.getElementById(autoId(sitesBook, x, "btncop")).dieParam = sitesBook[x];
            function diehard(evt) {
                passonto = evt.currentTarget.dieParam;
                console.log(passonto);
                docopy(passonto);
            }
        }
        x++;
    }

    function markSite(marker, site, scrollToMap = true) {
        if (scrollToMap) {
            document.getElementById("map").scrollIntoView();
            activateMap();
        }
        let popupText = "<b>" + site.title +
            "</b><br><p>Route: <a href=https://www.openstreetmap.org/directions?from=&to=" +
            site.latitude + "%2C" + site.longitude + "&route=%3B#map=16/" + site.latitude + "/" +
            site.longitude + ">OSM</a> / <a href='https://www.google.com/maps/dir//" +
            site.latitude + "," + site.longitude + "'>Google Maps</a></p>";
        marker.bindPopup(popupText).openPopup();
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

};
