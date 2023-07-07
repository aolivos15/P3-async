import { createChart } from "./createChart.js";

// Selecting elements from the page
const input1 = document.getElementById('input-one');
const input2 = document.getElementById('input-two');
const button = document.getElementById('submit-button');

// Variables to store the pokemon queries
let query1 = '';
let query2 = '';

// Function to obtain pokemon data from the Pokemon API
const getPokemonData = async (query) => {
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

// When the user clicks the "Comparar" button, fetch the data
// of the pokemon on the form and use it to create a chart.
button.addEventListener('click', async (event) => {
    // Prevent the button from resetting the page
    event.preventDefault();

    // Check if any field of the form is empty
    if (!input1.value || !input2.value) {
        // Stop the function if any field is empty
        alert('Por favor ingrese los nombres de dos Pokemon.');
        return;
    }
    // Store both queries from the data on the form
    query1 = input1.value;
    query2 = input2.value;

    // Get pokemon data from the Pokemon API
    let data1 = await getPokemonData(query1);
    let data2 = await getPokemonData(query2);

    // Create a chart with the obtained pokemon data
    createChart(data1, data2);

});