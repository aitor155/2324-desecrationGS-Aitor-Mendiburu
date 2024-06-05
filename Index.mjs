import axios from 'axios';
import DiesContainer from './Dies/DiesContainer.mjs';
import TrainingGround from './Character/TrainingGround.mjs';
import { Character } from './Constants.mjs';
import Combat from './Combat.mjs;'


const data = [];
let object = {};
let villainZarate;
let superhero;
let filteredData = []
axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(function (response) {
            for (let i = 0; i < response.data.length; ++i){
                object = {
                    name: response.data[i].name,
                    powerstats: response.data[i].powerstats
                }
                data.push(object);
            }
            /////AQUI CREAN Y SE EJECUTAN LO SIGUIENTE:
            //crear lista de dados
            let containerDies = new DiesContainer();
            let allDies = containerDies.createDies();
            console.log(allDies);

            //crear personajes a traves de la factory
            let factory = new TrainingGround(data);
            let villain = factory.createCharacters(Character.VILLAIN);
            console.log(villain);
            let hero = factory.createCharacters(Character.SUPERHERO);
            console.log(hero);
            let characteres = [villain , hero];

            //crea combate y lo ejecuta
            let combat = new Combat(characteres, allDies);
            combat.execute();
        });




