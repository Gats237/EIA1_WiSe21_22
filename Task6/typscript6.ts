/*Welt*/
var Welt=Afr18+Sou18+Nor18+Eur18+Asi18+Aus18;

/* Länder Text Variablen */
var aus: string= "Australien";
var asi: string= "Asien";
var nor: string="Nord-Amerika";
var eur: string= "Europa";
var sou: string="Süd-Amerika";
var afr: string="Afrika";

/*AFRIKA*/
var Afr08: number=1028;
var Afr18: number=1235;


/*SOUTH AMERICA*/
var Sou08: number=1132.6;
var Sou18: number=1261.5;

/*Australien*/
var Aus08: number= 1993;
var Aus18: number = 2100.5;

/*NORTH AMERICA*/
var Nor08: number=6600.4;
var Nor18: number=6035.6;

/*ASIA*/
var Asi08: number= 12954.7;
var Asi18: number=16274.1;

/*EUROPE*/
var Eur08: number=4965.7;
var Eur18: number=4209.3;

window.addEventListener("load",function(){

function Continent(co, co08,co18) {
    document.querySelector("#titelRegion").innerHTML =co;
    document.querySelector(".absoluteEmission").innerHTML = co18.toFixed(1) + "%";
    document.querySelector(".ContoWorld").innerHTML = (co18/Welt*100) .toFixed(1) + "%";
    document.querySelector(".growth").innerHTML = ((co18/co08-1)*100).toFixed(1);
    document.querySelector("#region").innerHTML = co;
    document.getElementById("chart").setAttribute("style", "height:"+ (co18/Welt*100));
}
document.querySelector(".europe").addEventListener("click", function(){Continent(eur, Eur08, Eur18);});
document.querySelector(".northamerica").addEventListener("click", function(){Continent(nor, Nor08, Nor18);});
document.querySelector(".southamerica").addEventListener("click", function(){Continent(sou, Sou08, Sou18);});
document.querySelector(".africa").addEventListener("click", function(){Continent(afr, Afr08, Afr18);});
document.querySelector(".asia").addEventListener("click", function(){Continent(asi, Asi08, Asi18);});
document.querySelector(".australia").addEventListener("click", function(){Continent(aus, Aus08,Aus18);});
})
