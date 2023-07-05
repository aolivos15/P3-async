import { createChart } from "./createChart.js";

const input1 = document.getElementById('input-one');
const input2 = document.getElementById('input-two');
const button = document.getElementById('submit-button');

let query1 = '';
let query2 = '';

// Obtain pokemon data from the Pokemon API
const getPokemon = async (query) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        alert("No se pudo obtener la información de los Pokemon. Por favor inténtelo más tarde.");
    }
}

button.addEventListener('click', async (event) => {
    event.preventDefault();

    query1 = input1.value;
    query2 = input2.value;

    let data1 = await getPokemon(query1);
    let data2 = await getPokemon(query2);

    createChart(data1, data2);

});