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

    /*Random*/
   var random: string[] = [samples[0], samples[1], samples[4], samples[6], samples[8]];
   //booleans für die Funktionen//
   var playactive: boolean = false;
   var interval: string;
   var rambeat: number;
  
   //Töne fürs Drumpad
   function playSound(audio: string) {
      var samp: HTMLAudioElement = new Audio (audio);
      samp.play(); }
   
/* Beat*/
   var beat: HTMLAudioElement[] = [new Audio("assets/hihat.mp3"), new Audio ("assets/kick.mp3"), new Audio ("assets/snare.mp3")] ;


   var playBu: HTMLElement = document.querySelector("#play");
   var index: number = 0;
   var schleife: number = 1;


   playBu.addEventListener( "click", function stoppplayWechsel(): void {

   if (document.getElementById("play").classList.contains("fa-play-circle")) {
      document.getElementById("play").classList.remove("fa-play-circle"); }
      else {
      // tslint:disable-next-line: whitespace
      document.getElementById("play").classList.add("fa-stop-circle" ); 
      function playbeat(): void {
       index++;
       if (index == 2) {
             index = 0;
         }
   }

// Remix
      var minbeat: number = 0;
      var maxbeat: number = 8;
      var remixzahl: number = Math.round(Math.random() + (maxbeat - minbeat)) + minbeat;
      console.log(remixzahl);

      function randombeat(): void {
      if (document.getElementById("remixbutton").classList.contains("fas fa-random")) {
         document.getElementById("remixbutton").classList.remove("fas fa-stop"); 
         rambeat= setInterval (randombeat, 350 );      
      } else (
      // tslint:disable-next-line: whitespace
      document.getElementById("play").classList.add("fa-stop-circle" )
      ); }



// tslint:disable-next-line: typedef
      function mixbeat() {
 setInterval(function(): void {
     beat[0].play();
  },         10);
 
 setInterval(function(): void {
     beat[1].play();
  },         50);

 setInterval(function(): void {
     beat[2].play();
  },         40);
 
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
      document.querySelector("#remixbutton").addEventListener("click", function() {randombeat(); }); 

} }) ; }