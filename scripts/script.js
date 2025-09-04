
        const RevenueData = {
            labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Store 1',
                data: [1010, 975, 900, 1060, 1370, 1015, 1500],
                borderColor: 'rgb(254, 99, 133)',
                backgroundColor: 'rgba(254, 99, 133, 0.5)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Store 2',
                data: [1050, 618, 455, 830, 610, 800, 1220], // Example data for units sold
                borderColor: 'rgb(54, 161, 234)',
                backgroundColor: 'rgba(54, 161, 234, 0.5)',
                borderWidth: 2,
                tension: 0.4
            }]
        };
        const UserData = {
            labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'MAU',
                data: [570, 586, 566, 510, 524, 545, 520],
                borderColor: 'rgb(54, 161, 234, 0.5)',
                backgroundColor: 'rgba(54, 161, 234, 0.5)',
                borderWidth: 2,
                tension: 0.1,
                fill: true
            }]
        };
        

        // Configuration options for the chart
        const RevenueConfig = {
            type: 'bar',
            data: RevenueData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max:1600,
                        ticks: {stepSize:200}
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                    }
                }
            }
        };

        const ActiveUserConfig = {
            type: 'line',
            data: UserData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        min:500,
                        max:590,
                        ticks: {stepSize:10}
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                    }
                }
            }
        };

        // Render the chart
        window.onload = function() {
            const ctx = document.getElementById('RevenueBox').getContext('2d');
            new Chart(ctx, RevenueConfig);

            const ctx2 = document.getElementById('ActiveUserBox').getContext('2d');
            new Chart(ctx2, ActiveUserConfig);
        };
