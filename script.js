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
        "Antagonisme et stimulateur de défense des plantes", "Antagonisme et stimulateur de défense des plantes", "Ingestion", "Parasitisme", "Ingestion", "Ingestion", "Asphyxies", "Parasitoïdes", "Parasitoïdes", "Parasites des oeufs de pyrale", "Parasitisme", "Prédateurs", "Ingestion", "Stimulateur des défenses des plantes", "Antagonisme et stimulateur de défense des plantes", "Antagonisme et Stimulateur de défense des plantes contre sclérotinose", "Ingestion", "Parasites des sclérotes", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Stimulateur des défenses des plantes", "Stimulateur des défenses des plantes", "Ingestion", "Asphyxies", "Asphyxies", "Asphyxies", "Ingestion", "Fongicide de contact multi-sites", "Parasitisme", "Prédateurs", "Fongicide de contact multi-sites", "Stimulateur des défenses des plantes", "Ingestion", "Détection/piégeages de masse", "Détection/piégeages de masse", "Prédateurs", "Parasitoïdes", "Détection/piégeages de masse", "Prédateurs", "Parasitoïdes", "Prédateurs", "Antagonisme et stimulateur de défense des plantes", "Antagonisme et stimulateur de défense des plantes", "Parasites des sclérotes", "Détection/piégeages de masse", "Détection/piégeages de masse", "Fongicide de contact multi-sites", "Ingestion", "Fongicide de contact multi-sites", "Plantes attractives", "Parasitoïdes", "Antagonisme et stimulateur de défense des plantes", "Plantes relais", "Fongicide de contact multi-sites", "Acariens prédateurs", "Ingestion", "Fongicide de contact multi-sites", "Acariens prédateurs", "Fongicide de contact multi-sites", "Parasitoïdes", "Prédateurs", "Prédateurs", "Ingestion", "Parasitisme", "Détection/piégeages de masse", "Parasitisme", "Asphyxies", "Effet barrières", "Confusion sexuelle", "Parasitisme", "Plantes répulsives", "Parasitisme", "Asphyxies", "Effet barrières", "Confusion sexuelle", "Parasitisme", "Plantes répulsives", "Parasitisme", "Asphyxies", "Effet barrières", "Confusion sexuelle", "Parasitisme", "Plantes répulsives", "Parasitisme", "Asphyxies", "Effet barrières", "Confusion sexuelle", "Parasitisme", "Plantes répulsives", "Parasitisme", "Asphyxies", "Effet barrières", "Confusion sexuelle", "Parasitisme", "Plantes répulsives", "Fongicides sytémique vis-à-vis des oomycètes", "Ingestion", "Biofumigation", "Effet barrières", "Effet barrières", "Piégeage massif par phéromone", "Confusion sexuelle", "Fongicide de contact multi-sites", "Effet barrières", "Effet Barrières", "Piégeages massifs", "Abris pour faune auxiliaire", "Abris pour faune auxiliaire", "Confusion sexuelle", "Fongicide de contact multi-sites", "Asphyxies", "Effet physiologique", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Effet barrières", "Confusion sexuelle", "Effet barrières", "Confusion sexuelle", "Asphyxies", "Parasitoïdes", "Prédateurs", "Parasitoïdes", "Parasitoïdes", "Parasitoïdes", "Piégeages massifs", "Piégeage massif par phéromone", "Biofumigation", "Ingestion", "Biofumigation", "Répulsif", "Antagonisme", "Fumigation", "Ingestion", "Ingestion", "Ingestion", "Ingestion", "Herbicides", "Prédateurs et parasitoïdes", "Prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Stimulateur des défenses des plantes", "Prédateurs", "Parasitoïdes", "Déssechement de la cuticule des insectes", "Fongicide de contact multi-sites", "Prédateurs", "Prédateurs", "Prédateurs", "Acariens prédateurs", "Fongicide de contact multi-sites", "Prédateurs", "Prédateurs", "Prédateurs", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Parasitoïdes", "Antagonisme et stimulateur de défense des plantes", "Prédations", "Fongicide de contact multi-sites", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Prédateurs", "Acariens prédateurs", "Parasitoïdes", "Prédateurs", "Déssechement de la cuticule des insectes", "Fongicide de contact multi-sites", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Prédateurs", "Prédateurs", "Stimulateur des défenses des plantes", "Parasitoïdes", "Parasitoïdes", "Fongicide de contact multi-sites", "Parasitisme", "Prédateurs", "Prédateurs", "Prédateurs", "Prédateurs", "Asphyxies", "Asphyxies", "Fongicide de contact multi-sites", "Antagonisme et stimulateur de défense des plantes contre sclérotinose", "Stimulateur des défenses des plantes", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Parasitoïdes", "Parasitoïdes", "Fongicide de contact multi-sites", "Antagonisme", "Antagonisme et stimulateur de défense des plantes", "Parasitoïdes", "Parasitoïdes", "Prédateurs", "Déssechement de la cuticule des insectes", "Parasitisme", "Acariens prédateurs", "Acariens prédateurs", "Antagonisme", "Stimulateur des défenses des plantes", "Parasitoïdes", "Parasitoïdes", "Prédateurs", "Prédateurs", "Détection/piégeages de masse", "Fongicide de contact multi-sites", "Parasitoïdes", "Parasitoïdes", "Prédateurs", "Prédateurs", "Détection/piégeages de masse", "Fongicide de contact multi-sites", "Herbicides", "Fongicides sytémique vis-à-vis des oomycètes", "Confusion sexuelle", "Effet barrières", "Confusion sexuelle", "Effet barrières", "Asphyxies", "Confusion sexuelle", "Fongicide de contact multi-sites", "Ingestion", "Effet barrières", "Ingestion", "Asphyxies", "Confusion sexuelle", "Fongicide de contact multi-sites", "Antagonisme et stimulateur de défense des plantes", "Antagonisme et stimulateur de défense des plantes", "Ingestion", "Effet aération", "Effet aération", "Effet aération", "Effet aération", "Asphyxies", "Asphyxies", "Asphyxies", "Asphyxies", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Plantes attractives", "Plantes attractives", "Plantes attractives", "Plantes attractives", "Confusion sexuelle", "Confusion sexuelle", "Confusion sexuelle", "Confusion sexuelle", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicides mutli sites", "Répulsif", "Fongicide de contact multi-sites", "Répulsif", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Stimulateur des défenses des plantes", "Stimulateur des défenses des plantes", "Antagonisme et stimulateur de défense des plantes contre sclérotinose", "Plantes pièges", "Parasites des sclérotes", "Ingestion", "Parasites des sclérotes", "Parasitoïdes", "Herbicides", "Parasites des sclérotes", "Ingestion", "Ingestion", "Ingestion", "Herbicides", "Antagonisme et stimulateur de défense des plantes contre sclérotinose", "Ingestion", "Antagonisme et stimulateur de défense des plantes contre sclérotinose", "Ingestion", "Antagonisme", "Antagonisme", "Antagonisme", "Antagonisme", "Parasitoïdes", "Parastoïdes", "Prédateurs", "Détection/piégeages de masse", "Parastoïdes", "Antagonisme et stimulateur de défense des plantes", "Antagonisme et stimulateur de défense des plantes", "Parasites des sclérotes", "Ingestion", "Répulsif", "Parasites des sclérotes", "Parasites des sclérotes", "Fumigation", "Fumigation", "Fumigation", "Antagonisme", "Antagonisme", "Antagonisme et stimulateur de défense des plantes", "Antagonisme et stimulateur de défense des plantes", "Parasites des sclérotes", "Ingestion", "Parasitoïdes", "Fongicide de contact multi-sites", "Fumigation", "Fongicide de contact multi-sites", "Antagonisme", "Antagonisme", "Acariens prédateurs", "Acariens prédateurs", "Biofumigation", "Biofumigation", "Biofumigation", "Biofumigation", "Ingestion", "Antagonisme", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Parasitoïdes", "Parasitoïdes", "Fongicide de contact multi-sites", "Prédateurs", "Fongicide de contact multi-sites", "Fongicide de contact multi-sites", "Stimulateur des défenses des plantes", "Stimulateur des défenses des plantes", "Acariens prédateurs", "Antagonisme", "Parasitoïdes", "Parasitoïdes", "Ingestion", "Parasitoïdes", "Ingestion", "Prédateurs", "Parasites des sclérotes", "Prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Antagonisme", "Antagonisme et stimulateur de défense des plantes contre sclérotinose", "Acariens prédateurs", "Acariens prédateurs", "Parasite de oomycètes", "Antagonisme", "Prédateurs", "Prédateurs", "Asphyxies", "Parasitoïdes", "Parasitoïdes", "Parasitoïdes", "Prédateurs", "Prédateurs", "Prédateurs", "Ingestion", "Prédateurs", "Prédateurs", "Parasitoïdes", "Acariens prédateurs", "Prédateurs", "Acariens prédateurs", "Parasitoïdes", "Prédateurs", "Antagonisme", "Parasites", "Acariens prédateurs", "Acariens prédateurs", "Plantes attractives", "Prédateurs", "Acariens prédateurs", "Parasitoïdes", "Acariens prédateurs", "Antagonisme", "Antagonisme", "Antagonisme", "Acariens prédateurs", "Ingestion", "Parasitoïdes", "Parasitisme", "Stimulateur des défenses des plantes", "Acariens prédateurs", "Ingestion", "Parasitoïdes", "Plantes attractives", "Biofumigation", "Evitement", "Fumigation", "Effet évitement", "Evitement", "Parasites des sclérotes", "Acariens prédateurs", "Acariens prédateurs", "Prédateurs", "Prédateurs", "Parasitoïdes", "Parasitoïdes", "Fongicide de contact multi-sites", "Prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Acariens prédateurs", "Parasitoïdes", "Acariens prédateurs", "Acariens prédateurs", "Parasitoïdes", "Parasitoïdes", "Prédateurs", "Fumigation", "Evitement", "Effet évitement", "Effet évitement", "Effet évitement", "Effet aération", "Effet évitement", "Effet évitement", "Effet évitement", "Plantes pièges", "Parasitoïdes", "Ingestion", "Effet attractif", "Détection/piégeages de masse", "Ingestion", "Biofumigation", "Ingestion", "Effet attractif", "Détection/piégeages de masse", "Fongicide de contact multi-sites", "Ingestion", "Ingestion", "Biofumigation", "Effet attractif", "Détection/piégeages de masse", "Ingestion", "Parasitoïdes", "Parasites des sclérotes", "Parasites des sclérotes", "Ingestion", "Ingestion", "Parasites des oeufs de pyrale", "Parasites des sclérotes"
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
