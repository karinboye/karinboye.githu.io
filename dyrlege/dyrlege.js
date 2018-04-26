function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCMr2lx29nTbLsw5xemLwQ_qD2DVK3zMwg",
        authDomain: "boyesside.firebaseapp.com",
        databaseURL: "https://boyesside.firebaseio.com",
        projectId: "boyesside",
        storageBucket: "boyesside.appspot.com",
        messagingSenderId: "121545056803"
      };
      firebase.initializeApp(config);
    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}