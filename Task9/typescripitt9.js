var T9;
(function (T9) {
    window.addEventListener("load", function () {
        let totalnumber = 0;
        function addTask() {
            event.preventDefault();
            const listenPunkt = document.createElement("div");
            listenPunkt.classList.add("listenpunkt");
            const textInhalt = document.createElement("li");
            textInhalt.innerHTML = document.querySelector(".todo").value;
            textInhalt.classList.add("text");
            listenPunkt.appendChild(textInhalt);
            const trashbtn = document.createElement("button");
            trashbtn.innerHTML = "<b class= 'fas fa-trash'> </b>";
            trashbtn.classList.add("trash");
            listenPunkt.appendChild(trashbtn);
            totalnumber++;
            document.querySelector("h2").innerHTML = totalnumber + " in total";
            const checkedKnopf = document.createElement("button");
            checkedKnopf.innerHTML = "<b class= 'fas fa-check'> </b>";
            checkedKnopf.classList.add("check");
            listenPunkt.appendChild(checkedKnopf);
            document.querySelector(".liste").appendChild(listenPunkt);
            document.querySelector(".todo").value = "";
        }
        // Delete Funktion
        function delCheckTask() {
            const müll = event.target;
            if (müll.classList[0] === "trash") {
                müll.parentElement.remove();
                totalnumber--;
                document.querySelector("h2").innerHTML = totalnumber + " in total";
            }
            if (müll.classList[0] === "check") {
                müll.classList.toggle("checked");
            }
        }
        document.querySelector(".todo").addEventListener("click", function () { addTask(); });
        document.querySelector(".liste").addEventListener("click", function () { delCheckTask(); });
    });
})(T9 || (T9 = {}));
//# sourceMappingURL=typescripitt9.js.map