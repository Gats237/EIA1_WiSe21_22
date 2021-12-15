namespace T91 {
let addToDoButton = document.getElementById("addToDo");
let toDoContainer= document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField")

addToDoButton.addEventListener("click", function() { 
var paragh=document.createElement("p")
toDoContainer.appendChild(paragh);

})

}
}
}
}
}

window.addEventListener("load", function () {
    // Variablendeklaration //
    var eingabe: any = document.querySelector("#eingabe");
    var liste: Element = document.querySelector("#ul");
    var addTask: Element = document.querySelector("#addTask");
    var newCheckIcon: number = document.createElement;
    //New Task
    // tslint:disable-next-line: align
    addTask.addEventListener("click", function neueAufgabe(): void {
        var aufgaben = document.createElement("newli");
        aufgaben.innerHTML = eingabe.value;
        liste.appendChild(aufgaben);
        li.classList.add("far", "fa-trash-alt");
        hakengesetzt.classList.add("far", "fa-circle");
        eingabe.value = "";

        zaehler: number = zaehler + 1;
        document.querySelector("h2").innerHTML = zaehler + " in total";
        //Delete
        trash.addEventListener("click", function ():void {
            todoList.removeChild(todoDiv);
            // -1 ToDo Counter 
            counter--;
            counter();
            var trash = document.createElement("l");
            aufgaben.appendChild(trash);
            trash.classList.add("far", "fa-trash-alt");
        /* Funktion vom Löschen */
            trash.addEventListener("click", function () {
            aufgaben.classList.add("ausgeblendet");
            zaehler = zaehler - 1;
            document.querySelector("h2").innerHTML = zaehler + " in total";
        });
        /* Kreis für Checkbox */
            var hakengesetzt = document.createElement("hg");
            aufgaben.appendChild(hakengesetzt);
            hakengesetzt.classList.add("far", "fa-circle");
        /* Funktion Kreis von Checkbox */
        hakengesetzt.addEventListener("click", function () {
                hakengesetzt.classList.add("ausgeblendet");
            hakengesetzt.classList.remove("ausgeblendet");
        });

        
        // Funktion ohne Haken
            var hakengesetzt: HTMLElement = document.createElement("hg");
            aufgaben.appendChild(hakengesetzt);
            hakengesetzt.classList.add("far", "fa-check-circle", "ausgeblendet");
        
        
        
        // Funktion mit Haken gesetzt
            hakengesetzt.addEventListener("click", function () {
            hakengesetzt.classList.add("ausgeblendet");
            hakengesetzt.classList.remove("ausgeblendet");
        });
    });
});
//# sourceMappingURL=script.js.map