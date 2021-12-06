//Array with all sounds
namespace t8 {
   var samples: string[] = ["assets/kick.mp3",
      "assets/snare.mp3",
      "assets/hihat.mp3",
      "assets/A.mp3",
      "assets/C.mp3",
      "assets/F.mp3",
      "assets/G.mp3",
      "assets/laugh-1.mp3",
      "assets/laugh-2.mp3"];

   /* Beat*/
   var beat: string [] = [ samples[0], samples[2], samples[1], samples[4], samples[3]];
   /*Random*/
   var random: string[] = [samples[0], samples[1], samples[4], samples[6], samples[8]];
   //booleans für die Funktionen//
   var playactive: boolean = false;


   // tslint:disable-next-line: typedef
   document.querySelector(".button1").addEventListener("click", function () { playSound(samples[0]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button2").addEventListener("click", function () { playSound(samples[1]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button3").addEventListener("click", function () { playSound(samples[2]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button4").addEventListener("click", function () { playSound(samples[3]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button5").addEventListener("click", function () { playSound(samples[4]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button6").addEventListener("click", function () { playSound(samples[5]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button7").addEventListener("click", function () { playSound(samples[6]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button8").addEventListener("click", function () { playSound(samples[7]); });
   // tslint:disable-next-line: typedef
   document.querySelector(".button9").addEventListener("click", function () { playSound(samples[8]); });

   document.querySelector("#play").addEventListener("click", function () { playButton(); });

}

   //Töne fürs Drumpad
   function playSound (audio: string): void {
      var samp: HTMLAudioElement = new Audio(audio);
      samp.play(); }

   // tslint:disable-next-line: typedef
   function playButton () { 
       var beat= new Audio ( Audio );
      
       function ( audio: string) {
       beat.loop = true;
            if (document.getElementById("#play").classList.contains("fa-play-circle")) {
                document.getElementById("#play").classList.remove("fa-play-circle");
                document.getElementById("#play").classList.add("fa-stop-circle");
                interval = setInterval(beat, 350);
            }
            else {

   playButton           
                document.getElementById("play").classList.remove("fa-stop-circle");
                document.getElementById("play").classList.add("fa-play-circle");
                clearInterval(interval);
            }
         }
}
