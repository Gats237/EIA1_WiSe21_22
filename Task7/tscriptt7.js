// Array with all sounds
var samples = ['assets/kick.mp3',
    'assets/snare.mp3',
    'assets/hihat.mp3',
    'assets/A.mp3',
    'assets/C.mp3',
    'assets/F.mp3',
    'assets/G.mp3',
    'assets/laugh-1.mp3',
    'assets/laugh-2.mp3'];
function playSound(audio) {
    var samp = new Audio(audio);
    samp.play: ();
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
document.querySelector(".btn").addEventListener("click", mixbeat);
/* Beat*/
var beat = ['assets/hihat.mp3', 'assets/kick.mp3', 'assets/snare.mp3'];
var mix = setInterval(mixbeat, 200);
var index = 0;
function mixbeat() {
    var order = new Audio(beat[index]);
    order.play();
    index += 1;
    if (index > beat.length)
        index = 0, ;
}
//# sourceMappingURL=tscriptt7.js.map