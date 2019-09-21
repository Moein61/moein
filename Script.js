class Character{

    constructor(name,energy,hitpoints,id){

        this.name=name;
        this.energy=energy;
        this.hitpoints=hitpoints;
        this.id=id;
    }

    display = function(){

        document.getElementById(this.id).innerHTML=`name: ${this.name} <br> energy: ${this.energy} <br> hitpoints: ${this.hitpoints}`;

    }

    attack = function(opponent){
        let newEnergy= opponent.energy - this.hitpoints;
        opponent.energy=newEnergy;
        opponent.display();
        if(opponent.energy<=0){
            document.getElementById(opponent.id).innerHTML=`looser`;
            document.getElementById(this.id).innerHTML=`winer`;
        }
    }



}

const c1 = new Character("Augmen",100,20,"c1");
const c2 = new Character("Chun",100,10,"c2");
c1.display();
c2.display();

reset = function(){

    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();

}
