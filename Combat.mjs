import Turn from "./Turn.mjs";
export default class Combat {
    constructor (characteres, diesContainer, currentTurnObject, currentPlayer, otherPlayer) {
        this.characteres = characteres;
        this.diesContainer = diesContainer;
        this.currentPlayer = currentPlayer;
        this.otherPlayer = otherPlayer;
        this.currentTurnObject = currentTurnObject;
    }

    static create(characteres, diesContainer){
        let valor1 = characteres[0].INT + characteres[0].COM;
        let valor2 = characteres[1].INT + characteres[1].COM;

        let currentPlayer;
        let otherPlayer;

        if (valor1 > valor2)
            {
                currentPlayer = 0;
                otherPlayer = 1;
            }
        else {
            currentPlayer = 1;
            otherPlayer = 0;
        }

        let currentTurnObject = [new Turn (characteres[currentPlayer], characteres[otherPlayer]), new Turn (characteres[otherPlayer], characteres[currentPlayer])];

        return new Combat (characteres, diesContainer, currentTurnObject, currentPlayer, otherPlayer);
    }

    execute (){
        let currentTurn = 0;
        let otherPlayer = 1;
        let round = 1;

        let applyCurrent;

        console.log("---------------------");
        console.log("Empieza " + this.characteres[currentTurn]);
        console.log("---------------------");

        while (this.characteres[currentTurn].HP > 0 && this.characteres[otherPlayer].HP > 0)
            {
                console.log("comienza la ronda: " + round);
                console.log("-------------------");
                console.log("")
                this.currentTurnObject[currentTurn].execute(this.diesContainer);
                console.log(this.currentTurnObject[currentTurn]);
                
                if (currentTurn === 0)
                    {                     
                        applyCurrent = 1;
                    }
                if (currentTurn === 1)
                    {

                        applyCurrent = -1;
                    }

                currentTurn += applyCurrent;
                round ++;
              
            }
        return console.log("TERMINADO");
        
    }   
}