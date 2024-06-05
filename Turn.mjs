import { Dies } from "./Constants.mjs";
export default class Turn{
    constructor(currentPlayer, otherPlayer){
        this.currentPlayer = currentPlayer;
        this.otherPlayer = otherPlayer;
    }

    execute (diesContainer) {
        console.log("------------------");
        console.log("el asalto es para: " + this.currentPlayer.name);
        let result = diesContainer[Dies.DIE20].roll(1);
        // let damage = this.currentPlayer.attack(result, diesContainer);
        // // console.log("daño hecho: " + damage);

        if (this.isThereAttack(diesContainer)){
            this.damage(result, diesContainer);
            return true;
        }
        else{
            //cambia de turno en combat.mjs
            return false;
        }
        
    }



    isThereAttack(diesContainer) {
        if (diesContainer[Dies.DIE100].roll(1) <= this.currentPlayer.COM)
            {
                console.log("ha obtenido " + diesContainer[Dies.DIE100].roll(1) + " y tiene exito");
                return true;
            }
        else {
                console.log("ha obtenido " + diesContainer[Dies.DIE100].roll(1) + " y NO tiene exito");
               return false;
        }
    }

    damage(result, diesContainer) {
        let damage;
        console.log("--------------------");
        console.log("Ha obtenido " + result + " y desbaina su espada y ataca");
        damage = this.currentPlayer.attack(result, diesContainer);

        console.log("------------------------");
        
        if (this.currentPlayer.contrary === true){
            this.otherPlayer.HP -= damage;
            console.log(this.currentPlayer.name + " ha infligido " + "- " + damage + " a " + this.otherPlayer.name )
        }
        if (this.currentPlayer.contrary === false){
            console.log("-----------------");
            console.log(this.currentPlayer.name + " se ha autolesionado " + "- " + damage )
            this.currentPlayer.HP -= damage;
        }
    }
}