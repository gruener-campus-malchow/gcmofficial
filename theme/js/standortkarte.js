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
    const gebaeude_sort = ["HG", "FG1", "FG2", "FG3", "TH4", "SpH"];

    let x = 0;
    // array 'sitesBook' built with Twig, inspect via browser console
    while (x < sitesBook.length) {
        var marker = L.marker([sitesBook[x].latitude, sitesBook[x].longitude]).addTo(map);
        marker.on("mousedown", markSite(marker, sitesBook[x], false));
        if (x>3) {
            var node = gebaeude_divs[x].getElementsByTagName("div")[2];
        } else {
            var node = gebaeude_divs[x].getElementsByTagName("div")[4];
        }


        var buttonel = document.createElement('button');
        buttonel.setAttribute("id", "btn" + gebaeude_sort[x]);
        buttonel.innerText = "Auf Karte markieren";
        node.appendChild(buttonel);
        document.getElementById("btn" + gebaeude_sort[x]).addEventListener('click', myFunc, false);;
        document.getElementById("btn" + gebaeude_sort[x]).myParam = sitesBook[x];
        function myFunc(evt)
        {
            console.log(evt.currentTarget.myParam);
            markSite(L.marker([evt.currentTarget.myParam.latitude, evt.currentTarget.myParam.longitude]).addTo(map), evt.currentTarget.myParam);
        }


        if(navigator.clipboard){
            var buttoncop = document.createElement('button');
            buttoncop.setAttribute("id", "btncop" + gebaeude_sort[x]);
            buttoncop.innerText = "Adresse kopieren";
            node.appendChild(buttoncop);
            document.getElementById("btncop" + gebaeude_sort[x]).addEventListener('click', diehard, false);;
            document.getElementById("btncop" + gebaeude_sort[x]).dieParam = sitesBook[x];
            function diehard(evt)
            {
                console.log(evt.currentTarget.dieParam);
                docopy(sitesBook[evt.currentTarget.dieParam]);
            }
        }
        x++;
    }

    let btnFG1 = document.getElementById("btnFG1");
    let btnFG2 = document.getElementById("btnFG2");
    let btnFG3 = document.getElementById("btnFG3");
    let btnHG = document.getElementById("btnHG");
    let btnSpH = document.getElementById("btnSpH");
    let btnTH4 = document.getElementById("btnTH4");
    let btncopFG1 = document.getElementById("btncopFG1");
    let btncopFG2 = document.getElementById("btncopFG2");
    let btncopFG3 = document.getElementById("btncopFG3");
    let btncopHG = document.getElementById("btncopHG");
    let btncopSpH = document.getElementById("btncopSpH");
    let btncopTH4 = document.getElementById("btncopTH4");

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
