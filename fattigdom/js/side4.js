function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC_jPbTKT17XCJFPsZ3TnOuNzDuR9wLovo",
        authDomain: "fattigdom-c62d1.firebaseapp.com",
        databaseURL: "https://fattigdom-c62d1.firebaseio.com",
        projectId: "fattigdom-c62d1",
        storageBucket: "fattigdom-c62d1.appspot.com",
        messagingSenderId: "607883049995"
      };
      firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");
    let divListe = document.getElementById("liste");
    let divListe2 = document.getElementById("liste2");

    let ref1 = firebase.database().ref("jegvilhjelpe/jegvilgi/engangsbelop");
    let ref2 = firebase.database().ref("jegvilhjelpe/jegvilgi/montligbelop");

    ref1.once("value").then(function (snapshot) {
        let belopene = snapshot.val();
        if (belopene) {
            for (belop of belopene) {
                divListe.innerHTML += '<button>' + belop + '</button>';
            }
        }
    });

    ref2.once("value").then(function (snapshot) {
        let belopene = snapshot.val();
        if (belopene) {
            for (belop of belopene) {
                divListe2.innerHTML += '<button>' + belop + '</button>';
            }
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
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("")
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


