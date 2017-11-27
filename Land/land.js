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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
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