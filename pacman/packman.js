// @ts-check

function setup() {

  
	
	
	// hva de forskjellinge klassene er
	
	// 1 => <div class='vegg'></div>
	// 2 => <div class='peng'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='ghost'></div>
	// 5 => <div class='pacman'></div>
	// map = [ 1, 2, 3 ]
	// map = [ [1,2,3], [1,2,3], [1,2,3] ];

// @ts-ignore
	var pacman = {
		x: 6,
		y: 4
	}


	var map = [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,2,2,2,2,2,1,2,2,2,2,2,1], 
		[1,2,1,1,1,2,1,2,1,1,1,2,1], 
		[1,2,1,2,2,2,2,2,2,2,1,2,1], 
		[1,2,2,2,1,1,5,1,1,2,2,2,1], 
		[1,2,1,2,2,2,2,2,2,2,1,2,1], 
		[1,2,1,1,2,2,1,2,2,1,1,2,1], 
		[1,2,2,2,2,2,1,2,2,2,2,2,1], 
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    
    // elenmentet 
	var el = document.getElementById('verden');
	
	

	// løkker 
	function tegneVerden(){
        el.innerHTML = '';

//  for (≺startverdi≻; ≺betingelse≻; ≺endring≻) {
//         ≺kode som skal gjentas≻;
          
        
        // map.length skjekke hvor lang map (array) er 

		for(var y = 0; y < map.length ; y = y + 1) {

			for(var x = 0; x < map[y].length ; x = x + 1) {		
				if (map[y][x] === 1) {
					el.innerHTML += "<div class='vegg'></div>";
				}
				else if (map[y][x] === 2) {
					el.innerHTML += "<div class='peng'></div>";
				}
				else if (map[y][x] === 3) {
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[y][x] === 4) {
					el.innerHTML += "<div class='ghost'></div>";
				}
				else if (map[y][x] === 5) {
					el.innerHTML += "<div class='pacman'></div>";
				}
			}
            el.innerHTML += "<br>";

            //  else if: hvis det er ikke er sant prøv de andre
            // break 
		}
    }


    
    // løkke nr2, styre pacman
	tegneVerden();
	document.onkeydown = function(event){
		// console.log(event);
        if (event.keyCode === 37){ //  venstre
            
			if ( map[pacman.y][pacman.x-1] !== 1){

            

				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x - 1;
				map[pacman.y][pacman.x] = 5;
                tegneVerden();
                  
          
			}
		}
        else if (event.keyCode === 38){ //  opp
            
			if ( map[pacman.y-1][pacman.x] !== 1){   //ikke gå på veggen, krasj
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y - 1;
				map[pacman.y][pacman.x] = 5;
				tegneVerden();
			}
		}
        else if (event.keyCode === 39){ //  høyre
            
			if ( map[pacman.y][pacman.x+1] !== 1){
				map[pacman.y][pacman.x] = 3;
				pacman.x = pacman.x + 1;
				map[pacman.y][pacman.x] = 5;
				tegneVerden();
			}
		}
        else if (event.keyCode === 40){ //  ned
            
			if ( map[pacman.y+1][pacman.x] !== 1){
				map[pacman.y][pacman.x] = 3;
				pacman.y = pacman.y + 1;
				map[pacman.y][pacman.x] = 5;
				tegneVerden();
			}
		}
        console.log(map)
        
        // hvorfor 37,38, 39 og 40? 
	}


	
	
}