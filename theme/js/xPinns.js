// belibig viele mappins hinzufügen



function AddPinns(listeDerPinns){

    var i = 0;
    listeDerPinns =  ;
    var anzahlPinns = listeDerPinns.length;

    while (i > antahlPinns){ // get alle auf der seite hinterlegten pinns durch und setzt diese
        iInString = i.toString(i);

        var site = document.getElementsByClassName("site")[i]; //

        var btn = site.getElementsByTagName("button")[i];// sucht sich den butten welcher

        var name = site.getElementsByClassName("field--name-field-location-title")[i].innerText;

        var noscr = site.getElementsByTagName("noscript")[i];

        var helper = document.createElement("div" + iInString);

        helper.innerHTML = noscr.innerText;

        var long = helper.getElementsByClassName("field--name-field-longitude")[i].getElementsByClassName("field__item")[i].attributes.content;

        long.value;

        lat.value;

        i++;
    }
}
