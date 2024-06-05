import Superhero from "./Superhero.mjs";
import Villain from "./Villain.mjs";
import { Character } from "../Constants.mjs";

export default class TrainingGround {


    constructor (data)
    {
        this.data = data;
    }

    createCharacters(type) {
        let character;
        switch (type){
            case Character.VILLAIN:
                character = this.createVillain();
                break;
                
            case Character.SUPERHERO:
                character = this.createRandomSuperheroe();
                break;
        }

        return character;

    }


    createVillain(){
        let villainData = this.dataVillain();
        let name = villainData.name;
        let INT = villainData.powerstats.intelligence;
        let STR = villainData.powerstats.strength;
        let DUR = villainData.powerstats.durability;
        let SPE = villainData.powerstats.speed;
        let POW = villainData.powerstats.power;
        let COM = villainData.powerstats.combat;

        return Villain.create (name, INT, STR, DUR, SPE, POW, COM);

    }


    createRandomSuperheroe(){

        let randomSuper = this.randomSuperheroe();
        let name = randomSuper.name;
        let INT = randomSuper.powerstats.intelligence;
        let STR = randomSuper.powerstats.strength;
        let DUR = randomSuper.powerstats.durability;
        let SPE = randomSuper.powerstats.speed;
        let POW = randomSuper.powerstats.power;
        let COM = randomSuper.powerstats.combat;

        return Superhero.create (name, INT, STR, DUR, SPE, POW, COM);

    }

    dataVillain(){
        let villainZarate;
        for (let j = 0; j < this.data.length; ++j)
        {
            if (this.data[j].name === "Junkpile"){
                villainZarate = this.data[j];
            }
        }
        return villainZarate;
    }

    randomSuperheroe(){
        let randomSuperheroe;
        let max = this.data.length - 1;
        let min = 0;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (this.data[random].name != "Junkpile"){
            randomSuperheroe = this.data[random];
        }
        else{
            randomSuperheroe = this.data[random + 1];
        }
        
        return randomSuperheroe;
    }
    



}    