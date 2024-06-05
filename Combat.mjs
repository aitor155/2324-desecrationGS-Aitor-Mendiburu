import Turn from "./Turn.mjs";
export default class Combat {
    constructor (characteres, diesContainer) {
        this.characteres = characteres;
        this.currentTurnObject = new Turn (this.characteres[0], this.characteres[1]);
        this.diesContainer = diesContainer;
    }

    execute (){
        let currentTurn = 0;

        while (this.characteres[currentTurn].HP > 0 || this.characteres[otherPlayer].HP > 0)
            {
                this.currentTurnObject.execute();


                if (currentTurn === 0)
                    {
                        this.currentTurnObjectcurrentTurn.currentPlayer = this.characteres[1];
                        this.currentTurnObjectcurrentTurn.otherPlayer = this.characteres[0];
                        console.log(this.characteres[currentTurn].name + "HP: " + this.characteres[currentTurn].HP);
                        console.log(this.characteres[0].name + "HP: " + this.characteres[currentTurn].HP);
                        currentTurn = 1;
                    }
                if (currentTurn === 1)
                    {
                        this.currentTurnObjectcurrentTurn.currentPlayer = this.characteres[0];
                        this.currentTurnObjectcurrentTurn.otherPlayer = this.characteres[1];
                        console.log(this.characteres[currentTurn].name + "HP: " + this.characteres[currentTurn].HP);
                        console.log(this.characteres[1].name + "HP: " + this.characteres[currentTurn].HP);
                        currentTurn = 0;
                    }
            }
        
    }


    
}