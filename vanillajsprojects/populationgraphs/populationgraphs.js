let currentChart;

document.getElementById('renderBtn').addEventListener('click', fetchData);

//create var
let countryvar = document.getElementById("country"); //Bring country input to var, not checking value

//fetching data

async function fetchData() {

    const letters = /^[a-zA-Z]+$/; // Create var with only letters

    // Check is country var match with all letters
    if (countryvar.value.match(letters)) {
        let countryCode = document.getElementById('country').value;
        let indicatorCode = document.getElementById('indicatorcode').value;
        const baseUrl = 'https://api.worldbank.org/v2/country/';
        const url = baseUrl + countryCode + '/indicator/' + indicatorCode + '?format=json';
        console.log('Fetching data from URL: ' + url);

        let response = await fetch(url);

        if (response.status == 200) {
            let fetchedData = await response.json();
            console.log(fetchedData);

            let data = getValues(fetchedData);
            let labels = getLabels(fetchedData);
            let countryName = getCountryName(fetchedData);
            renderChart(data, labels, countryName);
        }
    }
    else {
        alert('Input a country code');
    }




}


//Helper functions

const getValues = (data) => {
    let vals = data[1].sort((a, b) => a.date - b.date).map(item => item.value);
    return vals;
}

const getLabels = (data) => {
    let labels = data[1].sort((a, b) => a.date - b.date).map(item => item.date);
    return labels;
}

const getCountryName = (data) => {
    let countryName = data[1][0].country.value;
    return countryName;
}


//Render function

const renderChart = (data, labels, countryName) => {
    let ctx = document.getElementById('myChart').getContext('2d');

    if (currentChart) {
        // Clear the previous chart if it exists
        currentChart.destroy();
    }

    // Draw new chart
    currentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Population, ' + countryName,
                data: data,
                borderColor: '#800080',
                backgroundColor: '#ff80ff',
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



