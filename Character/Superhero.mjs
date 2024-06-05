import character from "./Character.mjs";
import { Dies } from "../Constants.mjs";

export default class Superhero extends character {
    constructor (name, INT, STR, DUR, SPE, POW, COM, HP){
        super(name, INT, STR, DUR, SPE, POW, COM, HP);
        this.contrary = true; //ataca enemigo o no
    }

    static create(name, INT, STR, DUR, SPE, POW, COM){
        let HP = STR * 10;
        if (HP > 666){
            HP = 666;
        }
        return new Superhero (name, INT, STR, DUR, SPE, POW, COM, HP);
    }

    attack (result, diesContainer) {
        let damage;

        if (result >=1 && result <= 2) {
            this.contrary = false;
            damage= this.miss(result, diesContainer);
            console.log("daño infligido: "+ damage);
            return damage;        
        }

        if (result >= 3 && result <= 17) {
            this.contrary = true;
            damage = this.normal(result);
            console.log("daño infligido: "+ damage);
            return damage;
        }

        if (result >=18 && result<=20 ) {
            this.contrary = true;
            damage = this.critic(result , diesContainer);
            console.log("daño infligido: "+ damage);
            return damage;
        }

    }

    miss (result, diesContainer){
        let miss;
        if (result === 1) {
            miss = Math.ceil(this.SPE / (diesContainer[Dies.DIE3].roll(1)));
            return miss;
        }
        if (result === 2) {
            miss = Math.ceil(this.SPE / (diesContainer[Dies.DIE3].roll(4)));
            return miss;
        }
    }

    normal(result) {
        let normalDamage = Math.ceil((this.POW + this.STR) * result / 100);
        return normalDamage;
    }

    critic(result, diesContainer) {
        let critic;
        switch (result) {
            case 18:
                critic = Math.ceil((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE3].roll(1));
                break;
            case 19:
                critic = Math.ceil((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE3].roll(2));
                break;
            case 20:
                critic = Math.ceil((this.INT * this.DUR) / 100) * (diesContainer[Dies.DIE5].roll(3));
                break;     
        }
        let totalDamage = this.normal(result) + critic;
        return totalDamage;
    }
}