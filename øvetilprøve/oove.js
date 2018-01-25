unction setup() {
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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.gjest}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}