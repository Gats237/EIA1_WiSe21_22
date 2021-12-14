//Array with all sounds
var t8;
(function (t8) {
    var ton1 = new Audio("assets/kick.mp3");
    var ton2 = new Audio("assets/snare.mp3");
    var ton3 = new Audio("assets/hihat.mp3");
    var ton4 = new Audio("assets/A.mp3");
    var ton5 = new Audio("assets/C.mp3");
    var ton6 = new Audio("assets/F.mp3");
    var ton7 = new Audio("assets/G.mp3");
    var ton8 = new Audio("assets/laugh-1.mp3");
    var ton9 = new Audio("assets/laugh-2.mp3");
    var samples = ["assets/kick.mp3",
        "assets/snare.mp3",
        "assets/hihat.mp3",
        "assets/A.mp3",
        "assets/C.mp3",
        "assets/F.mp3",
        "assets/G.mp3",
        "assets/laugh-1.mp3",
        "assets/laugh-2.mp3"];
    // tslint:disable-next-line: align
    var beat = [ton1, ton3, ton7];
    /*Random*/
    var tbeat = [samples[0], samples[1], samples[4], samples[6], samples[8]];
    //booleans für die Funktionen//
    var playactive = false;
    var interval;
    var rambeat;
    var index = 0;
    var playBu = document.querySelector("#play");
    //Töne fürs Drumpad
    function playSound(audio) {
        var samp = new Audio(audio);
        samp.play();
    }
    /* Beat*/
    playBu.addEventListener("click", function stoppplayWechsel() {
        if (document.getElementById("play").classList.contains("fa-play-circle")) {
            document.getElementById("play").classList.remove("fa-play-circle");
            beat = setInterval(beat, 300);
        }
        else {
            // tslint:disable-next-line: whitespace
            document.getElementById("play").classList.add("fa-stop-circle");
            function tonbeat() {
                playSound(random[index]);
                index++;
                if (index == 2) {
                    index = 0;
                    // Remix
                    var minbeat = 0;
                    var maxbeat = 8;
                    var remixzahl = Math.round(Math.random() + (maxbeat - minbeat)) + minbeat;
                    console.log(remixzahl);
                    function randombeat() {
                        if (document.getElementById("remixbutton").classList.contains("fas fa-random")) {
                            document.getElementById("remixbutton").classList.remove("fas fa-stop");
                            rambeat = setInterval(randombeat, 350);
                        }
                        else
                            (
                            // tslint:disable-next-line: whitespace
                            document.getElementById("play").classList.add("fa-stop-circle"));
                    }
                    // tslint:disable-next-line: typedef
                    function mixbeat() {
                        setInterval(function () {
                            beat[0].play();
                        }, 10);
                        setInterval(function () {
                            beat[1].play();
                        }, 50);
                        setInterval(function () {
                            beat[2].play();
                        }, 40);
                    }
                    document.querySelector(".button1").addEventListener("click", function () { playSound(samples[0]); });
                    document.querySelector(".button2").addEventListener("click", function () { playSound(samples[1]); });
                    document.querySelector(".button3").addEventListener("click", function () { playSound(samples[2]); });
                    document.querySelector(".button4").addEventListener("click", function () { playSound(samples[3]); });
                    document.querySelector(".button5").addEventListener("click", function () { playSound(samples[4]); });
                    document.querySelector(".button6").addEventListener("click", function () { playSound(samples[5]); });
                    document.querySelector(".button7").addEventListener("click", function () { playSound(samples[6]); });
                    document.querySelector(".button8").addEventListener("click", function () { playSound(samples[7]); });
                    document.querySelector(".button9").addEventListener("click", function () { playSound(samples[8]); });
                    document.querySelector("#play").addEventListener("click", function () { mixbeat(); });
                    document.querySelector("#remixbutton").addEventListener("click", function () { randombeat(); });
                }
            }
        }
        ;
    });
})(t8 || (t8 = {}));
//# sourceMappingURL=tscript8.js.map