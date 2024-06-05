import Die from "./Die.mjs";


export default class DiesContainer {


    constructor (){

    }

    createDies() { ///static???
    let dies = [];
        let die3 = this.createD3();
        let die5 = this.createD5();
        let die20 = this.createD20();
        let die100 = this.createD100();

    dies = [die3, die5, die20, die100];
    return dies;    
    }


    createD3(){
        let values = [1,2,3];
        return new Die (values);
    }

    createD5(){
        let values = [1,2,3,4,5];
        return new Die (values);
    }

    createD20(){
        let values = [];
        for (let i = 0; i <=20; ++i){
            values.push(i);
        }
        return new Die (values);
    }
    createD100(){
        let values = [];
        for (let i = 1; i <= 100; ++i)
            {
                values.push(i);
            }
        return new Die (values);
    }
}