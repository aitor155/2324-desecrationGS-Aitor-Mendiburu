export default class Die{
    constructor(values){ 
        this.values = values;                    
    }

    roll(quantity){
        let max = this.values.length - 1;
        let min = this.values[0];
        let random = 0;
        for (let i = 0; i < quantity; ++i){

            random += Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return random;
    }

}