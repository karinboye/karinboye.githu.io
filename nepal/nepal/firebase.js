function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDMvt-gptThwRBG7a9e3d7rM1fmRw8i1vM",
        authDomain: "hotell-1639a.firebaseapp.com",
        databaseURL: "https://hotell-1639a.firebaseio.com",
        projectId: "hotell-1639a",
        storageBucket: "hotell-1639a.appspot.com",
        messagingSenderId: "924928668020"
      };
      firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("gjest");

    function visLand(snapshot) {
        let gjestnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${gjestnr}</h4>
            <ul>
             <li>Adresse ${info.adresse}
             <li> Alder  ${info.alder} 
             <li> Navn   ${info.navn}
             </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}