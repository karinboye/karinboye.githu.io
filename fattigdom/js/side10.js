function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBFlXR5g-t_AnwlYCiUX-Brvo_hikC_ZsE",
        authDomain: "sporring-5a7e4.firebaseapp.com",
        databaseURL: "https://sporring-5a7e4.firebaseio.com",
        projectId: "sporring-5a7e4",
        storageBucket: "sporring-5a7e4.appspot.com",
        messagingSenderId: "362336120886"
      };
    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visDyr);
        }
    });

    function visDyr(e) {
        let valgt = +document.getElementById("kundenr").value;
        let ref = firebase.database().ref("dyr").orderByChild("kundenr").equalTo(valgt);
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `
                    <li>
                    Navn:${dyrene[e].navn} 
                    Situasjon:${dyrene[e].art} 
                    Kjønn:${dyrene[e].kjønn} 
                    Alder:${dyrene[e].alder}
                    </li>`).join("")
                    + `</ol>`;
                divDyr.innerHTML = dyrliste;

            }
        });
    }


    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option value="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}