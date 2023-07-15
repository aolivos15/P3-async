const cardContainer1 = document.getElementById('pokemon-card1');
const cardContainer2 = document.getElementById('pokemon-card2');

// Function to display cards with pokemon images over the stats chart
export const displayCards = (pokemon1, pokemon2) => {

    // Get pokemon primary types from the data obtained from the API
    const pokemon1Type1 = pokemon1.types[0].type.name;
    const pokemon2Type1 = pokemon2.types[0].type.name;
    // Variables to hold secondary types for pokemon that have one
    let pokemon1Type2, pokemon2Type2 = '';
    // Variables to toggle the "hide" class if the pokemon doesn't have a secondary type
    let display2ndType1, display2ndType2 = '';

    // Get the secondary type of the pokemon if it has one
    if (pokemon1.types.length == 2) {
        pokemon1Type2 = pokemon1.types[1].type.name;
    } else {
        // If the pokemon has only one type, add the "hide" class to its corresponding span tag
        display2ndType1 = 'hide';
    }
    if (pokemon2.types.length == 2) {
        pokemon2Type2 = pokemon2.types[1].type.name;
    } else {
        display2ndType2 = 'hide';
    }

    // Display pokemon sprites and types inside the card containers
    cardContainer1.innerHTML = `
        <img src=${pokemon1.sprites.front_default}>
        <p class="pokemon-name">${pokemon1.name}</p>
        <p>
            <span class="pokemon-type ${pokemon1Type1}">${pokemon1Type1}</span>
            <span class="pokemon-type ${pokemon1Type2}">${pokemon1Type2}</span>
        </p>`;
    cardContainer2.innerHTML = `
        <img src=${pokemon2.sprites.front_default}>
        <p class="pokemon-name">${pokemon2.name}</p>
        <p>
            <span class="pokemon-type ${pokemon2Type1}">${pokemon2Type1}</span>
            <span class="pokemon-type ${pokemon2Type2} ${display2ndType2}">${pokemon2Type2}</span>
        </p>`;

}