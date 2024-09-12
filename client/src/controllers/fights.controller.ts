import axios from "axios";
import { Fight } from "../interfaces/fight";
import { Pokemon } from "../interfaces/pokemon";

export async function fightPokemons(data:Pokemon[]){
    try {
        const response = await axios.post('http://localhost:3000/fightPokemons',data)
        return response.data;
    } catch (error) {
        return new Error();   
    }
}

export async function saveFight(data:Fight){
    try {
        const response = await axios.post('http://localhost:3000/fight',data)
        return response.data;
    } catch (error) {
        return new Error();   
    }
}