// Array with all sounds
var samples : string [] = ['assets/kick.mp3',
'assets/snare.mp3',
'assets/hihat.mp3',
'assets/A.mp3',
'assets/C.mp3',
'assets/F.mp3',
'assets/G.mp3',
'assets/laugh-1.mp3',
'assets/laugh-2.mp3'];


function playSound(audio: string) {
var samp: HTMLAudioElement = new Audio (audio);
samp.play();}

document.querySelector(".button1").addEventListener("click", function(){playSound(samples[0] ); });
document.querySelector(".button2").addEventListener("click", function(){playSound(samples[1] ); });
document.querySelector(".button3").addEventListener("click", function(){playSound(samples[2] ); });
document.querySelector(".button4").addEventListener("click", function(){playSound(samples[3] ); });
document.querySelector(".button5").addEventListener("click", function(){playSound(samples[4] ); });
document.querySelector(".button6").addEventListener("click", function(){playSound(samples[5] ); });
document.querySelector(".button7").addEventListener("click", function(){playSound(samples[6] ); });
document.querySelector(".button8").addEventListener("click", function(){playSound(samples[7] ); });
document.querySelector(".button9").addEventListener("click", function(){playSound(samples[8] ); });
document.querySelector(".container").addEventListener("click",  mixbeat );


/* Beat*/
var beat: HTMLAudioElement[] = [new Audio('assets/hihat.mp3'), new Audio ('assets/kick.mp3'),new Audio ('assets/snare.mp3')];

function mixbeat(){
    setInterval(function() {
        beat[0].play();
     }, 300);
    
     setInterval(function() {
        beat[1].play();
     }, 500);

     setInterval(function() {
        beat[2].play();
     }, 700);
    
    }
