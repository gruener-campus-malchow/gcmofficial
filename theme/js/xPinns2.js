


function outputPinns(){

    var alleGebaeude = [];
    var i = 0;
    //var anzahlPinns = listeDerPinns.leangth;

    while (i < 5){
        var iInString = toString(i);
        var dev = "dev";
        //var createdElement = dev.contact(iInString);
        var dev2 = "dev" + "1";
        var site = document.getElementsByClassName("site")[i]; //
        var btn = site.getElementsByTagName("button")[0];// sucht sich den butten welcher die Koordinaten hat
        var nameGebaeude = site.getElementsByClassName("field--name-field-location-title")[0].innerText;// nimmt sich das Element in welchem das Element ist wo die Koordinaten drine sind
        var noscr = site.getElementsByTagName("noscript")[0]; //nimmt sich das Element wo die koordinaten in plain text sind
        var helper = document.createElement(dev2);
        helper.innerHTML = noscr.innerText;
        var long = helper.getElementsByClassName("field--name-field-latitude")[0].getElementsByClassName("field__item")[0].attributes.content; // nimmt sich den conntent welcher innerhalb der Elemente befinden bis zu dem int
        var lat = helper.getElementsByClassName("field--name-field-longitude")[0].getElementsByClassName("field__item")[0].attributes.content; // nimmt sich den conntent welcher innerhalb der Elemente befinden bis zu dem int

        var Gebaeude = [{nameGebaeude: nameGebaeude} ,{longitude: long}, {latitude: lat}];
        alleGebaeude.push(Gebaeude);

        console.log(nameGebaeude);
        console.log(long);
        console.log(lat);
        i = i + 1;
    }
    return alleGebaeude;


