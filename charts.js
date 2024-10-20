
document.addEventListener('DOMContentLoaded', function () {

    const barChartCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Revenue (GHC)',
                data: [12000, 19000, 3000, 5000],
                backgroundColor: [
                    '#5662F6',
                    '#F69A56',
                    '#56F6A6',
                    '#F6569A'
                ],
                borderColor: [
                    '#5662F6',
                    '#F69A56',
                    '#56F6A6',
                    '#F6569A'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false 
                }
            },
            layout: {
                padding: 10 
            }
        }
    });

    const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
    const doughnutChart = new Chart(doughnutChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D'],
            datasets: [{
                label: 'Revenue Distribution',
                data: [10000, 15000, 12000, 8000],
                backgroundColor: [
                    '#5662F6',
                    '#F69A56',
                    '#56F6A6',
                    '#F6569A'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: 10 
            }
        }
    });

    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineChartCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Orders',
                data: [3500, 4200, 3100, 4800, 5300, 4600],
                borderColor: '#5662F6',
                fill: true,
                backgroundColor: 'rgba(86, 98, 246, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                y: {
                    beginAtZero: true
                }
            },

            layout: {
                padding: 10 
            }
        }
    });

});
