// @ts-check

function setup() {



    // array 

    // 1 = vegg, 2 = peng, 3 = bakgrunn, 4 = pacman


    var map = [

         // x = venstre til høyre
        // y = topp til bunn
       

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 1, 4, 1, 1, 2, 2, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ]

    //forteller hvor pacman er 
    // bruker denne for hver gang vi beveger pacman
    // - for å finne ut hvor han er

    var pacman = {
        x: 6,
        y: 4
    }

   

    // lagd brettet nå men tregner å putte brettet inni "verden"

    //lager en funksjon kalt  (en funksjon som løper hver gang jeg påkaller den)


    function tegneVerden() {
        // passer på at hver gang vi kjører spillet er "verden" tom, 
        // hvis ikke kan vi få mange verdener 


       document.getElementById('verden').innerHTML = ""; 

       

        // lager for-løkker inni funksjonen 
        // den første løkken må gå igjennom map array som har 9 forskjellige arrays inn seg og
        //  når løkken har løpt igjennom alle nummerene, da må vi gjøre det nedover



        //for (≺startverdi≻; ≺betingelse≻; ≺endring≻) {
        //    ≺kode som skal gjentas≻;

        // <startverdi≻ : i=1 gir startverdi til løkketelleren
        // ≺betingelse≻ : i≺11 så lenge som denne betingelsen er sann skal løkka fortsette.
        // map.length skjekke hvor lang map (array) er 
        // ≺endring≻ : i+=1 for hver gang løkka kjøres skal verdien i i økes med 1.



        for (var y = 0; y < map.length; y = y + 1) { // for løkker
            console.log(map[y])

            // map.length sjekker hvor lang array er (13 elementer lang)
            // det vil si at den må våre fra 0-12 for at løkka ska fortsette
            for (var x = 0; x < map[y].length; x = x + 1) {
                console.log(map[y][x])
                // bygger brettet i console 


                // hvis map passer med y av x value matcher value av 1, 
                // da vet vi at vi må legge til en vegg 

                if (map[y][x] === 1) {
                    // tar alle elementene jeg bruker her av navnet på ID,
                    // faktiske elementet/grunnstoffet av div id = "verden"
                    // += legger til i 'verden' og jeg legger til en string 
                    // stringen er klassen 'vegg'

                    document.getElementById('verden').innerHTML += "<div class='vegg'></div> ";
                    // tegner veggene 
                }

                // hvis ikke if går da går denne

                else if (map[y][x] === 2) {
                    document.getElementById('verden').innerHTML += "<div class='peng'></div> ";

                }


                else if (map[y][x] === 3) {
                    document.getElementById('verden').innerHTML += "<div class='vegg'></div> ";

                }

                else if (map[y][x] === 4) {
                    document.getElementById('verden').innerHTML += "<div class='pacman'></div> ";

                }
             



            }


            // nå trenger vi br (break) for at det skal se bra ut 

            document.getElementById('verden').innerHTML += "<br>";
            // nå ser det ut som det map sier 
            // nå er spillet teget ferdig

        }



        
    }
       // bevege pacman

// hver gang vi trykker på en knapp vil den runne koden min
    document.onkeydown = function(e){
        console.log(e.keyCode);

if (e.keyCode === 37 ) {//hvis e.keyCode(tastaturet trykker på 37,
   // da vil den gå til venstre)

   // hvis vi vil flytte på pacman nå må jeg tilkalle map 
   // hvis jeg kaller på map og sjekker posisjonen 
   // y = toppen til bunnen
   // x = venstre til høyre 
   tegneVerden();



    }
   
   else if (e.keyCode === 38 ){   // opp

    map[pacman.y][pacman.x] = 3;
    pacman.y = pacman.y - 1; // pacman flytter seg opp  en gang
    map[pacman.y] [pacman.x] = 5;


    
    tegneVerden();
   }

   else if (e.keyCode === 39 ){  //høyre
    tegneVerden();   
}

else if (e.keyCode === 40 ){   // ned  
   
    // opp og ned er like, men en forskjell + 1 isten for - 1

    map[pacman.y][pacman.x] = 3;
    pacman.y = pacman.y + 1; // pacman flytter seg opp  en gang
    map[pacman.y] [pacman.x] = 5;

     // nå går den ned


    
    tegneVerden();
       
}


       

    }
 
    // hver gang vi beveger han, lager vi en "ny verden"

    tegneVerden();
 
 

}