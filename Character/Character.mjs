export default class Character {
    constructor (name, INT, STR, DUR, SPE, POW, COM, HP){
        this.name = name;
        this.INT = INT;
        this.STR = STR;
        this.DUR = DUR;
        this.SPE = SPE;
        this.POW = POW;
        this.COM = COM;
        this.HP = HP;
    }



    attack(){} //vacio los gestionan las hijas clases

    
}