import character from "./Character.mjs";
import { Dies } from "../Constants.mjs";

export default class Villain extends character {
    constructor (name, INT, STR, DUR, SPE, POW, COM, HP){
        super(name, INT, STR, DUR, SPE, POW, COM, HP);
        this.contrary; //ataca enemigo o no
    }

    static create(name, INT, STR, DUR, SPE, POW, COM){
        let HP = STR * 10;
        if (HP > 666){
            HP = 666;
        }
        return new Villain (name, INT, STR, DUR, SPE, POW, COM, HP);
    }

    attack (result, diesContainer) {

        if (result >= 1 || result <= 17) {
            this.contrary = true;
            this.normal(result);
        }

        if (result >=18 || result<=20 ) {
            this.contrary = true;
            this.critic(result , diesContainer);
        }

    }

    normal(result) {
        let normalDamage = Math.ceil((this.POW + this.STR) * result / 100);
    }

    critic(result, diesContainer) {
        let critic;
        switch (result) {
            case 18:
                critic = ((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE3].roll(2));
                break;
            case 19:
                critic = ((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE3].roll(3));
                break;
            case 20:
                critic = ((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE5].roll(4)); 
                break;     
        }
        let totalDamage = this.normal(result) + critic;
        return totalDamage;
    }
}