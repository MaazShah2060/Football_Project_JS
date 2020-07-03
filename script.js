// main players class

class player {
    constructor(name,country,club,goals,Foot,speed,shoot,passing,extra,img){
        this.name = name;
        this.country = country;
        this.club = club;
        this.goals = goals;
        this.Foot = Foot;
        this.speed = speed;
        this.shoot = shoot;
        this.passing = passing;
        this.extra = extra;
        this.img = img;
    }
}

// Initializing object Messi

const Messi = new player("Messi","./img/country/Argentina.jpg","./img/club/Barcelona.png",700,"Left",94,97,99,null,"./img/players/Messi.png");

// Initializing object Ronaldo

const Ronaldo = new player("Ronaldo","./img/country/Portugal.png","./img/club/Juventus.png",900,"Right",97,98,94,null,"./img/players/Ronaldo.png");

// Setting up Ronaldo in HTML

document.getElementById("Player 1").setAttribute('src',Ronaldo.img);
document.getElementById("Flag 1").setAttribute('src',Ronaldo.country);
document.getElementById("Name 1").innerHTML = Ronaldo.name;