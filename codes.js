
let dateAujourdhui = new Date(); // Déclaration de la variable Date

// Récupération du jour, du mois et de l'année
let jour = String(dateAujourdhui.getDate()).padStart(2, '0'); // Jour avec zéro devant si nécessaire
let mois = String(dateAujourdhui.getMonth() + 1).padStart(2, '0'); // Mois (janvier = 0)
let annee = dateAujourdhui.getFullYear(); // Année

// Récupération de l'heure et des minutes
let heures = String(dateAujourdhui.getHours()).padStart(2, '0'); // Heures avec zéro devant si nécessaire
let minutes = String(dateAujourdhui.getMinutes()).padStart(2, '0'); // Minutes avec zéro devant si nécessaire

// Création de la chaîne au format jj-mm-yyyy hh:mm
let dateFormatee = `${jour}-${mois}-${annee} ${heures}:${minutes}`;

// Affichage de la date et de l'heure
alert("La date de jourd'hui est le :  " + dateFormatee);
