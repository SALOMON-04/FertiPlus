
// LISTE DES VUES dans l'ordre du DOM

const VUES = [
    'vue-genre',
    'vue-symptomes-femme',
    'vue-temps-femme',
    'vue-resultat-femme',
    'vue-symptomes-homme',
    'vue-temps-homme',
    'vue-resultat-homme'
];


// ALLER — fait coulisser vers la vue demandée

function aller(id) {
    const index = VUES.indexOf(id);
    if (index === -1) return;

    document.getElementById('coulissant').style.transform = `translateX(-${index * 100}%)`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// CHOISIR GENRE — lit le radio et redirige vers le bon parcours

function choisirGenre() {
    const genre = document.querySelector('input[name="genre"]:checked').value;

    if (genre === 'femme') {
        aller('vue-symptomes-femme');
    } else {
        aller('vue-symptomes-homme');
    }
}


// RECOMMENCER — remet tout à zéro et revient à la vue 1

function recommencer() {

    // Décocher toutes les cases
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);

    // Décocher tous les radios sauf le genre par défaut
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    // Remettre "femme" coché par défaut
    document.querySelector('input[name="genre"][value="femme"]').checked = true;

    // Retourner à la vue 1
    aller('vue-genre');
}