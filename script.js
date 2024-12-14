document.addEventListener('DOMContentLoaded', function () {
    // Vérifiez que Chart.js est inclus dans votre projet
    // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    // Graphique 1 : Impact des traitements aériens
    const ctx = document.getElementById('graphique1').getContext('2d');
    const efficaciteTraitementsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pulvérisations', 'Insectes Prédateurs', 'Répulsifs'],
            datasets: [{
                label: 'Efficacité (%)',
                data: [85, 75, 60], // Remplacez avec vos données réelles
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Efficacité des Méthodes de Biocontrôle Aérien'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }
            }
        }
    });

    // Graphique 2 : Impact des traitements souterrains
    const ctx2 = document.getElementById('graphique2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Avant traitement', 'Après traitement'],
            datasets: [{
                label: 'Biomasse racinaire',
                data: [10, 30], // Remplacez avec vos données réelles
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        min: 0 // Ajustez selon les besoins si vos données ont des valeurs négatives
                    }
                }
            }
        }
    });
});
const ctx3 = document.getElementById('graphique3').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Aériennes', 'Souterraines'],
            datasets: [{
                label: 'Proportion des traitements',
                data: [60, 40], // Remplacez avec vos données réelles
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Répartition des Modes d’Action des Biocontrôles'
                }
            }
        }
    });

    const ctx4 = document.getElementById('graphique4').getContext('2d');
    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Avant traitement', 'Après traitement'],
            datasets: [{
                label: 'Infestations foliaires',
                data: [40, 10], // Remplacez avec vos données réelles
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Réduction des Infestations Foliaires'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctx5 = document.getElementById('graphique5').getContext('2d');
    new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ['Année 1', 'Année 2', 'Année 3', 'Année 4', 'Année 5'],
            datasets: [{
                label: 'Rendements avec biocontrôle',
                data: [50, 60, 70, 80, 90], // Remplacez avec vos données réelles
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Rendements sans biocontrôle',
                data: [45, 50, 55, 60, 65], // Remplacez avec vos données réelles
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Amélioration des Rendements Agricoles avec Biocontrôles'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });