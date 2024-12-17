document.addEventListener('DOMContentLoaded', function () {
    // Vérifiez que Chart.js est inclus dans votre projet
    // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    // Graphique 1 : Impact des traitements aériens
    // Données des modes d'action associés aux méthodes
    // Données brutes
    const data = [
        "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Sol", "Sol", "Sol", "Sol", "Aérienne", "Sol", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Sol", "Aérienne", "Sol", "Sol", "Sol", "Aérienne", "Sol", "Sol", "Aérienne", "Sol", "Aérienne", "Sol", "Sol", "Sol", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Aérienne", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Sol", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Sol", "Sol", "Sol", "Sol", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Aérienne", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Aérienne", "Sol", "Sol", "Aérienne", "Aérienne", "Sol"
    ];

    // Calcul des occurrences
    const counts = data.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    // Calcul des pourcentages
    const total = data.length;
    const labels = Object.keys(counts);
    const percentages = labels.map(label => (counts[label] / total * 100).toFixed(2));

    // Création du graphique
    const ctx = document.getElementById('partiesTraiteesChart').getContext('2d');
    const partiesTraiteesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: percentages,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Répartition des Parties Traitées : Aérienne vs Sol'
                }
            }
        }
    });

    // Données brutes
    const data_mode = [
        "Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes","Antagonisme et stimulateur de défense des plantes",
    "Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes","Stimulateur des défenses des plantes",
    "Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites","Fongicide de contact multi-sites",
    "Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion","Ingestion",
    "Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre",
    "Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre",
    "Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre","Autre"

    ];

    const counts_mode = data_mode.reduce((acc, mode) => {
        acc[mode] = (acc[mode] || 0) + 1;
        return acc;
    }, {});
    
    // Calcul des pourcentages
    const total_mode = data_mode.length;
    const labels_mode = Object.keys(counts_mode);
    const percentages_mode = labels_mode.map(label => (counts_mode[label] / total_mode * 100).toFixed(2));
    
    // Création du graphique
    const ctx_mode = document.getElementById('modesActionChart').getContext('2d'); // Utilisation de ctx_mode
    const modesActionChart = new Chart(ctx_mode, { // Remplacer ctx par ctx_mode
        type: 'doughnut',
        data: {
            labels: labels_mode,
            datasets: [{
                data: percentages_mode,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(201, 203, 207, 0.6)',
                    'rgba(102, 204, 0, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(102, 204, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Répartition des Modes d’Action'
                }
            }
        }
    });    
});
