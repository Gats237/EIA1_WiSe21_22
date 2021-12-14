window.addEventListener("load", function () {
    // Variablendeklaration //
    var eingabe = document.querySelector("#eingabe");
    var liste = document.querySelector("#ul");
    var addTask = document.querySelector("#addTask");
    var counter = 0;
    //New Task
    // tslint:disable-next-line: align
    addTask.addEventListener("click", function neueAufgabe() {
        var aufgaben = document.createElement("li");
        aufgaben.innerHTML = eingabe.value;
        liste.appendChild(aufgaben);
        trash.classList.add("far", "fa-trash-alt");
        hakengesetzt.classList.add("far", "fa-circle");
        eingabe.value = "";
        zaehler: number = zaehler + 1;
        document.querySelector("h2").innerHTML = zaehler + " in total";
        //Delete
        trash.addEventListener("click", function () {
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
            var hakengesetzt = document.createElement("hg");
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
});
//# sourceMappingURL=script.js.map
//# sourceMappingURL=typescripitt9.js.map