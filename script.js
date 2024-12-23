document.addEventListener('DOMContentLoaded', function () {
    // Chargement des données CSV
    d3.csv("data.csv").then(function (data) {
        console.log("Données chargées :", data);

        // Premier graphique : Répartition des traitements
        const countsParties = data.reduce((acc, row) => {
            const type = row['Partie traitée']; // Remplacez par la colonne réelle
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        const totalParties = Object.values(countsParties).reduce((sum, count) => sum + count, 0);
        const labelsParties = Object.keys(countsParties);
        const percentagesParties = labelsParties.map(label => ((countsParties[label] / totalParties) * 100).toFixed(2));

        const ctxParties = document.getElementById('partiesTraiteesChart').getContext('2d');
        new Chart(ctxParties, {
            type: 'pie',
            data: {
                labels: labelsParties,
                datasets: [{
                    data: percentagesParties,
                    backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'],
                    hoverOffset: 4
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                }
            }
        });

        // Deuxième graphique : Répartition des groupes ciblés
const countsGroupesCibles = data.reduce((acc, row) => {
const groupeCible = row['Groupe ciblé']; // Remplacez par la colonne réelle
acc[groupeCible] = (acc[groupeCible] || 0) + 1;
return acc;
}, {});

const totalGroupesCibles = Object.values(countsGroupesCibles).reduce((sum, count) => sum + count, 0);
const labelsGroupesCibles = Object.keys(countsGroupesCibles);
const percentagesGroupesCibles = labelsGroupesCibles.map(label => ((countsGroupesCibles[label] / totalGroupesCibles) * 100).toFixed(2));

// Regrouper les groupes avec moins de 5% dans un groupe "Autre"
let otherCountGroupesCibles = 0;
const newLabelsGroupesCibles = [];
const newPercentagesGroupesCibles = [];
const newBackgroundColorsGroupesCibles = [];
const colorsGroupesCibles = [
'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
'rgba(201, 203, 207, 0.6)', 'rgba(102, 204, 0, 0.6)'
];

// Parcours des données pour créer les nouvelles listes avec le groupe "Autre"
labelsGroupesCibles.forEach((label, index) => {
const percentage = parseFloat(percentagesGroupesCibles[index]);

if (percentage < 5) {
// Ajouter à "Autre"
otherCountGroupesCibles += countsGroupesCibles[label];
} else {
newLabelsGroupesCibles.push(label);
newPercentagesGroupesCibles.push(percentage);
newBackgroundColorsGroupesCibles.push(colorsGroupesCibles[newLabelsGroupesCibles.length - 1] || 'rgba(201, 203, 207, 0.6)');
}
});

// Ajouter "Autre" si nécessaire
if (otherCountGroupesCibles > 0) {
newLabelsGroupesCibles.push('Autre');
newPercentagesGroupesCibles.push(((otherCountGroupesCibles / totalGroupesCibles) * 100).toFixed(2));
newBackgroundColorsGroupesCibles.push('rgba(0, 0, 0, 0.6)'); // Couleur pour "Autre"
}

const ctxGroupesCibles = document.getElementById('groupecible').getContext('2d');
new Chart(ctxGroupesCibles, {
type: 'bar',
data: {
labels: newLabelsGroupesCibles,
datasets: [{
    data: newPercentagesGroupesCibles,
    backgroundColor: newBackgroundColorsGroupesCibles,
    borderWidth: 1
}]
},
options: {
responsive: true,
plugins: {
    title: {
        display: true,
        text: 'Répartition des groupes ciblés'
    }
}
}
});



// Deuxième graphique : Répartition des modes d'action
const countsModesAction = data.reduce((acc, row) => {
const modeAction = row['Mode d\'action']; // Remplacez par la colonne réelle
acc[modeAction] = (acc[modeAction] || 0) + 1;
return acc;
}, {});

const totalModesAction = Object.values(countsModesAction).reduce((sum, count) => sum + count, 0);
const labelsModesAction = Object.keys(countsModesAction);
const percentagesModesAction = labelsModesAction.map(label => ((countsModesAction[label] / totalModesAction) * 100).toFixed(2));

// Regrouper les modes d'action avec moins de 5% dans un groupe "Autre"
let otherCountModesAction = 0;
const newLabelsModesAction = [];
const newPercentagesModesAction = [];
const newBackgroundColorsModesAction = [];
const colorsModesAction = [
'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
'rgba(201, 203, 207, 0.6)', 'rgba(102, 204, 0, 0.6)'
];

// Parcours des données pour créer les nouvelles listes avec le groupe "Autre"
labelsModesAction.forEach((label, index) => {
const percentage = parseFloat(percentagesModesAction[index]);

if (percentage < 4) {
// Ajouter à "Autre"
otherCountModesAction += countsModesAction[label];
} else {
newLabelsModesAction.push(label);
newPercentagesModesAction.push(percentage);
newBackgroundColorsModesAction.push(colorsModesAction[newLabelsModesAction.length - 1] || 'rgba(201, 203, 207, 0.6)');
}
});

// Ajouter "Autre" si nécessaire
if (otherCountModesAction > 0) {
newLabelsModesAction.push('Autre');
newPercentagesModesAction.push(((otherCountModesAction / totalModesAction) * 100).toFixed(2));
newBackgroundColorsModesAction.push('rgba(0, 0, 0, 0.6)'); // Couleur pour "Autre"
}

const ctxModesAction = document.getElementById('modedaction').getContext('2d');
new Chart(ctxModesAction, {
type: 'doughnut',
data: {
labels: newLabelsModesAction,
datasets: [{
    data: newPercentagesModesAction,
    backgroundColor: newBackgroundColorsModesAction,
    borderWidth: 1
}]
},
options: {
responsive: true,
plugins: {
    title: {
        display: true,
        text: 'Répartition des modes d\'action'
    }
}
}
});
});
});