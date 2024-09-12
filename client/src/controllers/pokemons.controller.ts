import axios from "axios";

export async function saveAllPokemons(){
    try {
        const response = await axios.post('http://localhost:3000/pokemons')
        return response.data.message;
    } catch (error) {
        return new Error();   
    }
}

export async function getAllPokemons(){
    try {
        const response = await axios.get('http://localhost:3000/pokemons')
        return response.data;
    } catch (error) {
        return new Error();   
    }
}