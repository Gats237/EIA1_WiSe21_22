/*Welt*/
var Welt = Afr18 + Sou18 + Nor18 + Eur18 + Asi18 + Aus18;
/* Länder Text Variablen */
var aus = "Australien";
var asi = "Asien";
var nor = "Nord-Amerika";
var eur = "Europa";
var sou = "Süd-Amerika";
var afr = "Afrika";
/*AFRIKA*/
var Afr08 = 1028;
var Afr18 = 1235;
/*SOUTH AMERICA*/
var Sou08 = 1132.6;
var Sou18 = 1261.5;
/*Australien*/
var Aus08 = 1993;
var Aus18 = 2100.5;
/*NORTH AMERICA*/
var Nor08 = 6600.4;
var Nor18 = 6035.6;
/*ASIA*/
var Asi08 = 12954.7;
var Asi18 = 16274.1;
/*EUROPE*/
var Eur08 = 4965.7;
var Eur18 = 4209.3;
{
    document.querySelector(".europe").addEventListener("click", function () { Continent(eur, Eur08, Eur18); });
    document.querySelector(".northamerica").addEventListener("click", function () { Continent(nor, Nor08, Nor18); });
    document.querySelector(".southamerica").addEventListener("click", function () { Continent(sou, Sou08, Sou18); });
    document.querySelector(".africa").addEventListener("click", function () { Continent(afr, Afr08, Afr18); });
    document.querySelector(".asia").addEventListener("click", function () { Continent(asi, Asi08, Asi18); });
    document.querySelector(".australia").addEventListener("click", function () { Continent(aus, Aus08, Aus18); });
    function Continent(co, co08, co18) {
        document.querySelector("#titleRegion").innerHTML = co;
        document.querySelector(".absoluteEmission").innerHTML = co18.toFixed(1);
        document.querySelector(".ContoWorld").innerHTML = ((co18 / Welt) * 100).toFixed(1) + "%";
        document.querySelector(".growth").innerHTML = ((co18 / co08) * 100).toFixed(1) + "%";
        document.querySelector(".emission").innerHTML = ((co18 / co08 - 1) * 100).toFixed(1);
        document.querySelector("#region").innerHTML = co;
        document.getElementById("#chart").setAttribute("style", "height:" + (co18 / Welt) * 100 + "%");
    }
}
;
//# sourceMappingURL=typscript6.js.map
//# sourceMappingURL=typscript6.js.map