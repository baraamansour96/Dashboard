const ctx = document.getElementById('lineChart').getContext('2d');
                const phoneContainer = document.querySelector('.phone-container');
                const alertSound = document.getElementById('alert-sound');
                let data = {
            labels: ['0', '0', '0', '0', '0'],
            datasets: [{
                label: 'Gebruik van mobiele telefoon',
                data: [0, 0, 0, 0, 0], // Begin met alle waarden op 0
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                lineTension: 0.4
            }]
        };

        const lineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                animation: {
                    duration: 1500, // Animatieduur in milliseconden
                    easing: 'easeInOutQuart' // Easing-functie voor de animatie (hier: soepel in- en uitfaden)
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
              // Simuleer telefoongebruik 
                setTimeout(() => {
                    phoneContainer.classList.add('active');
                    alertSound.play(); // Speel het waarschuwingsgeluid af

                    // Stop de animatie en melding na 5 seconden
                    setTimeout(() => {
                        phoneContainer.classList.remove('active');

                        alertSound.pause()
                        clearInterval(lineInterval);
                    }, 5000);
                }, 1000); // Wacht 1 seconde voordat de animatie begint 


                 // Simuleer bewegende lijn
           
                 const lineInterval = setInterval(() => {
        const randomValue = Math.floor(Math.random() * 10) + 1;
        data.datasets[0].data.shift();
        data.datasets[0].data.push(randomValue);
        lineChart.update();
    }, 900);
   