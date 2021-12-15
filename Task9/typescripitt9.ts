
namespace T9 {
   
  window.addEventListener("load", function () {
    let totalnumber: number = 0;
    function addTask(): void {
        event.preventDefault();
        const listenPunkt: HTMLElement = document.createElement("div");
        listenPunkt.classList.add("listenpunkt");
        const textInhalt: HTMLElement = document.createElement("li");
        textInhalt.innerHTML = document.querySelector(".todo").value;
        textInhalt.classList.add("text");
        listenPunkt.appendChild(textInhalt);
        const trashbtn: HTMLElement = document.createElement("button");
        trashbtn.innerHTML = "<b class= 'fas fa-trash'> </b>";
        trashbtn.classList.add("trash");
        listenPunkt.appendChild(trashbtn);
        totalnumber++;


        document.querySelector("h2").innerHTML = totalnumber + " in total";
        const checkedKnopf: HTMLElement = document.createElement("button");
        checkedKnopf.innerHTML = "<b class= 'fas fa-check'> </b>";
        checkedKnopf.classList.add("check");
        listenPunkt.appendChild(checkedKnopf);
        document.querySelector(".liste").appendChild(listenPunkt);
        document.querySelector(".todo").value = "";
    }

    // Delete Funktion
    function delCheckTask() {
        const müll = event.target;
        if (müll.classList [0] === "trash") {
            müll.parentElement.remove();
            totalnumber--;
            document.querySelector("h2").innerHTML = totalnumber + " in total";
        }
        if (müll.classList[0] === "check") {
            müll.classList.toggle("checked");
        }
    }
    document.querySelector(".todo").addEventListener("click", function (): void { addTask(); });
    document.querySelector(".liste").addEventListener("click", function (): void { delCheckTask(); });
});
}