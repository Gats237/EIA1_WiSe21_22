/*Welt*/
 var Welt=Afr18+Sou18+Nor18+Eur18+Asi18+Aus18;

/* Länder Text Variablen */
var aus = "Australien";
var asi = "Asien";
var nor = "Nord-Amerika";
var eur = "Europa";
var sou = "Süd-Amerika";
var afr = "Afrika";

/*Textbausteine*/
var text11 = "Die Emission von ";
var text12 = " ist ";
var text13 = "kg CO2.";
var text21 = "Relativ zur Gesamtemission der Welt verursacht ";
var text22 = " damit ";
var text23 = "%";
var text31 = "Für ";
var text32 = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text33 = "% verändert.";
var text41 = "2018 im Vergleich zu 2008 sind das ";
var text42 = "kg CO2.";

/*AFRIKA*/
var Afr08=1028;
var Afr18=1235;
var AfrPro = (Afr08 /  Afr18- 1) * 100;
var AfrWelt = (Afr18 / Welt) * 100;
var AfricaAnstiegKG = Afr18 - Afr08;


/*SOUTH AMERICA*/
var Sou08=1132.6;
var Sou18=1261.5;
var SouPro= (Sou08 / Sou18- 1)*100;
var SouWelt = (Sou08 /Welt)*100;
var SouAnstiegkg= Sou18 - Sou08;


/*Australien*/
var Aus08 = 1993;
var Aus18 = 2100.5;
var AustraliaAnstiegProzent = (Aus08 / Aus18- 1) * 100;
var AustraliaWelt = (Aus08 / Welt) * 100;
var AustraliaAnstiegKG = Aus18 - Aus08;

/*NORTH AMERICA*/
var Nor08=6600.4;
var Nor18=6035.6;
var NorAnstiegPro= (Nor08/ Nor18- 1)*100;
var NorWelt = (Aus08 / Welt) * 100;
var NorAnstiegKG = Nor18 - Nor08;

/*ASIA*/
var Asi08=12954.7;
var Asi18=16274.1;
var AsiAnstiegPro= (Asi08 /Asi18- 1)*100;
var AsiWelt = (Asi08/ Welt)* 100;
var AsiAnstiegKg = (Asi18-Asi08);


/*Australia*/
var Australia=1993;
var Australia=2100.5;
var AusAnstiegPro= (Aus08 /Aus18- 1)*100;
var AusWelt = (Aus08/ Welt)* 100;
var AusAnstiegKg = (Aus18-Aus08);

/*EUROPE*/
var Eur08=4965.7;
var Eur18=4209.3;
var EurAnstiegPro= (Eur08 /Eur18- 1)*100;
var EurWelt = (Eur08/ Welt)* 100;
var EurAnstiegKg = (Eur18-Eur08);

console.log("Test");

console.log( text11 + eur + text12 + EurAnstiegKg + text13);
console.log("Test");
console.log(text21 + eur+ text22 + EurWelt + text23);
console.log(text31 + eur + text32 + EurAnstiegKg + text33);
console.log(text41 + EurAnstiegPro+ text42);

console.log(text11 + sou + text12 + SouAnstiegkg + text13);
console.log(text21 + sou + text22 + SouWelt + text23);
console.log(text31 + sou + text32 + SouAnstiegkg + text33);
console.log(text41 + SouPro + text42);

console.log(text11 + aus + text12 + AusAnstiegKg + text13);
console.log(text21 + aus + text22 + AusWelt + text23);
console.log(text31 + aus + text32 + AustraliaAnstiegKG + text33);
console.log(text41 + AusAnstiegKg + text42);

console.log(text11 + afr + text12 + AfricaAnstiegKG + text13);
console.log(text21 + afr + text22 + AfrWelt + text23);
console.log(text31 + afr + text32 + AfrPro + text33);
console.log(text41 + AfricaAnstiegKG+ text42);

console.log(text11 + asi + text12 + AsiAnstiegKg + text13);
console.log(text21 + asi + text22 + AsiWelt + text23);
console.log(text31 + asi + text32 + AsiAnstiegKg + text33);
console.log(text41 + AusAnstiegPro+ text42);

console.log(text11 + nor + text12 + NorAnstiegKG + text13);
console.log(text21 + nor + text22 + NorWelt+ text23);
console.log(text31 + nor + text32 + NorAnstiegKG + text33);
console.log(text41 + NorAnstiegPro+ text42);
//# sourceMappingURL=scriptt5.js.map




