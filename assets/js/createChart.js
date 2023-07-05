const ctx = document.getElementById('myChart');
let chart; // Variable to store the chart, must be global

export const createChart = (pokemon1, pokemon2) => {

    // If there is already a chart on the page, destroy it before creating a new one
    if (chart) {
        chart.destroy();
    }

    console.log(pokemon1);
    console.log(pokemon2);

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            // Labels with the name of every pokemon stat
            labels: ['HP', 'ataque', 'defensa', 'ataque especial', 'defensa especial', 'velocidad'],
            datasets: [
                {
                    label: pokemon1.name,
                    data: pokemon1.stats.map((element) => element.base_stat),
                    backgroundColor: 'rgb(255, 201, 222)',
                },
            {
                label: pokemon2.name,
                data: pokemon2.stats.map((element) => element.base_stat),
                backgroundColor: 'rgb(178, 228, 240)',
            }]
        }
    });
}