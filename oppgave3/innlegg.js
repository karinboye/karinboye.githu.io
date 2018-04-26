function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDdO9oFI9_Q0KZVz8vQTNNy9pE4JZqVTTc",
        authDomain: "webchat-e3a25.firebaseapp.com",
        databaseURL: "https://webchat-e3a25.firebaseio.com",
        projectId: "webchat-e3a25",
        storageBucket: "webchat-e3a25.appspot.com",
        messagingSenderId: "692624476874"
      };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("innlegg");

    function visKunder(snapshot) {
        let innleggnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Innlegg nr ${innleggnr}</h4>
            <ul>
             <li> Medlem nr: ${info.medlemnr} 
             
             <li>forumnr: ${info.forumnr}
           
             <li>melding: ${info.melding}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}