import { Dies } from "./Constants.mjs";
export default class Turn{
    constructor(currentPlayer, otherPlayer){
        this.currentPlayer = currentPlayer;
        this.otherPlayer = otherPlayer;
    }

    execute (diesContainer) {
        if (this.isThereAttack()){
            this.damage(diesContainer);
            return true;
        }
        else{
            return false;
        }
    }



    isThereAttack() {
        if (this.diesContainer[Dies.DIE100].roll(1) <= this.currentPlayer.COM)
            {
                return true;
            }
        else {
               return false;
        }
    }

    damage(diesContainer) {
        let damage;
        let result = diesContainer[Dies.DIE20].roll(1);
        damage = this.currentPlayer.attack(result, diesContainer);
        if (this.currentPlayer.contrary === true){
            this.otherPlayer.HP -= damage;
        }
        if (this.currentPlayer.contrary === false){
            this.currentPlayer.HP -= damage;
        }
    }
}