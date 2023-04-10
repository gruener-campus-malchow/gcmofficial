window.onload = () => {

    const map = L.map('map').setView([52.5670, 13.4950], 14);
    const gebaeude_divs = document.querySelectorAll(".site");
    const gebaeude_sort = ["HG", "FG1", "FG2", "FG3", "TH4", "SpH"];
    var FG1 = [52.56992, 13.49212, "Fontane Gebäude 1"];
    var FG2 = [52.56921, 13.49181, "Fontane Gebäude 2"];
    var FG3 = [52.56872, 13.49251, "Fontane Gebäude 3"];
    var HG = [52.57212, 13.48466, "Hauptgebäude"];
    var SpH = [52.55679, 13.48977, "Sportplatz Hansastr."];
    var TH4 = [52.57204, 13.50318, "Turnhalle FG4"];

    var markerFG1 = L.marker([FG1[0], FG1[1]]).addTo(map);
    var markerFG2 = L.marker([FG2[0], FG2[1]]).addTo(map);
    var markerFG3 = L.marker([FG3[0], FG3[1]]).addTo(map);
    var markerHG = L.marker([HG[0], HG[1]],{title: HG[2]}).addTo(map);
    var markerSpH = L.marker([SpH[0], SpH[1]]).addTo(map);
    var markerTH4 = L.marker([TH4[0], TH4[1]]).addTo(map);

    for (let i = 0; i < gebaeude_divs.length; i++) {
        var node = gebaeude_divs[i].getElementsByTagName("div")[2];
        var buttonel = document.createElement('button');
        var buttoncop = document.createElement('button');
        buttonel.setAttribute("id", "btn" + gebaeude_sort[i]);
        buttoncop.setAttribute("id", "btncop" + gebaeude_sort[i]);
        buttonel.innerText = "Auf Karte markieren";
        buttoncop.innerText = "Adresse kopieren";
        node.appendChild(buttonel);
        node.appendChild(buttoncop);
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
        }
        let popupText = "<b>" + site[2] +
            "</b><br><p>Route: <a href=https://www.openstreetmap.org/directions?from=&to=" +
            site[0] + "%2C" + site[1] + "&route=%3B#map=16/" + site[0] + "/" +
            site[1] + ">OSM</a> / <a href='https://www.google.com/maps/dir//" +
            site[0] + "," + site[1] + "'>Google Maps</a></p>";
        marker.bindPopup(popupText).openPopup();
    }

    function docopy(gebaeude_forcop) {
        // down below is experimental, not the way its supposed to be later on
        var copyText = gebaeude_forcop[2];
        navigator.clipboard.writeText(copyText).then(
            () => {
                // successful
                alert("Adresse " + gebaeude_forcop[2] + " kopiert.");
            },
            () => {
                // failed
                alert("Die Adresse konnte nicht kopiert werden.");
            }
        );
    }

    btnFG1.onclick = () => {
        markSite(markerFG1, FG1);
    };
    btnFG2.onclick = () => {
        markSite(markerFG2, FG2);
    };
    btnFG3.onclick = () => {
        markSite(markerFG3, FG3);
    };
    btnHG.onclick = () => {
        markSite(markerHG, HG);
    };
    btnSpH.onclick = () => {
        markSite(markerSpH, SpH);
    };
    btnTH4.onclick = () => {
        markSite(markerTH4, TH4);
    };
    btncopFG1.onclick = () => {
        docopy(FGI);
    };
    btncopFG2.onclick = () => {
        docopy(FG2);
    };
    btncopFG3.onclick = () => {
        docopy(FG3);
    };
    btncopHG.onclick = () => {
        docopy(HG);
    };
    btncopSpH.onclick = () => {
        docopy(SpH);
    };
    btncopTH4.onclick = () => {
        docopy(TH4);
    };

    markerFG1.on("mousedown", markSite(markerFG1, FG1, false));
    markerFG2.on("mousedown", markSite(markerFG2, FG2, false));
    markerFG3.on("mousedown", markSite(markerFG3, FG3, false));
    markerHG.on("mousedown", markSite(markerHG, HG, false));
    markerSpH.on("mousedown", markSite(markerSpH, SpH, false));
    markerTH4.on("mousedown", markSite(markerTH4, TH4, false));

    // https://leafletjs.com/reference.html
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

};
